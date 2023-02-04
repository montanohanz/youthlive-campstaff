const { PrismaClient } = require('@prisma/client');
const express = require('express');
var router = express.Router();
const prisma = new PrismaClient();

router.route('/qr/:id')