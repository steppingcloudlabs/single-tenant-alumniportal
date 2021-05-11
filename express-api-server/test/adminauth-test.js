const chai = require('chai')
const chaiHttp = require('chai-http');
const server = require("../server.js");


// assertion style

chai.should();
chai.use(chaiHttp);

describe('Admin Signup and Authentication Test Suite', () => {

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

    it('Admin Should add Admin user to application successfully by calling POST/admin/action/admin/create', (done) => {
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
                    .post('/admin/action/admin/create')
                    .set('Content-Type', 'application/json')
                    .set('Authorization', 'Bearer ' + token)
                    .send({
                        "payload": {
                            "FIRSTNAME": "Admin",
                            "LASTNAME": "Admin",
                            "EMAIL": "testadmin@gmail.com",
                            "USERTYPE": "admin",
                            "USERID": "test"
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

    it('Admin User Signup by calling POST /auth/signup', (done) => {
        chai.request(server)
            .post('/auth/signup')
            .set('Content-Type', 'application/json')
            .send({
                "EMAIL": "testuser@steppingcloud.com",
                "PASSWORD": "testuser",
                "USERID": "test",
                "USERTYPE": "admin"
            })
            .end((err, res) => {
                if (err) done(err);
                res.should.have.status(200)
                res.body.should.be.a('object');
                res.body.should.have.property('status').eql('200');
                done();
            })
    });

    it('Admin User Login by calling POST /auth/login', (done) => {
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