const express = require('express');
const connection = require('../connection');
const router = express.Router();

const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
require('dotenv').config();
var auth = require('../services/authentication');
var checkRole = require('../services/checkRole');

router.post('/signup', (req, res) => {
    let user = req.body;
    const query = "SELECT email, password, role, status FROM user WHERE email=?";

    connection.query(query, [user.email], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error.' });
        }

        if (results.length > 0) {
            return res.status(400).json({ message: 'Email Already Exists.' });
        } else {
            const insertQuery = "INSERT INTO user (name, contactNumber, email, password, status, role) VALUES (?, ?, ?, ?, 'true', 'user')";
            connection.query(insertQuery, [user.name, user.contactNumber, user.email, user.password], (err, results) => {
                if (!err) {
                    return res.status(200).json({ message: 'Successfully Registered.' });
                } else {
                    return res.status(500).json({ error: 'Database error.' });
                }
            });
        }
    });
})

router.post('/login', (req, res) => {
    const user = req.body;
    const query = "SELECT email, password, name, role, status FROM user WHERE email=?";
    
    connection.query(query, [user.email], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Database error.' });
        }

        if (result.length <= 0 || result[0].password !== user.password) {
            return res.status(401).json({ message: "Incorrect Username or password" });
        }

        if (result[0].status === 'false') {
            return res.status(401).json({ message: "Wait for Admin Approval" });
        }

        const { email, role, name } = result[0];
        const accessToken = jwt.sign({ email, role }, process.env.ACCESS_TOKEN, { expiresIn: '8h' });

        res.status(200).json({ token: accessToken, role:role, name: name, email: email });
    });
});

router.post('/forgetPassword', (req, res) => {
    const user = req.body;
    query = "select email,password from user where email=?";
    connection.query(query, [user.email], (err, results) => {
        if (!err) {
            if (results.length <= 0) {
                return res.status(400).json({ message: "No account found with this email." });
            } else {
                var mailOptions = {
                    from: process.env.EMAIL,
                    to: results[0].email,
                    subject: 'Password by Cafe Management System',
                    html: `<p>Your Login details for Cafe Management System <br><b>Email:</b> ${results[0].email}<br><b>Password:</b> ${results[0].password}<br><a href="https://localhost:4200">Click here to Login</a></p>`
                };
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
                return res.status(200).json({ message: "Password sent successfully to your email." });
            }
        } else {
            return res.status(500).json({ error: err.message });
        }
    });
});

router.post('/changePassword', auth.authenticateToken, (req, res) => {
    const user = req.body;
    const email = res.locals.email;
    var query = "select * from user where email=? and password=?";
    connection.query(query, [email, user.oldPassword], (err, results) => {
        if (!err) {
            if (results.length <= 0) {
                return res.status(400).json({ message: "Incorrect Old Password" });
            } else {
                query = "update user set password=? where email=?";
                connection.query(query, [user.newPassword, email], (err, results) => {
                    if (!err) {
                        return res.status(200).json({ message: "Password Updated Successfully." });
                    } else {
                        return res.status(500).json({ error: err.message });
                    }
                });
            }
        } else {
            return res.status(500).json({ error: err.message });
        }
    });
});




var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

router.post('/forgetPassword',(req,res)=>{
    const user = req.body;
    query = "select email,password from user where email=?";
    connection.query(query,[user.email], (err,results)=> {
        if(!err){
            if(results.length <= 0){
                return res.status(200).json({message:"Password sent successfully to your email."})
            }
            else{
                var mailOptions = {
                    from: process.env.EMAIL,
                    to: results[0].email,
                    subject: 'Password by Cafe Management System',
                    html: '<p>Your Login details for Cafe Management System </b><br><b>Emai;:</b>'+results[0].email+'</br><b>Password</b>'+results[0].password+'<br><a href="https://localhost:4200">Clieck here to Login</a></p>'
                };
                transporter.sendMail(mailOptions, function(error,info){
                    if(error){
                        console.log(error);
                    }
                    else{
                        console.log('Email sent: '+ info.response);
                    }
                });
                return res.status(200).json({message:"Password sent successfully to your email."})
            }
        }
        else{
            return res.status(500).json(err);
        }
    })
})

router.get('/get',auth.authenticateToken,checkRole.checkRole,(req,res)=>{
    var query = "select id,name,email,contactNumber,status from user where role='user'";
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})

router.patch('/update',auth.authenticateToken,checkRole.checkRole,(req,res)=>{
    let user = req.body;
    var query = "update user set status=? where id=?";
    connection.query(query,[user.status,user.id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message}); 
            }
            return res.status(200).json({message:"User Updated Succefully"});
        }
        else{
            return res.status(500).json(err);
        }
    })
})

router.get('/checkToken',auth.authenticateToken,(req,res)=>{
    return res.status(200).json({message:"true"}); 
})

router.post('/changePassword',auth.authenticateToken,(req,res)=>{
    const user = req.body; 
    const email = res.locals.email;
    var query = "select * from user where email=? and password=?";
    connection.query(query,[email.user.oldPassword],(err,results)=>{
       if(!err){
         if(results.length <= 0 ){
            return res.status(400).json({message:"Incorrect Old Password"});
         }
         else if(result[0].password == user.oldPassword){
            query = "update user set password=? where email=?";
            connection.query(query,[user.newPassword,email],(err,results)=>{
                if(!err){
                    return res.status(200).json({message:"Password Updated Successfully."})
                }
                else{
                    return res.status(500).json(err); 
                }
            })
         }
         else{
            return res.status(400).json({message:"Something went wrong. Please try again later"});
         }
        }
         else{
        return res.status(500).json(err);
       }
    })
})

module.exports = router;
