import { Command, flags } from '@oclif/command';
import chalk = require('chalk');
import enquirer = require('enquirer');
import cli from 'cli-ux';
import { exec } from 'child_process';
import createReactNestFullStack from '../utils/createReactNestFullStack';
const { Select } = require('enquirer');

export default class Create extends Command {
    static description = 'describe the command here';

    static flags = {
        help: flags.help({ char: 'h' })
    };

    async run() {
        let stack: string | null = null;

        const response: { projectName: string } = await enquirer.prompt([
            {
                type: 'input',
                message: 'What is your project name',
                name: 'projectName'
            }
        ]);

        const projectName = response.projectName;

        const prompt = new Select({
            name: 'stack',
            message: 'Select a project type',
            choices: [
                `fullstack ${chalk.gray(
                    'single project containing a Client and Server'
                )}`,
                `front-end ${chalk.gray('react / angular / vue')}`,
                `back-end ${chalk.gray('nestjs / express')}`
            ]
        });

        const frontEndPrompt = new Select({
            name: 'front-end',
            message: 'Select a framework',
            choices: ['react', 'angular', 'vue']
        });

        const backEndPrompt = new Select({
            name: 'back-end',
            message: 'Select an option',
            choices: ['nestjs', 'express']
        });

        const fullStackPrompt = new Select({
            name: 'fullstack',
            message: 'Select an option',
            choices: [
                `${chalk.blueBright('react')} with ${chalk.yellowBright(
                    'nestjs'
                )}`
            ]
        });

        if (projectName) {
            prompt
                .run()
                .then((answer: string) => {
                    stack = answer.split(' ')[0];
                    if (stack === 'front-end') {
                        frontEndPrompt.run().then(async (frameWork: string) => {
                            if (frameWork === 'react') {
                                // show on stdout instead of stderr
                                cli.action.start(
                                    `🎇🎇🎇 creating your ${chalk.yellow(
                                        frameWork
                                    )} app`,
                                    'this takes a while, you should go grab a coffee☕',
                                    {
                                        stdout: true
                                    }
                                );
                                exec(
                                    `npx create-react-app ${projectName} --template typescript`,
                                    (error, stdout) => {
                                        if (error) {
                                            cli.action.stop(error.message);
                                        }
                                        cli.action.stop(stdout);
                                    }
                                );
                            }
                            if (frameWork === 'angular') {
                                // show on stdout instead of stderr
                                cli.action.start(
                                    `🎇🎇🎇 creating your ${chalk.yellow(
                                        frameWork
                                    )} app`,
                                    'this takes a while, you should go grab a coffee☕',
                                    {
                                        stdout: true
                                    }
                                );
                                exec(
                                    `npx -p @angular/cli ng new ${projectName} --skip-git`,
                                    (error, stdout) => {
                                        if (error) {
                                            cli.action.stop(error.message);
                                        }
                                        cli.action.stop(stdout);
                                    }
                                );
                            }
                            if (frameWork === 'vue') {
                                // show on stdout instead of stderr
                                cli.action.start(
                                    `🎇🎇🎇 creating your ${chalk.yellow(
                                        frameWork
                                    )} app`,
                                    'this takes a while, you should go grab a coffee☕',
                                    {
                                        stdout: true
                                    }
                                );
                                exec(
                                    `npx @vue/cli create -d -n ${projectName}`,
                                    (error, stdout) => {
                                        if (error) {
                                            cli.action.stop(error.message);
                                        }
                                        cli.action.stop(stdout);
                                    }
                                );
                            }
                        });
                    }

                    if (stack === 'back-end') {
                        backEndPrompt.run().then(async (frameWork: string) => {
                            if (frameWork === 'nestjs') {
                                // show on stdout instead of stderr
                                cli.action.start(
                                    `🎇🎇🎇 creating your ${chalk.yellow(
                                        frameWork
                                    )} app`,
                                    'this takes a while, you should go grab a coffee☕',
                                    {
                                        stdout: true
                                    }
                                );
                                exec(
                                    `npx @nestjs/cli new ${projectName} --skip-git --language TS --package-manager npm`,
                                    (error, stdout) => {
                                        if (error) {
                                            cli.action.stop(error.message);
                                        }
                                        cli.action.stop(stdout);
                                    }
                                );
                            }
                            if (frameWork === 'express') {
                                // show on stdout instead of stderr
                                cli.action.start(
                                    `🎇🎇🎇 creating your ${chalk.yellow(
                                        frameWork
                                    )} app`,
                                    'this takes a while, you should go grab a coffee☕',
                                    {
                                        stdout: true
                                    }
                                );
                                exec(
                                    `npx express-generator-typescript ${projectName}`,
                                    (error, stdout) => {
                                        if (error) {
                                            cli.action.stop(error.message);
                                        }
                                        cli.action.stop(stdout);
                                    }
                                );
                            }
                        });
                    }

                    if (stack === 'fullstack') {
                        fullStackPrompt
                            .run()
                            .then(async (frameWork: string) => {
                                this.log(frameWork);
                                if (
                                    frameWork ===
                                    `${chalk.blueBright(
                                        'react'
                                    )} with ${chalk.yellow('nestjs')}`
                                ) {
                                    createReactNestFullStack({
                                        projectName
                                    });
                                }
                            });
                    }
                })
                .catch((error: string) => this.log(error));
        }
    }
}
