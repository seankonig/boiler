# boiler

### no need to install anything

### just run

```
$ npx boiler create
```

### what is this

boiler helps you to create client or server side projects with one command. it simply leverages npx.

there is also a fullstack option that gets generated with a docker-compose file and nginx out of the box.

if you have a mac with a m1 chip you can add a platform flag to the api and nginx services in the docker-compose file.

```
nginx:
    platform: linux/amd64
api:
    platform: linux/amd64
```

🤘this is probably useless, but it was really fun to build
enjoy
