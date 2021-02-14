var express = require('express');
var router = express.Router();
var request = require('request');
const url = require('url'); 

const GetDataAPI = require("../CallAPI/GetDataAPI")

router.get('/', function(req, res, next) {
  GetDataAPI.ApiNews(function(rs_news){
  GetDataAPI.ApiUsers(function(rsb){
      xxx = rs_news
      yyy = rsb
      // console.log(yyy);
      res.render('index', { title: 'หน้าแรก',text: 'ยินดีต้อนรับ' ,News: xxx ,Users: yyy});
  });});
});


module.exports = router;
