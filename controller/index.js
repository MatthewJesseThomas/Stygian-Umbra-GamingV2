const express = require('express');
const path = require('path');
const route = express.Router();
const bodyParser = require('body-parser');
const {User, Product, Category, Order} = require('../model');

const user = new User();
const product = new Product();
const category = new Category();
const order = new Order();

route.get('^/$|/Stygian-Umbra-Gaming', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
});
// Users Routes
route.post('/login', bodyParser.json(), (req, res)=>{
    user.login(req, res);
});
route.post('/register', bodyParser.json(), (req, res)=>{
    user.createUser(req, res);
});
route.get('/users', (req, res)=>{
    user.fetchUsers(req, res);
});
route.get('/users/:id', (req, res)=>{
    user.fetchUser(req, res);
});
route.put('/users/:id', bodyParser.json(), (req, res)=>{
    user.updateUser(req, res);
});
route.delete('/users/:id', (req, res)=>{
    user.deleteUser(req, res);
});
// Products Routes===================================
route.post('/products', bodyParser.json(), (req, res)=>{
    product.addProduct(req, res);
});
route.get('/products', (req, res)=>{
    product.fetchProducts(req, res);
});
route.get('/products/:id', (req, res)=>{
    product.fetchProduct(req, res);
});
route.put('/products/:id', bodyParser.json(), (req, res)=>{
    product.updateProduct(req, res);
});
route.delete('/products/:id', (req, res)=>{
    product.deleteProduct(req, res);
});
// Category Routes==================================
route.post('/category', bodyParser.json(), (req, res)=>{
    category.addCategory(req, res);
});
route.get('/category', (req, res)=>{
    category.fetchCategories(req, res);
});
route.get('/category/:id', (req, res)=>{
    category.fetchCategory(req, res);
});
route.put('/category/:id', bodyParser.json(), (req, res)=>{
    category.updateCategory(req, res);
});
route.delete('/category/:id', (req, res)=>{
    category.deleteCategory(req, res);
});
// Cart--Orders Routes==================================
route.post('/orders', bodyParser.json(), (req, res)=>{
    order.addOrder(req, res);
});
route.get('/orders', (req, res)=>{
    order.fetchOrders(req, res);
});
route.get('/orders/:id', (req, res)=>{
    order.fetchOrder(req, res);
});
route.put('/orders/:id', bodyParser.json(), (req, res)=>{
    order.updateOrder(req, res);
});
route.delete('/orders/:id', (req, res)=>{
    order.deleteOrder(req, res);
});
module.exports = route;