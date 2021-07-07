# Admin Actions Flow Docs

Admin has two roles in terms of user management.

1. Add a alumni user in the databse.
2. Add a fellow admin user in the dadatabse.

## Code of How to add Admin user in database ?

The code is maintained in`./index.js` file, all the functions as for managing the admin. The Application initial admin which we call as superadmin will be created using /init API. That code is not maintained here. It is in `../server.js` file.

## Code of How to add Alumni user in database ?

User can be added in the system by 3 methods.

1. Manually (By calling add user API)
2. bulk upload (By calling bulk upload)
3. Successfactors (By calling add user API in Integration)

Code is maintained in `./userindex.js`
