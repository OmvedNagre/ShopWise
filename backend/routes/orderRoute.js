import express from 'express'
import {placeOrder, placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus} from '../controllers/orderController.js'
// import { products } from '../../frontend/src/assets/assets.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser  from '../middleware/auth.js'


const orderRouter = express.Router()

// Admin Side
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

// Payment Methods
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)


// User Features
orderRouter.post('/userOrders',authUser,userOrders)


export default orderRouter