const { Router } = require('express')
const { getBooks } = require('../controllers/booksController')

const route= Router()
router.route=("/books").get(getBooks)

module.exports = router