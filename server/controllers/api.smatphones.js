'use strict'
const express = require('express');
const Phone = require('./models/models.smartphones.js');

/* seeding smartphones*/
function seedSmartphones(req,res){

  Phone.create({
    name  : "iphone 7",
    camera  : "12mp",
    os    : "ios",
    ram   : "1024mb",
    image : "data:image/jpeg;base64,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" ,
    externalMemory : "-",
    internalMemory : "16gb",
    price : 10000000,
    vendor : "Apple"

  }, function(err,phone) {
    if (err) {
      res.status(404)
    }else {
      res.json(phone)
    }
  })
}

/* create new  smartphones*/

function addNewSmartphones(req,res) {

  Phone.create({

      name  : req.body.name,
      camera  : req.body.camera,
      os    : req.body.os,
      ram   : req.body.ram,
      image : req.body.image,
      platform : req.body.platform,
      externalMemory : req.body.externalMemory,
      internalMemory : req.body.internalMemory,
      price : req.body.price,
      vendor : req.body.vendor

  },function (err,data){
    if (err) {
      res.status(404).json({message:"error"})
    }else {
      res.json(data)
    }
  })

}

/* get one smartphones */
function getOneSmartphones(req,res){

  Phone.findOne({name:req.params.name}, function (err,data) {
    if (err) {
      res.status(404)
    } else {
      res.json(data)
    }
  })

}

/* delete all smartphonees*/

function deleteAllSmartphones(req,res) {

  Phone.remove({},function (err) {
    if (err) {
      console.log(err);
    } else {
      res.send("success delete all")
    }
  })
}

/* delete smartphonees by id*/

function  deleteOneSmartphones (req,res) {

  Phone.findByIdAndRemove(req.params._id, function (err) {
    if (err) {
      res.status(404)
    }else {
      res.send("error")
    }
  } )
}


/* update smartphonees by id*/

function updateOneSmartphones(req,res){

  Phone. findByIdAndUpdate(req.params._id,{

    name  : req.body.name,
    camera  : req.body.camera,
    os    : req.body.os,
    ram   : req.body.ram,
    image : req.body.image,
    platform : req.body.platform,
    externalMemory : req.body.externalMemory,
    internalMemory : req.body.internalMemory,
    price : req.body.price,
    vendor : req.body.vendor

  }, function(err, phone) {
        if (err) {
          res.status(err)
        }else {
          res.json(phone)
        }
    })
}

/* show all smartphones*/

function addNewSmartphones(req,res){

  Phone.find({},function(err,phone) {
    if (err) {
      res.status(404)
    }else {
      res.json(phone)
    }
  })

}

module.exports = {
  
  seedSmartphones:seedSmartphones,
  addNewSmartphones:addNewSmartphones,
  getAllSmartphones:getAllSmartphones,
  getOneSmartphones:getOneSmartphones,
  deleteAllSmartphones:deleteAllSmartphones,
  deleteOneSmartphones:deleteOneSmartphones,
  updateOneSmartphones:updateOneSmartphones

}
