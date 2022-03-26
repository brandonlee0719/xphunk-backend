const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
const BlueBird = require('bluebird');
const XPhunk = require('../models/xphunk');
const {expect} = require('chai')

chai.use(chaiHttp);

describe('XPhunk', () => {

    beforeEach(async () => {
        await XPhunk.sync();
    })

    // afterEach(async () => {
    //     await XPhunk.drop();
    // })

    it('should create XPhunk', async () => {
        const response = await chai.request(server).post('/api').send()
        response.should.have.status(201);
        response.body.should.eql('success');
        console.log(response.body)
    });

    it('should fetch all the xphunk', async () => {
        const response = await chai.request(server).get('/api')
        response.should.have.status(200);
        console.log("response.body-----------------", response.body)
    });

});
