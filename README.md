boiler
======

create boilerplate code

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/boiler.svg)](https://npmjs.org/package/boiler)
[![Downloads/week](https://img.shields.io/npm/dw/boiler.svg)](https://npmjs.org/package/boiler)
[![License](https://img.shields.io/npm/l/boiler.svg)](https://github.com/seankonig/boiler/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g boiler
$ boiler COMMAND
running command...
$ boiler (-v|--version|version)
boiler/0.0.0 darwin-arm64 node-v16.4.0
$ boiler --help [COMMAND]
USAGE
  $ boiler COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`boiler create [FILE]`](#boiler-create-file)
* [`boiler hello [FILE]`](#boiler-hello-file)
* [`boiler help [COMMAND]`](#boiler-help-command)

## `boiler create [FILE]`

describe the command here

```
USAGE
  $ boiler create [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/create.ts](https://github.com/seankonig/boiler/blob/v0.0.0/src/commands/create.ts)_

## `boiler hello [FILE]`

describe the command here

```
USAGE
  $ boiler hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ boiler hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/seankonig/boiler/blob/v0.0.0/src/commands/hello.ts)_

## `boiler help [COMMAND]`

display help for boiler

```
USAGE
  $ boiler help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_
<!-- commandsstop -->
