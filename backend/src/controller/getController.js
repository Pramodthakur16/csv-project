require('../db/connect');

const BatStats = require('../models/batting')
const FieldStats = require("../models/fielding");
const OdiStats = require("../models/odi");

const getBat = async (_req,res)=>{
    try{
        const getBat = await BatStats.find({});
        res.send(getBat);
    }catch(e){
        res.status(400).send(e);
    }
}

const getField = async (_req,res)=>{
    try{
        const getField = await FieldStats.find({});
        res.send(getField);
    }catch(e){
        res.status(400).send(e);
    }
}

const getOdi = async (_req,res)=>{
    try{
        const getOdi = await OdiStats.find({});
        res.send(getOdi);
    }catch(e){
        res.status(400).send(e);
    }
}

module.exports = {
    getBat,
    getOdi,
    getField
}

















    // const getBat = (req, res) => {
    //     BatStats.find(function (err, batstats) {
    //         res.status(301).json({
    //             message:"",
    //             batStats:batstats
    //         });
    //     });
    // }
    
    // const getField = (req, res) => {
    //     OdiStats.find(function (err, fieldstats) {
    //         res.status(301).json({
    //             message:"",
    //             fieldstats:fieldstats
    //         });
    //     });
    // }
    
    // const getOdi = (req, res) => {
    //     OdiStats.find(function (err, odistats) {
    //         res.status(301).json({
    //             message:"",
    //             odistats:odistats
    //         });
    //     });
    // }
