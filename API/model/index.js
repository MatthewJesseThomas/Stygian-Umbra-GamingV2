const express = require('express');
const router = express.Router();
const conDB = require('../config/index.js');
const { hash, compare, hashSync } = require('bcrypt');
const { createToken } = require('../middleware/AuthenticatedUser.js')

class User {
    login(req, res){
        const{ emailAdd, user_password } = req.body;
        const Qry = `SELECT user_id, firstName, lastName, gender, cellphoneNumber, emailAdd, user_password, userRole, userProfile, joinDate, cart 
        FROM Users
        WHERE emailAdd = '${emailAdd}';`;
        conDB.query(Qry, async (err, data)=>{
            if(err) throw err;
            if ((!data.length) || (data == null)) {
                res.status(401).json({
                    err:
                        "You've Provided an Invalid Email Address"
                });
            } else {
                await compare(user_password, data[0].user_password, (cErr, cResult) => {
                    if(cErr) throw cErr;
                    const jwToken = 
                        createToken(
                            {
                                emailAdd, user_password
                            }
                        );
                    res.cookie('LegitUser!!!', jwToken, {
                        maxAge: 3600000,
                        httpOnly: true
                    })
                    if (cResult) {
                        res.status(200).json({
                            msg: 'Logged In!!!',
                            jwToken,
                            result: data[0]
                        })
                    } else {
                        res.status(401).json({
                            err: 'You Have Entered an Invalid Password or Have Not Registered Yet!!!'
                        })
                    }
                })
            }
        });
    }
    fetchUsers(req, res){
        const Qry = 
        `SELECT user_id, firstName, lastName, gender, cellphoneNumber, emailAdd, user_password, userRole, userProfile, joinDate, cart
        FROM Users;`;
        conDB.query(Qry, (err, data)=>{
            if(err) throw err;
            else res.status(200).json(
                { results: data }
            );
        });
    }
    fetchUser(req, res){
        const Qry = 
        `SELECT user_id, firstName, lastName, gender, cellphoneNumber, emailAdd, user_password, userRole, userProfile, joinDate, cart
        FROM Users
        WHERE user_id = ?;
        `;
        conDB.query(Qry, [req.params.id], (err, data)=>{
            if(err) throw err;
            else res.status(200).json(
                { results: data }
            );
        })
    }
    async createUser(req, res){
        let userDetails = req.body;
        userDetails.user_password = await
        hash(userDetails.user_password, 15);
        let user = {
            emailAdd: userDetails.emailAdd,
            user_password: userDetails.user_password
        }
        const Qry = 
        `INSERT INTO Users
        SET ?;`;
        conDB.query(Qry, [userDetails], (err)=>{
            if (err) {
                res.status(401).json({ err });
            } else {
                const jwToken = createToken(user);
                res.cookie("LegitUser...", jwToken, {
                    maxAge: 3600000,
                    httpOnly: true 
                });
                res.status(200).json({ msg: "A New User Record Was Created & Saved." })
            }
        });
    }
    updateUser(req, res){
        let data = req.body;
        // if (data.user_password !== null ||
        //     data.user_password !== undefined) data.user_password = hashSync(data.user_password, 15);
        const Qry = 
        `UPDATE Users SET ? WHERE user_id = ?;`;
        conDB.query(Qry, [data, req.params.id], (err)=>{
            if(err) console.log(err);
            else res.status(200).json({
                msg: "A Row Was Affected, Success..."
            });
        })
    }
    deleteUser(req, res) {
        const Qry = 
        `DELETE FROM Users WHERE user_id = ?;`;
        conDB.query(Qry, [req.params.id], 
             (err) => {
                if (err) throw err;
                res.status(200).json({
                    msg: "A User Record Was Removed From Stygian-Umbra-GamingDB..."
                });
        });
    }
}
class Product {
    fetchProducts(req, res){
        const Qry = `SELECT * FROM Products;`;
        conDB.query(Qry, (err, results) => {
            if (err) throw err;
            res.status(200).json({ results: results })
        });
    }
    fetchProduct(req, res) {
        const Qry = `SELECT * FROM Products WHERE product_id = ?;`;
        conDB.query(Qry, [req.params.id], (err, results)=> {
            if(err) throw err;
            res.status(200).json({ results: results });
        });
    }
    addProduct(req, res) {
        const Qry = `INSERT INTO Products SET ?;`;
        conDB.query(Qry, [req.body, req.params.id], (err)=>{
            if(err) {
                res.status(400).json({ err:
                "Unable to Insert Into a New Record..."});
            }else{
                res.status(200).json({ msg:
                "Product Was Successfully Saved!!!"});
            }
        });
    }
    updateProduct(req, res){
        const Qry = 
        `UPDATE Products SET ? WHERE product_id = ?;`;
        conDB.query(Qry, [req.body, req.params.id], (err)=>{
            if(err){
                res.status(400).json({err});
            }else{
                res.status(200).json({ msg:
                "Product Details Updated Successfully..."});
            }
        });
    }
    deleteProduct(req, res){
        const Qry = `DELETE FROM Products WHERE product_id = ?;`;
        conDB.query(Qry, [req.params.id], (err)=>{
            if(err) res.status(400).json({ err:
            "This Record Cannot Be Found..." });
            res.status(200).json({ msg: 
            "A Product Was Deleted Successfully..."})
        });
    }
}
class Order {
    fetchOrders(req, res){
        const Qry = `SELECT * FROM Orders;`;
        conDB.query(Qry, (err, results) => {
            if (err) throw err;
            res.status(200).json({ results: results })
        });
    }
    fetchOrder(req, res) {
        const Qry = `SELECT * FROM Orders WHERE order_id = ?;`;
        conDB.query(Qry, [req.params.id], (err, results)=> {
            if(err) throw err;
            res.status(200).json({ results: results });
        });
    }
    addOrder(req, res) {
        const Qry = `INSERT INTO Orders SET ?;`;
        conDB(Qry, [req.body, req.params.id], (err)=>{
            if(err) {
                res.status(400).json({ err:
                "Unable to Insert Into a New Record..."});
            }else{
                res.status(200).json({ msg:
                "Order Was Successfully Saved!!!"});
            }
        });
    }
    updateOrder(req, res){
        const Qry = 
        `UPDATE Orders SET ? WHERE order_id = ?;`;
        conDB.query(Qry, [req.body, req.params.id], (err)=>{
            if(err){
                res.status(400).json({err});
            }else{
                res.status(200).json({ msg:
                "Orders Details Updated Successfully..."});
            }
        });
    }
    deleteOrder(req, res){
        const Qry = `DELETE FROM Orders WHERE order_id = ?;`;
        conDB.query(Qry, [req.params.id], (err)=>{
            if(err) res.status(400).json({ err:
            "This Record Cannot Be Found..." });
            res.status(200).json({ msg: 
            "A Order Was Deleted Successfully..."})
        });
    }
}
class Category {
    fetchCategories(req, res){
        const Qry = `SELECT * FROM Category;`;
        conDB.query(Qry, (err, results) => {
            if (err) throw err;
            res.status(200).json({ results: results })
        });
    }
    fetchCategory(req, res) {
        const Qry = `SELECT * FROM Category WHERE category_id = ?;`;
        conDB.query(Qry, [req.params.id], (err, results)=> {
            if(err) throw err;
            res.status(200).json({ results: results });
        });
    }
    addCategory(req, res) {
        const Qry = `INSERT INTO Category SET ?;`;
        conDB(Qry, [req.body, req.params.id], (err)=>{
            if(err) {
                res.status(400).json({ err:
                "Unable to Insert Into a New Record..."});
            }else{
                res.status(200).json({ msg:
                "Category Was Successfully Saved!!!"});
            }
        });
    }
    updateCategory(req, res){
        const Qry = 
        `UPDATE Category SET ? WHERE category_id = ?;`;
        conDB.query(Qry, [req.body, req.params.id], (err)=>{
            if(err){
                res.status(400).json({err});
            }else{
                res.status(200).json({ msg:
                "Category Details Updated Successfully..."});
            }
        });
    }
    deleteCategory(req, res){
        const Qry = `DELETE FROM Category WHERE category_id = ?;`;
        conDB.query(Qry, [req.params.id], (err)=>{
            if(err) res.status(400).json({ err:
            "This Record Cannot Be Found..." });
            res.status(200).json({ msg: 
            "A Category Was Deleted Successfully..."})
        });
    }
}
module.exports = {
    User,
    Product,
    Order,
    Category
}