const app = require('../server/server.js');
const chai = require('chai')
const chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp)


describe('GET /name', () => {
    it('validate object requirements', function() {
        chai.request(app)
        .get('/marcosff')
        .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.a('array')
            res.body[0].should.have.all.property("name").with.be.a('string')
            res.body[0].should.have.all.property("ownername").with.be.a('string')
            res.body[0].should.have.all.property("branches").with.be.a('array')
        })
    })

})
describe('GET ERROR /name', () => {
    it('validate object requirements', function() {
        chai.request(app)
        .get('/marcosffasdasd')
        .end((err, res) => {
            res.should.have.status(404)
            res.body.should.be.a('object')
            res.body.should.have.all.property("status").with.be.a('number')
        })
    })

})