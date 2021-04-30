const chai = require('chai')
const chaiHttp = require('chai-http');
const server = require("../server.js");


// assertion style

chai.should();
chai.use(chaiHttp);

describe('Application Initializing Test Suite ', () => {

    it('Should Initializing application by adding admin user by calling /initialize endpoint', (done) => {
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

    it(' Should login admin user by calling POST /login endpoint', (done) => {
        chai.request(server)
            .post('/auth/login')
            .set('content-type', 'application/json')
            .send({
                "EMAIL": "testadmin@steppingcloud.com",
                "PASSWORD": "testadmin"
            })
            .end((err, res) => {
                if (err) done(err);
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('status').eql('200');
                res.body.should.have.property('result');
                res.body.should.have.property('token');
                done();
            })
    });

    it(' Should delete admin user by calling DELETE /initialize endpoint', (done) => {
        chai.request(server)
            .delete('/initialize')
            .set('content-type', 'application/json')
            .send({
                "EMAIL": "testadmin@steppingcloud.com"
            })
            .end((err, res) => {
                if (err) done(err);
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            })
    });

    it(' Should not be able to login admin user by calling POST /login endpoint', (done) => {
        chai.request(server)
            .post('/auth/login')
            .set('content-type', 'application/json')
            .send({
                "EMAIL": "testadmin@steppingcloud.com",
                "PASSWORD": "testadmin"
            })
            .end((err, res) => {
                if (err) done(err);
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('status').eql('400');
                res.body.should.have.property('result').eql('Incorrect Username');
                done();
            })
    });



    it('Should add integration user by calling POST /initialize endpoint', (done) => {
        chai.request(server)
            .post('/initialize')
            .set('content-type', 'application/json')
            .send({
                "EMAIL": "testintegration@steppingcloud.com",
                "PASSWORD": "testintegration",
                "USERTYPE": "integrationuser"
            })
            .end((err, res) => {
                if (err) done(err);
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            })
    });

    it(' Should login integration user by calling POST /integration/auth/login endpoint', (done) => {
        chai.request(server)
            .post('/integration/auth/login')
            .set('content-type', 'application/json')
            .send({
                "EMAIL": "testintegration@steppingcloud.com",
                "PASSWORD": "testintegration"
            })
            .end((err, res) => {
                if (err) done(err);
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('status').eql('200');
                res.body.should.have.property('result');
                res.body.should.have.property('token');
                done();
            })
    });

    it(' Should delete integration user by calling DELETE /initialize endpoint', (done) => {
        chai.request(server)
            .delete('/initialize')
            .set('content-type', 'application/json')
            .send({
                "EMAIL": "testintegration@steppingcloud.com"
            })
            .end((err, res) => {
                if (err) done(err);
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            })
    });

    it(' Should not be able to login integration user by calling POST /login endpoint', (done) => {
        chai.request(server)
            .post('/integration/auth/login')
            .set('content-type', 'application/json')
            .send({
                "EMAIL": "testintegration@steppingcloud.com",
                "PASSWORD": "testintegration"
            })
            .end((err, res) => {
                if (err) done(err);
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('status').eql('400');
                res.body.should.have.property('result').eql('Incorrect Email');
                done();
            })
    });
})