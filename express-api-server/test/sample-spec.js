const chai = require('chai')
const chaiHttp = require('chai-http');
const server = require("../server.js");
let should = chai.should();

chai.should();
chai.use(chaiHttp);

describe('Root route', () => {
    /**
     * Testing root route of the application.
     */

    describe('GET /', () => {
        it('should get root route', (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    if (err) done(err);
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        })
    })

})

