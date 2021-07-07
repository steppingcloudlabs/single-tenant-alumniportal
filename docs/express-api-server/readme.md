# Backend Server

The server maintains all logic of multitenant and APIs. Code documentation is written inside the code itelf.

## Local Development

You need cloudfoundry plugin `default-env` which downloads the env variable from the SAP Cloud Platform. Once that is done you can use `npm start` command to run tge application locally.

## Deployment

Deployment is relatively easy, use `cf push` and the the application name mentioned in MTA file. that will upload the changed to the cloud.

## Github

its preferable to do small changed and commit them regularly to github. The changed of conflict are less and you dont have to rollback major code changes.

## Impvrovemets

There is a lot of room for improvement, some of them are mentioned below.

1. Database Indexing.
2. Refactor code and change if else condition to different fucntions.

## Project structure 

```
├───config
├───controller
│   ├───admin
│   ├───askhr
│   ├───auth
│   ├───bulk
│   ├───documents
│   ├───job
│   ├───nef
│   ├───reporting
│   ├───search
│   ├───ses
│   ├───sftp
│   ├───skills
│   ├───successfactors
│   └───user
├───generated
│   └───sfo-data-service
├───middleware
│   ├───JWTtoken
│   ├───reportingcollector
│   └───unescape
├───router
│   ├───admin
│   ├───askhr
│   ├───auth
│   ├───bulk
│   ├───documents
│   ├───job
│   ├───nef
│   ├───reporting
│   ├───search
│   ├───ses
│   ├───sftp
│   ├───skills
│   ├───successfactors
│   └───users
├───service
│   ├───admin
│   ├───askhr
│   ├───auth
│   ├───bulk
│   │   └───docuemts
│   ├───documents
│   ├───job
│   ├───nef
│   ├───reporting
│   ├───search
│   ├───ses
│   ├───sftp
│   ├───skills
│   ├───successfactors
│   └───user
├───test
├───uploads
├───utils
│   ├───database
│   └───jsontolower
└───validator

```

Project is divided into two users admin and users, service layer is common for all the users but controller and router are specific for a usertype. 

# Naming conventions

The name conventions of files are not that great we need a lot of improvement in there. 

1. index.js -> for admin realted codes 
2. userindex.js -> for users realted codes


