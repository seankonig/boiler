# boiler

boiler helps you to create client or server side project with one command. it simply leverages npx. there is also a fullstack option that gets generated with a docker-compose file and nginx out of the box.

🤘this is probably useless, but it was really fun to build

<!-- usage -->
```sh-session
$ npm install -g typescript_boiler
$ boiler COMMAND
running command...
$ boiler (-v|--version|version)
typescript_boiler/0.0.4 darwin-arm64 node-v16.4.0
$ boiler --help [COMMAND]
USAGE
  $ boiler COMMAND
...
```
<!-- usagestop -->

```
$ npx boiler create
```

<!-- note -->

if you have a mac with a m1 chip add a platform flag to the api and nginx services in the docker-compose file.

```
nginx:
    platform: linux/amd64
api:
    platform: linux/amd64
```

enjoy
