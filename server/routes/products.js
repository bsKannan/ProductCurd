var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = require('../models/product.model');

router.get('/getAll',(req,res,next)=>{
   Product.find().then(products =>{
        return res.status(200).json({
            message: products
        })
    })
    .catch(err=>{
        return res.status(404).json({
            message:"err" +err
        })
    })
})


router.get('/:id',(req,res,next)=>{
    Product.findById(req.params.id).then(product =>{
        return res.status(200).json({
            message: product
        })
    })
    .catch(err =>{
        return res.status(404).json({
            error: "err"+err
        })
    })
})

router.post('/addproduct',(req,res,next)=>{
 

    var product= new Product({
        product_name:req.body.product_name,
        product_description: req.body.product_description,
        product_price: req.body.product_price
        
    })
    .save()   
    .then(result => {
        console.log(result);
        return res.status(201).json({
            message: 'Product Created',
            data: result
        })
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
        error: err  
        })
    })
});


router.put('/updateproduct/:id',(req,res,next) =>{
    Product.findByIdAndUpdate(req.params.id,req.body)
    .then(prod =>{
        console.log(product);
        return res.status(200).json({
            message: 'Product Updated',
            data: product
        })
    })
    .catch(err =>{
        console.log(err);
        return res.status(500).json({
            error:err
        })
    })
})


router.delete('/deleteproduct/:id',(req,res,next) =>{
    Product.findByIdAndDelete(req.params.id)
    .then(product =>{
        console.log(product);
        return res.status(200).json({
            message: 'Product Deleted',
            // data: product
        })
    })
    .catch(err =>{
        return res.status(404).json({
            message: 'err'+err
        })
    })
})

module.exports = router;
