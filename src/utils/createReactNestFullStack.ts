/* eslint-disable unicorn/filename-case */
import { exec } from 'child_process';
import { mkdirSync, writeFile } from 'fs';
import cli from 'cli-ux';
import chalk = require('chalk');
import createDockerCompose from './createFullStackDockerCompose';
import createClientDockerFile from './createClientDockerDev';
import createServerDockerFile from './createServerDockerDev';
import createNginxDocker from './createNginxDocker';

const createReactNestFullStack = ({
    projectName,
    client,
    server
}: {
    projectName: string;
    client: string;
    server: string;
}) => {
    mkdirSync(projectName);
    mkdirSync(`${projectName}/frontend`);
    mkdirSync(`${projectName}/backend`);

    cli.action.start(
        `🎇🎇🎇 creating your ${chalk.yellow('fullstack')} app`,
        'this takes a while, you should go grab a coffee☕',
        {
            stdout: true
        }
    );

    createNginxDocker(projectName);
    createDockerCompose(projectName);
    createClientDockerFile(projectName);
    createServerDockerFile(projectName);

    if (client === 'react') {
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
                    writeFile(
                        `${projectName}/frontend/.env`,
                        'PORT=3050',
                        err => {
                            if (err) {
                                cli.log(err.message);
                            }
                            cli.log('🚀 React setup complete');
                            cli.log('🚀 App will run on port 3050');
                        }
                    );
                }
            }
        );
    }

    if (server === 'nestjs') {
        exec(
            `npx @nestjs/cli new ${projectName}/backend/. --skip-git --language TS --package-manager npm`,
            (error, stdout, stderr) => {
                if (error) {
                    cli.action.stop(error.message);
                }
                if (stderr) {
                    cli.action.stop(stderr);
                }
                cli.log('🚀 Nestjs setup complete');
            }
        );
    }
};

export default createReactNestFullStack;
