<img src="https://eu-startupjobs.com/media/1534943416.12_logo_Stuart.png" title="Stuart" alt="FVCproductions">


# Stuart Test

This repo contains the test for the FullStack position

**Stack used**

- BACK --> NodeJS Express TypeScript
- BBDD --> MongoDB with Mongoose

**Folder Structure**
```

server
└── src      
    ├── core
    ├── database
    ├── helpers
    ├── router
    └── utils  
```
---

## Table of Contents

- [Installation](#installation)
- [Tests](#tests)

---

## Installation

Server inside a docker image, ready to up and go!!

### Clone

- Clone this repo to your local machine using `https://github.com/asolerp/StuartSecondTest`

### Setup

> in the root of the proyect where docker-compose file is

```shell
docker-compose up --build
```

- Back `http://localhost:3000`

---

## Tests

- To run back end test
```shell
npm run test
```

---

## Bonus Goals
- App in docker container

## Questions

**If you were to have more time, what would you do? Briefly explain what could be improved.**

 - I would create some classes to improve the way I have handled successful and error responses from the server.
 - I would export metrics with prometheus and I would create a Grafana Dashboard to show important info of the app.
 - I would implemented Loki to have a log viewer in Grafana.