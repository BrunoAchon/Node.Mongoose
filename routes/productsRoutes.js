const express = require("express");
const router = express.Router()

// controle + router
const ProductController = require('../controllers/ProductController');

router.post('/create', ProductController.createProductPost)
router.get('/create', ProductController.createProduct)

router.post('/remove/:id', ProductController.removeProdutctPost)

 router.get('/edit/:id', ProductController.editProduct)
 router.post('/edit', ProductController.editProductPost)


router.get('/:id', ProductController.getProduct)
router.get('/', ProductController.getProducts)

// Export
module.exports = router
