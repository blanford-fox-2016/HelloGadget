'use strict'
const express = require('express');
const Phone = require('../models/models.smartphones.js');

/* seeding smartphones*/
function seedSmartphones(req,res){

  Phone.create([{
    name  : "iphone 7",
    camera  : "12mp",
    os    : "ios",
    ram   : "1024mb",
    image : "http://bit.ly/2g2e7oQ" ,
    externalMemory : "-",
    internalMemory : "16gb",
    price : 10000000,
    vendor : "Alex Mangga Dua"

  }, {
    name  : "iphone 8",
    camera  : "24mp",
    os    : "ios",
    ram   : "2048mb",
    image : "http://bit.ly/2g2e7oQ" ,
    externalMemory : "-",
    internalMemory : "32gb",
    price : 10000000,
    vendor : "Aji depok"
  }, {
    name  : "samsung s7",
    camera  : "24mp",
    os    : "android",
    ram   : "2048mb",
    image : "http://bit.ly/2g2e7oQ" ,
    externalMemory : "-",
    internalMemory : "32gb",
    price : 10000000,
    vendor : "Alex Mangga Dua"
  }, {
    name  : "samsung note 2",
    camera  : "24mp",
    os    : "android",
    ram   : "2048mb",
    image : "http://bit.ly/2g2e7oQ" ,
    externalMemory : "-",
    internalMemory : "32gb",
    price : 10000000,
    vendor : "Aji depok"
  }, {
    name  : "iphone 1",
    camera  : "32mp",
    os    : "ios",
    ram   : "2048mb",
    image : "http://bit.ly/2g2e7oQ" ,
    externalMemory : "-",
    internalMemory : "32gb",
    price : 10000000,
    vendor : "Aji depok"
  }], function(err,phone) {
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
      res.json("success delete all")
    }
  })
}

/* delete smartphonees by id*/

function  deleteOneSmartphones (req,res) {

  Phone.findOneAndRemove({
    _id : req.params.id
  }, function (err, deleted_data) {
    if (err) {
      res.status(404).json(err)
    }else {
      res.json(deleted_data)
    }
  } )
}


/* update smartphonees by id*/

function updateOneSmartphones(req,res){
  console.log(req.body);
  Phone.findOneAndUpdate({
    _id : req.params.id
  },{

    name  : req.body.name,
    camera  : req.body.camera,
    os    : req.body.os,
    ram   : req.body.ram,
    image : req.body.image,
    externalMemory : req.body.externalMemory,
    internalMemory : req.body.internalMemory,
    price : req.body.price,
    vendor : req.body.vendor

  }, {
    new : true,
    upsert : true
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
