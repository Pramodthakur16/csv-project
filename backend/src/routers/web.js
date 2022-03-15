const express = require('express');
const router = express.Router();

const {upload} = require('../Helper/uploadStats');
const {postBat, postField, postOdi} = require('../controller/postController');

router.get('/', (req, res)=>{
    console.log(req.query.msg);
    res.render('../src/view/index',{title:"Upload csv files", msg : req.query.msg});
});

router.post('/upload/odi',upload.single('odi'), postOdi);
router.post('/upload/bat',upload.single('bat'), postBat);
router.post('/upload/field',upload.single('field'), postField);


let web = router;
module.exports = web;
