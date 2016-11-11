'use strict'
const express = require('express');
const Phone = require('../models/models.smartphones.js');

/* seeding smartphones*/
function seedSmartphones(req,res){

  Phone.create({
    name  : "iphone 7",
    camera  : "12mp",
    os    : "ios",
    ram   : "1024mb",
    image : "http://bit.ly/2g2e7oQ" ,
    externalMemory : "-",
    internalMemory : "16gb",
    price : 10000000,
    vendor : "Alex Mangga Dua"

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

function getAllSmartphones(req,res){

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
