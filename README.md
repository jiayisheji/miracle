<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

[![Nx][nx-shield]][nx-url]
[![NodeJs][nodejs-shield]][nodejs-url]
[![Angular][angular-shield]][angular-url]
[![NestJs][nestjs-shield]][nestjs-url]
[![NextJs][nextjs-shield]][nextjs-url]
[![Typescript][typescript-shield]][typescript-url]
[![Mysql][mysql-shield]][mysql-url]
[![JWT][jwt-shield]][jwt-url]
[![Jest][jest-shield]][jest-url]
[![Docker][docker-shield]][docker-url]

# Miracle

This is a miracle project. Use Nodejs, Nx, Nextjs, Nestjs, Angular, etc.

## Getting Start

### Installing core dependencies

Before we start, we need to install:

- [nodejs](https://nodejs.org/en/download/)

> Make sure we don't get any error after installation

Open our terminal and follow this instruction

Check NodeJs is successful installed in our OS.

```sh
node --version

# will return
# v20.10.0
```

### Run with Docker

1. We need to install `docker` and `docker compose`.

- Docker official Documentation, [here][docker-url]
- Docker Compose official Documentation, [here][docker-compose-url]

2. Check `docker` is running or not

```sh
docker --version

# will return
# Docker version 24.0.7, build afdd53b
```

and check `docker-compose`

```sh
docker-compose --version

# will return
# Docker Compose version v2.23.3-desktop.2
```

3. Run docker compose

```sh
docker-compose up -d
```

## Running the project

These instructions should be sufficient for one to get the project going on their local machine

### Cloning the github repository

To clone the project, run

```bash
git clone https://github.com/jiayisheji/miracle.git
```

### Installing the dependencies

To install the dependencies after you've cloned the project, go to its root folder and run

```bash
cd miracle && pnpm install --frozen-lockfile
```

### Setting environment variables

```bash
cp .env.example  .env
```

### Alternative commands

If you need to work on the client, you can run

```bash
pnpm exec nx serve webapp
```

Then, you can go to the Angular dev server at port 4200 and test server requests (to port 3000), we got a proxy to the backend

If you only need to work on the frontend, you can run

```bash
pnpm exec nx serve admin
```

Alternatively, if you only need to work on the backend, you can run

```bash
pnpm exec nx serve api
```

## Reference

1. Awesome Nest

- [https://github.com/juliandavidmr/awesome-nest](https://github.com/juliandavidmr/awesome-nest)

2. Awesome Next

- [https://github.com/unicodeveloper/awesome-nextjs](https://github.com/unicodeveloper/awesome-nextjs)

3. Awesome Angular

- [https://github.com/PatrickJS/awesome-angular](https://github.com/PatrickJS/awesome-angular)

4. Awesome Nx

- [https://github.com/nrwl/nx-examples](https://github.com/nrwl/nx-examples)

<br />
<p align="right"><a href="#top">back to top</a></p>

<!-- BADGE LINKS -->

[contributors-shield]: https://img.shields.io/github/contributors/jiayisheji/miracle?style=for-the-badge
[forks-shield]: https://img.shields.io/github/forks/jiayisheji/miracle?style=for-the-badge
[stars-shield]: https://img.shields.io/github/stars/jiayisheji/miracle?style=for-the-badge
[issues-shield]: https://img.shields.io/github/issues/jiayisheji/miracle?style=for-the-badge
[license-shield]: https://img.shields.io/github/license/jiayisheji/miracle?style=for-the-badge
[typescript-shield]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[nodejs-shield]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[jwt-shield]: https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white
[jest-shield]: https://img.shields.io/badge/-jest-C21325?style=for-the-badge&logo=jest&logoColor=white
[docker-shield]: https://img.shields.io/badge/docker-0db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[nestjs-shield]: https://img.shields.io/badge/nestjs-E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white
[nextjs-shield]: https://img.shields.io/badge/Nextjs-black?style=for-the-badge&logo=vercel&logoColor=white
[angular-shield]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[mysql-shield]: https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white
[nx-shield]: https://img.shields.io/badge/workspace-143157?style=for-the-badge&logo=NX&logoColor=white

<!-- GITHUB LINKS -->

[license-url]: https://github.com/jiayisheji/miracle/blob/main/LICENSE.md
[issues-url]: https://github.com/jiayisheji/miracle/issues
[stars-url]: https://github.com/jiayisheji/miracle/stargazers
[forks-url]: https://github.com/jiayisheji/miracle/network/members
[contributors-url]: https://github.com/jiayisheji/miracle/graphs/contributors

<!-- NEXTJS LINKS -->

[nextjs-url]: https://nextjs.org/

<!-- NESTJS LINKS -->

[nestjs-url]: http://nestjs.com/

<!-- ANGULAR LINKS -->

[angular-url]: https://angular.io/

<!-- OTHER LINKS -->

[nodejs-url]: https://nodejs.org/
[nx-url]: https://nx.dev/
[mysql-url]: https://docs.oracle.com/en-us/iaas/mysql-database/doc/getting-started.html
[typescript-url]: https://www.typescriptlang.org/
[jwt-url]: https://jwt.io
[jest-url]: https://jestjs.io/docs/getting-started
[docker-url]: https://docs.docker.com
[docker-compose-url]: https://docs.docker.com/compose/
