import { Command, flags } from '@oclif/command'
import chalk = require('chalk')
import inquirer = require('inquirer')

export default class Create extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({ char: 'h' }),
    // project name (-n, --name=VALUE)
    name: flags.string({ char: 'n', description: 'project name' }),
  }

  async run() {
    const { flags } = this.parse(Create)

    const prompt: any = await inquirer.prompt([
      {
        type: 'rawlist',
        message: 'Create Client',
        name: 'framework',
        choices: ['react', 'angular', 'vue'],
      },
    ])

    const selection = prompt.framework

    const confirm: any = await inquirer.prompt([
      {
        type: 'rawlist',
        message: `🦄Create ${chalk.blue(selection)} app named ${chalk.gray(
          flags.name
        )}`,
        name: 'create',
        choices: ['Yes', 'No'],
      },
    ])

    const answer = confirm
    return answer
  }
}
