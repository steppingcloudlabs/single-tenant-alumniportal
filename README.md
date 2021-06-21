# Alumni Portal

This project contains 3 application, frontend layer (app), database layer (db) and backend server (express-api-server).

## Docs

The docs folder contains in depth documentation of each application.

## How to do Deployment? 

For deploying the application we need to do below steps.

1. `mbt build` on the root folder.
2. cf deploy `mta_archives\single-tenant-alumniportal-sap_0.0.1.mtar`
3. Wait for the deployment

## **Point to remmeber**

1. If you are doing any changed in db module you have to build everytime and deploy it.


## MTA File 

MTA file is like a docker file which contains information of which components should be deployed with its configuration. 

## Required CLI softwares for bulild and deployment 

1. cf (Cloudfoundry). Install below plugins of cf from github 
   1. smsi 
   2. de 
2. mbt