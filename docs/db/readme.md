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

## Table Structure and Information

As we switched from MongoDB to SQL we did not use the RDBMS Design patterns. Every table is intependent of each other. 

1. **sclabs_alumniportal_adminauth_adminlogin**
    This table stored the credentials of admins, HR, integration and super users only. 
    | Columns name  |  Explanation |
    |---|---|
    | ID | Unique Identifier|
    | userid | User ID assigned by the company of the admin|
    | username | User any personal Email |  
    | password | User Password|
    | usertype | Stored type of the user: admin, hr|
    | lastlogin | Last login timestamp|

2. **sclabs.alumniportal.auth.login.hdbtable**
    This table stores alumni user credentials.

    | Columns name  |  Explanation |
    |---|---|
    | ID | Unique Identifier|
    | userid | User ID assigned by the company of the admin|
    | username | User any personal Email |  
    | password | User Password|
    | usertype | Stored type of the user: admin, hr|
    | lastlogin | Last login timestamp|

3. **sclabs_alumniportal_masterdata_MasterData**
    This table is masterdata, we copy data from here to other tables. Data Either will from successfactors or admin will enter it manually. 
  
    | Columns name  |  Explanation |
    |---|---|
    | ID | Unique Identifier|
    | user_id | User ID assigned by the company of the admin|
    | gender | User any personal Email |  
    | date_of_birth | User Password|
    | date_of_resignation | Date of Resignation|
    | date_of_relieving | Date of Relieving|
    | date_of_resignation | Date of Resignation|
    | personal_email_id | Personal Email ID (Not related from Signup as of now)|
    | first_name_personal_information | First Name|
    | last_name_personal_information | Last Name|
    | middle_name_personal_information | Middle Name|
    | nationality_personal_information | Nationality|
    | salutation_personal_information | Salutation|
    | city_addresses | City|
    | phone_number_phone_information | Phone Number|
    | manager_job_information | Manager Name|
    | designation_job_information | Designation |
    | state | State |
    | country | Country |
    | isActive |Is Active status|

1. **SCLABS_ALUMNIPORTAL_USERS_USERS**
   This table stored userprofile data , we copy data from masterdata at the time of signup. This will act as main data source for an alumni user. 

    | Columns name  |  Explanation |
    |---|---|
    | ID | Unique Identifier|
    | user_id | User ID assigned by the company of the admin|
    | gender | User any personal Email |  
    | date_of_birth | User Password|
    | date_of_resignation | Date of Resignation|
    | date_of_relieving | Date of Relieving|
    | date_of_resignation | Date of Resignation|
    | personal_email_id | Personal Email ID (Not related from Signup as of now)|
    | first_name_personal_information | First Name|
    | last_name_personal_information | Last Name|
    | middle_name_personal_information | Middle Name|
    | nationality_personal_information | Nationality|
    | salutation_personal_information | Salutation|
    | city_addresses | City|
    | phone_number_phone_information | Phone Number|
    | manager_job_information | Manager Name|
    | designation_job_information | Designation |
    |Linkedin | Linkedin Link|
    | state | State |
    | country | Country |
    | isActive |Is Active status|
    | skill | Connection from SCLABS_ALUMNIPORTAL_SKILLS_SKILLS(we are not using this I think.) |
