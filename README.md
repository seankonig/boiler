# boiler

boiler helps you to create client or server side project with one command. it simply leverages npx. there is also a fullstack option that gets generated with a docker-compose file and nginx out of the box.

🤘this is probably useless, but it was really fun to build

<!-- do this -->

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
