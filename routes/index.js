var express = require('express');
var router = express.Router();
var request = require('request');
const url = require('url'); 

const GetDataAPI = require("../CallAPI/GetDataAPI")

router.get('/', function(req, res, next) {
  GetDataAPI.ApiNews(function(rs_news){
  GetDataAPI.ApiUsers(function(rs_user){
      xxx = rs_news
      res.render('index', { title: 'หน้าแรก',text: 'ยินดีต้อนรับ' ,News: xxx ,Users: rs_user.data});
  });});
});


module.exports = router;
