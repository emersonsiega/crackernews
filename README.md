# HowToGraphQL.com react-apollo tutorial

## Server

**Setting up the database**
* Access `/server/database` folder
* Run: `yarn prisma deploy`
* Select `Demo` option
* When the browser opens, register and go back to terminal
* Select your region and the database name

Prisma will put your database endpoint inside `/server/database/prisma.yml`
Get this endpoint and put in `/server/src/index.js`

**Start server**  
`cd server`  
`yarn start`

## Front-End

React app using react-apollo client