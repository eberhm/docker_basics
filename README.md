# Docker basics

This repo will help you practice some basic `docker` commands. You will learn here how to:

- Download a docker image
- Run a container from an image:
    - Attaching a volume
    - forwarding to a local port
- Build an image

## Running locally
In order to run this application you'll need  to have  install `nodejs` and `npm`

Once you have this dependencies installed in your computer just run in the root of the project:

```
$ npm install
$ node index.js
```

To try it just open http://localhost:3000 in a browser.

## Downloading an image

An image of this application can be pulled from: https://hub.docker.com/r/eberhm/docker_basics

Let's now pull the image:

```
docker pull eberhm/docker_basics:latest
```

## Running the image

To run this image let's use:

```
$ docker run -p 3030:3000 eberhm/docker_basics:latest
```

Try again by opening http://localhost:3030 in a browser.

### Passing a env variable

Let's run now two different instances of the same application:

```
$ docker run -p 3040:3000 -e APP_ENV=app1 eberhm/docker_basics:latest
$ docker run -p 3050:3000 -e APP_ENV=app2 eberhm/docker_basics:latest
```

To try it just open http://localhost:3040 and http://localhost:3050 in a browser.

## Building an image

Let's build the image defined in the Dockerfile file. Let's run

```
$ docker build . -t docker_basics
```

Now repeat all running image excercises with the newly created image

## Attaching a volume to a container

Let's run the container but with a volume attached so changes are seing in you application

```
docker run -p 4000:3000 -e APP_ENV=app1 -v ${PWD}:/app eberhm/docker_basics:latest
```

Modify the source code before running the app and try it

