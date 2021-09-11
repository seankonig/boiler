/* eslint-disable unicorn/filename-case */
import { exec } from 'child_process';
import { mkdirSync, writeFile } from 'fs';
import cli from 'cli-ux';
import chalk = require('chalk');
import createClientDockerFile from './createClientDockerDev';
import createNginxDocker from './createNginxDocker';
import createDockerCompose from './createFullStackDockerCompose';
import createNginxConf from './createNginxConf';
import createServerDockerFile from './createServerDockerDev';

const createReactNestFullStack = ({ projectName }: { projectName: string }) => {
    mkdirSync(projectName);
    mkdirSync(`${projectName}/frontend`);
    mkdirSync(`${projectName}/backend`);
    mkdirSync(`${projectName}/nginx`);

    cli.action.start(
        `🎇🎇🎇 creating your ${chalk.yellow('fullstack')} app`,
        'this takes a while, you should go grab a coffee☕',
        {
            stdout: true
        }
    );

    createNginxDocker(projectName);
    createNginxConf(projectName);
    createDockerCompose(projectName);

    exec(
        `npx create-react-app ${projectName}/frontend/.`,
        (error, stdout, stderr) => {
            if (error) {
                cli.action.stop(error.message);
            }
            if (stderr) {
                cli.action.stop(stderr);
            }
            if (stdout) {
                cli.log('🚀 React setup complete');
                cli.action.start(
                    'now setting up nestjs app',
                    'just a little longer',
                    {
                        stdout: true
                    }
                );
                writeFile(`${projectName}/frontend/.env`, 'PORT=3050', err => {
                    if (err) {
                        cli.log(err.message);
                    }
                    createClientDockerFile(projectName);
                    exec(
                        `npx @nestjs/cli new ${projectName}/backend/. --skip-git --language TS --package-manager npm`,
                        (error, stdout, stderr) => {
                            if (error) {
                                cli.action.stop(error.message);
                            }
                            if (stderr) {
                                cli.action.stop(stderr);
                            }
                            if (stdout) {
                                createServerDockerFile(projectName);
                                cli.log('🦄 Created Dockerfile for client');
                                cli.log('🦄 Created Dockerfile for server');
                                cli.log('🦄 Created Dockerfile for nginx');
                                cli.log('🦄 Created Nginx conf file');
                                cli.log(
                                    '🦄 Created Docker Compose file in your root directory '
                                );

                                cli.log('🚀 Nestjs setup complete');
                                cli.log(
                                    `🤘 cd ${projectName} and run docker compose up -d --build`
                                );
                                cli.log(
                                    '💻  Then you can visit localhost:3050 in your browser'
                                );
                            }
                        }
                    );
                });
            }
        }
    );
};

export default createReactNestFullStack;
