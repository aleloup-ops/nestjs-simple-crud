# nestjs-simple-crud

## Project Description ##

The goal of this project is to create a simple CRUD at first using NestJs. The API is made with GraphQL and firestore is used as the database. I decided to work on this project as a point of start discovering NestJs.

I also want to grow the project more and more as I'm learning new NestJs features.

## How to install and Run the project ##

What you will need to run the project :

- Node.Js
- @nestjs/cli

First, clone the repository running this command :

```bash
git clone https://github.com/aleloup-ops/nestjs-simple-crud.git
```
Now access the nest-app directory :

```bash
cd nest-app/
```

To install all the required packages, run :

```bash
npm install
```

You are now ready to run the project :

```bash

```
 
## Packages ##

Package       | Description  |Version
------------- | -------------|-------------
@nestjs, @nestjs/common, @nestjs/core  | A progressive Node.js framework for building efficient and scalable server-side applications. | 9.1.8
Node.Js  | Node.js® is a JavaScript runtime built |18.10.0
Typescript | TypeScript is a language for application-scale JavaScript. | 4.9.4
graphql|The JavaScript reference implementation for GraphQL, a query language for APIs|16.6.0
graphql-tools| Useful tools to create and manipulate GraphQL schemas|8.13.15
@nestjs/graphql| Implementation of graphql for nest.js|10.1.7
firebase-admin|Firebase Admin Node.js SDK|11.4.1
apollo-server-express|This is the Express integration of Apollo Server|3.11.1
@nestjs/apollo|Implementation of apollo-server for nest.js|10.1.7
spectaql| Documentation for GraphQL API|2.0.3


## How to use the project ##

## Documentation ##

The project is using package spectaql to document the GraphQL API.

To generate the documentation, run :

```bash
npx spectaql config.yml
```

The documentation is now available in the `public` directory at the root of the project as index.html. Open it with your internet browser to get more data about the API