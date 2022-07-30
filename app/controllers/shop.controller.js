const Product = require("../models/product.model.js");
const Company = require("../models/company.model.js");
const Buyer = require("../models/buyer.model.js");
const BuyInfo = require("../models/buyInfo.model.js");

//----------------------------------- product ------------------------------------------

// Product 전체 조회 
exports.findProductAll = (req,res)=>{
    Product.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving products."
          });
        else res.send(data);
      });
};

// Product로 조회
exports.findProductOne = (req,res)=>{
    Product.findById(req.params.product, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Product with id ${req.params.product}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Product with id " + req.params.product
            });
          }
        } else res.send(data);
      });
};

// Product로 삭제
exports.deleteProduct = (req,res)=>{
    Product.remove(req.params.product, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Product with id ${req.params.product}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Product with id " + req.params.product
            });
          }
        } else res.send({ message: `Product was deleted successfully!` });
      });
};

// Product 전체 삭제
exports.deleteProductAll = (req,res)=>{
    Product.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all products."
          });
        else res.send({ message: `All Product were deleted successfully!` });
      });
};

//---------------------------------------- company ------------------------------------


// Company 전체 조회 
exports.findCompanyAll = (req,res)=>{
  Company.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving companies."
        });
      else res.send(data);
    });
};

// Company로 조회
exports.findCompanyOne = (req,res)=>{
  Company.findById(req.params.company, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Company with id ${req.params.company}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Company with id " + req.params.company
          });
        }
      } else res.send(data);
    });
};

// Company로 삭제
exports.deleteCompany = (req,res)=>{
  Company.remove(req.params.company, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Company with id ${req.params.company}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Company with id " + req.params.company
          });
        }
      } else res.send({ message: `Company was deleted successfully!` });
    });
};

// Company 전체 삭제
exports.deleteCompanyAll = (req,res)=>{
  Company.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all companies."
        });
      else res.send({ message: `All Company were deleted successfully!` });
    });
};

//------------------------------------------- buyer ------------------------------------------

// Buyer 전체 조회 
exports.findBuyerAll = (req,res)=>{
  Buyer.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving buyers."
        });
      else res.send(data);
    });
};

// Buyer로 조회
exports.findBuyerOne = (req,res)=>{
  Buyer.findById(req.params.buyer, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Buyer with id ${req.params.buyer}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Buyer with id " + req.params.buyer
          });
        }
      } else res.send(data);
    });
};

// Buyer로 삭제
exports.deleteBuyer = (req,res)=>{
  Buyer.remove(req.params.buyer, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Buyer with id ${req.params.buyer}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Buyer with id " + req.params.buyer
          });
        }
      } else res.send({ message: `Buyer was deleted successfully!` });
    });
};

// Buyer 전체 삭제
exports.deleteBuyerAll = (req,res)=>{
  Buyer.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all buyers."
        });
      else res.send({ message: `All Buyer were deleted successfully!` });
    });
};

//------------------------------------------- buyInfo ------------------------------------------

// BuyInfo 전체 조회 
exports.findBuyInfoAll = (req,res)=>{
  BuyInfo.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving buyers."
        });
      else res.send(data);
    });
};

// Buyer로 조회
exports.findBuyInfoOne = (req,res)=>{
  BuyInfo.findById(req.params.buyer, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found BuyInfo with id ${req.params.buyer}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving BuyInfo with id " + req.params.buyer
          });
        }
      } else res.send(data);
    });
};

// Buyer로 삭제
exports.deleteBuyInfo = (req,res)=>{
  BuyInfo.remove(req.params.buyer, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found BuyInfo with id ${req.params.buyer}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete BuyInfo with id " + req.params.buyer
          });
        }
      } else res.send({ message: `BuyInfo was deleted successfully!` });
    });
};

// BuyInfo 전체 삭제
exports.deleteBuyInfoAll = (req,res)=>{
  BuyInfo.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all buyInfoes."
        });
      else res.send({ message: `All BuyInfo were deleted successfully!` });
    });
};