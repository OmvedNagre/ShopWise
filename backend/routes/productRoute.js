import express from 'express'
import {
  listProducts,
  addProduct,
  singleProduct,
  removeProduct
} from '../controllers/productController.js'

import upload from '../middleware/multer.js'
import adminAuth from '../middleware/adminAuth.js'

const productRouter = express.Router()

// Add product WITH images
productRouter.post(
  '/add',adminAuth,
  upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 }
  ]),
  addProduct
)

// Remove product (NO FILE UPLOAD)
productRouter.post('/remove',adminAuth, removeProduct)

// Get single product (NO FILE UPLOAD)
productRouter.post('/single', singleProduct)

// List products (NO FILE UPLOAD)
productRouter.get('/list', listProducts)

export default productRouter
