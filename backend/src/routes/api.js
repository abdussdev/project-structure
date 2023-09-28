const express = require('express');
const router = express.Router();

// All controllers
const adminController = require("../controllers/adminController.js")
const cartController = require("../controllers/cartController.js")
const categoryController = require("../controllers/categoryController.js")
const customerController = require("../controllers/customerController.js")
const orderController = require("../controllers/orderController.js")
const orderItemController = require("../controllers/order_itemController.js")
const paymentController = require("../controllers/paymentController.js")
const postController = require("../controllers/postController.js")
const productController = require("../controllers/productController.js")
const shipmentController = require("../controllers/shipmentController.js")
const subAdminController = require("../controllers/subAdminController.js")
const userController = require("../controllers/userController.js")
const wishListController = require("../controllers/wishlistController.js")

// Admin
router.get('/admins', adminController.createAdmin);
router.get('/admins/:id', adminController.readAdmin);
router.get('/admins/:id', adminController.updateAdmin);
router.get('/admins/:id', adminController.deleteAdmin);

// Cart
router.get('/carts', cartController.createCart);
router.get('/carts/:id', cartController.readCart);
router.get('/carts/:id', cartController.updateCart);
router.get('/carts/:id', cartController.deleteCart);

// Category
router.get('/category', categoryController.createCategory);
router.get('/category/:id', categoryController.readCategory);
router.get('/category/:id', categoryController.updateCategory);
router.get('/category/:id', categoryController.deleteCategory);

// Customer
router.get('/customer', customerController.createCustomer);
router.get('/customer/:id', customerController.readCustomer);
router.get('/customer/:id', customerController.updateCustomer);
router.get('/customer/:id', customerController.deleteCustomer);

//Order
router.get('/order', orderController.createOrder);
router.get('/order/:id', orderController.readOrder);
router.get('/order/:id', orderController.updateOrder);
router.get('/order/:id', orderController.deleteOrder);

//OrderItem
router.get('/order-item', orderItemController.createOrderItem);
router.get('/order-item/:id', orderItemController.readOrderItem);
router.get('/order-item/:id', orderItemController.updateOrderItem);
router.get('/order-item/:id', orderItemController.deleteOrderItem);

// Payment
router.get('/payment', paymentController.createPayment);
router.get('/payment/:id', paymentController.readPayment);
router.get('/payment/:id', paymentController.updatePayment);
router.get('/payment/:id', paymentController.deletePayment);

// Post
router.get('/post', postController.createPost);
router.get('/post/:id', postController.readPost);
router.get('/post/:id', postController.updatePost);
router.get('/post/:id', postController.deletePost);

// Product
router.get('/product', productController.createProduct);
router.get('/product/:id', productController.readProduct);
router.get('/product/:id', productController.updateProduct);
router.get('/product/:id', productController.deleteProduct);

// Shipment
router.get('/shipment', shipmentController.createShipment);
router.get('/shipment/:id', shipmentController.readShipment);
router.get('/shipment/:id', shipmentController.updateShipment);
router.get('/shipment/:id', shipmentController.deleteShipment);

// SubAdmin
router.get('/sub-admin', subAdminController.createSubAdmin);
router.get('/sub-admin/:id', subAdminController.readSubAdmin);
router.get('/sub-admin/:id', subAdminController.updateSubAdmin);
router.get('/sub-admin/:id', subAdminController.deleteSubAdmin);

//User
router.get('/user', userController.createUser);
router.get('/user/:id', userController.readUser);
router.get('/user/:id', userController.updateUser);
router.get('/user/:id', userController.deleteUser);

// WishList
router.get('/wish-list', wishListController.createWishList);
router.get('/wish-list/:id', wishListController.readWishList);
router.get('/wish-list/:id', wishListController.updateWishList);
router.get('/wish-list/:id', wishListController.deleteWishList);

module.exports = router;
