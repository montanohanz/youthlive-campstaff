const { PrismaClient } = require('@prisma/client');
const express = require('express');
var router = express.Router();
const prisma = new PrismaClient();

router.route('/camp')
    .get(async function (req,res) {
        var data = await prisma.camp.findMany();
        res.status(200);
        res.send(data);
    })
    .post(function (req, res, next) {
        res.status(405);
        next(new Error('Not Implemented'))
      })
    .put(function (req, res ,next ) {
        res.status(405);
        next(new Error('Not Implemented'))
    })
    .delete(function (req, res ,next ) {
        res.status(405);
        next(new Error('Not Implemented'))
    })

router.route('/camp/id/:uuid')
    .get(async function (req,res) {
        const data = await prisma.camp.findUnique({
            where: {
                id: req.params.uuid,
            }
        });
        res.status(200)
        res.send(data);
    })

router.route('/camper')
    .get(async function (req,res) {
        var data = await prisma.camper.findMany();
        res.status(200);
        res.send(data);
    })
    .post(function (req, res, next) {
        res.status(405);
        next(new Error('Not Implemented'))
      })
    .put(function (req, res ,next ) {
        res.status(405);
        next(new Error('Not Implemented'))
    })
    .delete(function (req, res ,next ) {
        res.status(405);
        next(new Error('Not Implemented'))
    })

router.route('/camper/id/:uuid')
    .get(async function (req,res) {
        const data = await prisma.camper.findUnique({
            where: {
                id: req.params.uuid,
            }
        });
        res.status(200);
        res.send(data);
    })

router.route('/staff')
    .get(async function (req,res) {
        var data = await prisma.staff.findMany();
        res.status(200);
        res.send(data);
    })
    .post(function (req, res, next) {
        res.status(405);
        next(new Error('Not Implemented'))
      })
    .put(function (req, res ,next ) {
        res.status(405);
        next(new Error('Not Implemented'))
    })
    .delete(function (req, res ,next ) {
        res.status(405);
        next(new Error('Not Implemented'))
    })

router.route('/staff/id/:uuid')
    .get(async function (req,res) {
        const data = await prisma.staff.findUnique({
            where: {
                id: req.params.uuid,
            }
        });
        res.status(200)
        res.send(data);
    })
module.exports = router;