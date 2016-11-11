const app = require('../../app')

//REQUIRE MODELS
const Smartphone = require('../../models/smartphones')

//REQUIRE CHAI AND MOCHA
const mocha = require('mocha')
const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

describe("Test for smartphones", function () {
    beforeEach(function (done) {
        chai.request(app)
            .get('/api/smartphones/seed')
            .end(function (err, res) {
                console.log("Smartphone seeded")
                done()
            })
    })

    afterEach(function (done) {
        chai.request(app)
            .delete('/api/smartphones')
            .end(function (err, res) {
                console.log("All smartphones deleted")
                done()
            })
    })

    describe("Test if get all smartphones working", function () {

        it("Expect to return all list of smartphones", function (done) {
            chai.request(app)
                .get('/api/smartphones')
                .end(function (err, res) {
                    expect(res).to.have.status(200)
                    expect(res.body[0].name).to.equal('smartphone a')
                    done()
                })
        })
    })

    describe("Test if get smartphones by name working", function () {

        it("Expect to returnlist of smartphones by name", function (done) {
            chai.request(app)
                .get('/api/smartphones/:name')
                .end(function (err, res) {
                    Smartphone.findOne({
                        name: req.params.name
                    }, function (err, data) {
                        expect(res).to.have.status(200)
                        expect(res.body.name).to.equal(data.name)
                        done()
                    })
                })
        })
    })

    describe("Test if create smartphone working", function () {

        it("Expect to return smartphone that has been created", function (done) {
            chai.request(app)
                .post('/api/smartphones')
                .send({
                    name: 'name a',
                    os: 'android',
                    internalMemory: '128 GB',
                    ram: '4 GB',
                    externalMemory: '128 GB',
                    camera: '8 MP',
                    price: 5000000,
                    vendor: 'vendor a'
                })
                .end(function (err, res) {
                    Smartphone.findOne({
                        name: res.body.name
                    }, function (err, data) {
                        expect(res).to.have.status(200)
                        expect(res.body.name).to.equal(data.name)
                        expect(res.body.os).to.equal(data.os)
                        expect(res.body.internalMemory).to.equal(data.internalMemory)
                        expect(res.body.externalMemory).to.equal(data.externalMemory)
                        expect(res.body.camera).to.equal(data.camera)
                        expect(res.body.price).to.equal(data.price)
                        expect(res.body.vendor).to.equal(data.vendor)
                        done()
                    })
                })
        })
    })

    describe("Test if delete smartphone working", function () {

        it("Expect to return true if delete smartphone working", function (done) {

<<<<<<< HEAD
            Smartphone.findOne( {_id: req.params.id}, function (err, data) {
=======
            Smartphone.findOne({}, {}, { sort: { 'createdAt' : -1 } }, function (err, data) {
>>>>>>> b77ee2a268c89172ecd5b52721761ef1f49a28ce
                chai.request(app)
                    .delete(`/api/smartphones/${data._id}`)
                    .end(function (err, res) {
                        expect(res).to.have.status(200)
                        expect(res.body.name).to.equal(data.name)
                        done()
                    })
            })
        })
    })

    describe("Test if update smartphone working", function () {

        it("Expect to return smartphone that has been updated", function (done) {

            let input = {
                name: 'name update',
                os: 'android update',
                internalMemory: '99 GB',
                ram: '12 GB',
                externalMemory: '99 GB',
                camera: '80 MP',
                price: 5000000,
                vendor: 'vendor update'
            }

            Smartphone.findOne({}, {}, { sort: { 'updatedAt' : -1 } }, function (err, data) {
                chai.request(app)
                    .put(`/api/user/${data._id}`)
                    .send(input)
                    .end(function (err, res) {
                        expect(res).to.have.status(200)
                        expect(res.body.name).to.equal(data.name)
                        expect(res.body.os).to.equal(data.os)
                        expect(res.body.internalMemory).to.equal(data.internalMemory)
                        expect(res.body.externalMemory).to.equal(data.externalMemory)
                        expect(res.body.camera).to.equal(data.camera)
                        expect(res.body.price).to.equal(data.price)
                        expect(res.body.vendor).to.equal(data.vendor)
                        done()
                    })
            })
        })
    })
})

