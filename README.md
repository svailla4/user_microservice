# Project Title

User microservice

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Docker Compose
If you only need to run the application and don't need to do any development then the easiest thing to do is run it using docker 
compose. 

**Steps:**
1. Navigate in the terminal to the root folder
2. Run `docker-compose build`
2. Run `docker-compose up`

This will spin up three containers (postgres container, redis container and a 
node container that runs the application).

### Prerequisites

What things you need to install the software and how to install them

```
* Redis
* NodeJs
* Yarn or NPM
* Mocha (for testing)
```

### Installing

A step by step series of examples that tell you how to get a development env running

```
* Run NPM install or yarn install on your machine
* type knex migrate:latest // this will create the sqlite dev tables
* type knex seed:run // this will fill the tables with test data
* Run Redis locally on port 6379 (default)
* type node ./index.js to run the server
```

an example of getting some data out of the system or using it.
```
* /create with email and password body //this will create a user
* additional http rquests can be found under handlers/users
```

## Running the tests

```
* cd into the project directory
* run redis
* type mocha
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
