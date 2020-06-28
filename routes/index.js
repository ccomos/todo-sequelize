const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const todos = require('./modules/todos')
const users = require('./modules/users')
const auth = require('./modules/auth') // 引用facebook第三方認證模組
const { authenticator } = require('../middleware/auth')  // 掛載 middleware

router.use('/todos', authenticator, todos)
router.use('/users', users)
router.use('/auth', auth)  // 掛載facebook第三方認證模組
router.use('/', authenticator, home)

module.exports = router