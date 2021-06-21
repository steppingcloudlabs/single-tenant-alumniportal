# Hana Database Artifcts 

There are many ways to create table in HANA, we are using artifact file. 

## How to write table and other types. 

Below is a code snippet code of how to create a table in HANA.  

```

COLUMN TABLE tablename (
  ID NVARCHAR(36) NOT NULL
  PRIMARY KEY(ID)
)
```

Save the file with this code in it and extention should be **.hbtable**. 

For deployemnt of this table we have to build our project using **mbt build** once that is done, use **cf deploy** command to updload the file to SAP Cloud Platform. 

> [!CAUTION]
> If deployment failed check the logs from SAP Cloud Foundry it will tell you specific problem.


## Indexing

If you want to build any index of your table you have to create different file and then deploy it using above method. 

Each type as different extension file, if you want to want to create a full text search then you have to create a file with extension **.hdbfulltextindex**. 

## Room for Improvements 

As of now we have not build normal indexing which makes the query fast. 
Once implemented the backend API response time should improve drastically.