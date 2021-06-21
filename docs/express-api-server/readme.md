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
