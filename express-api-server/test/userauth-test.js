const chai = require('chai')
const chaiHttp = require('chai-http');
const server = require("../server.js");


// assertion style

chai.should();
chai.use(chaiHttp);

describe('User Signup and Authentication Test Suite', () => {

    // Adding dummy Admin user to database.  
    it('Should add admin user by calling /initialize endpoint', (done) => {
        chai.request(server)
            .post('/initialize')
            .set('content-type', 'application/json')
            .send({
                "EMAIL": "testadmin@steppingcloud.com",
                "PASSWORD": "testadmin",
                "USERTYPE": "admin"
            })
            .end((err, res) => {
                if (err) done(err);
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            })
    });

    it('Admin Should add user to application successfully by calling POST /admin/action/user/create', (done) => {
        chai.request(server)
            .post('/auth/login')
            .set('Content-Type', 'application/json')
            .send({
                "EMAIL": "testadmin@steppingcloud.com",
                "PASSWORD": "testadmin"
            })
            .end((err, res) => {
                if (err) done(err);
                res.should.have.status(200)
                res.body.should.be.a('object');
                res.body.should.have.property('status').eql('200');
                res.body.should.have.property('result');
                res.body.should.have.property('token');
                let token = res.body.token;

                chai.request(server)
                    .post('/admin/action/user/create')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .send({
                        "payload": {
                            "USER_ID": "test",
                            "GENDER": "female",
                            "DATE_OF_BIRTH": "2012-02-10T13:19:11+0000",
                            "DATE_OF_RELIEVING": "2012-02-10T13:19:11+0000",
                            "DATE_OF_RESIGNATION": "2012-02-10T13:19:11+0000",
                            "LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD": "2012-02-10T13:19:11+0000",
                            "PERSONAL_EMAIL_ID": "testuser@steppingcloud.com",
                            "FIRST_NAME_PERSONAL_INFORMATION": "testuser",
                            "LAST_NAME_PERSONAL_INFORMATION": "testuser",
                            "MIDDLE_NAME_PERSONAL_INFORMATION": "NaN",
                            "NATIONALITY_PERSONAL_INFORMATION": "IND",
                            "SALUTATION_PERSONAL_INFORMATION": "Mr.",
                            "CITY_ADDRESSES": "New Delhi",
                            "PHONE_NUMBER_PHONE_INFORMATION": "88927470237",
                            "MANAGER_JOB_INFORMATION": "Tausif Rahman",
                            "DESIGNATION_JOB_INFORMATION": "DM-Head IT (BCP & Oracle Admin)",
                            "STATE": "New Delhi",
                            "COUNTRY": "India"
                        }
                    })
                    .end((err, res) => {
                        if (err) done(err);
                        res.should.have.status(200)
                        res.body.should.be.a('object');
                        res.body.should.have.property('status').eql('200');
                        res.body.should.have.property('result');
                        done();
                    });

            })
    });

    it('User Signup by calling POST /auth/signup', (done) => {
        chai.request(server)
            .post('/auth/signup')
            .set('Content-Type', 'application/json')
            .send({
                "EMAIL": "testuser@steppingcloud.com",
                "PASSWORD": "testuser",
                "USERID": "test"
            })
            .end((err, res) => {
                if (err) done(err);
                res.should.have.status(200)
                res.body.should.be.a('object');
                res.body.should.have.property('status').eql('200');
                done();
            })
    });

    it('User Login by calling POST /auth/login', (done) => {
        chai.request(server)
            .post('/auth/login')
            .set('Content-Type', 'application/json')
            .send({
                "EMAIL": "testuser@steppingcloud.com",
                "PASSWORD": "testuser"
            })
            .end((err, res) => {
                if (err) done(err);
                res.should.have.status(200)
                res.body.should.be.a('object');
                res.body.should.have.property('status').eql('200');
                res.body.should.have.property('token');
                res.body.should.have.property('result');
                done();
            })
    });

    it('User Forget Password by calling POST /auth/login', (done) => {
        chai.request(server)
            .post('/auth/login')
            .set('Content-Type', 'application/json')
            .send({
                "EMAIL": "testuser@steppingcloud.com",
                "PASSWORD": "testuser"
            })
            .end((err, res) => {
                if (err) done(err);
                res.should.have.status(200)
                res.body.should.be.a('object');
                res.body.should.have.property('status').eql('200');
                res.body.should.have.property('token');
                res.body.should.have.property('result');
                done();
            })
    });

    // Clean database
    it('Should Delete user from the apllication either active or inactive', (done) => {

        // login to the application and get token
        chai.request(server)
            .post('/auth/login')
            .set('Content-Type', 'application/json')
            .send({
                "EMAIL": "testadmin@steppingcloud.com",
                "PASSWORD": "testadmin"
            })

            .end((err, res) => {
                if (err) done(err);
                res.should.have.status(200)
                res.body.should.be.a('object');
                res.body.should.have.property('status').eql('200');
                res.body.should.have.property('result');
                res.body.should.have.property('token');
                let token = res.body.token;

                // get ID of user
                chai.request(server)
                    .get('/admin/action/user/get?USERID=test')
                    .set('Authorization', 'Bearer ' + token)
                    .end((err, res) => {
                        if (err) done(err);
                        res.should.have.status(200)
                        res.body.should.be.a('object');
                        res.body.should.have.property('status').eql('200');
                        res.body.should.have.property('result');
                        let ID = res.body.result[0].ID
                        console.log(ID)
                        chai.request(server)
                            .post('/admin/action/user/delete')
                            .set('Content-Type', 'application/json')
                            .set('Authorization', 'Bearer ' + token)
                            .send({
                                "payload": {
                                    "ID": ID
                                }
                            })
                            .end((err, res) => {
                                if (err) done(err);
                                res.should.have.status(200)
                                res.body.should.be.a('object');
                                res.body.should.have.property('status').eql('200');
                                res.body.should.have.property('result');
                                res.body.should.have.property('result').eql(1);
                                done();
                            });

                    })
            });
    })

})