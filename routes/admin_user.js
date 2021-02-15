var express = require('express');
var router = express.Router();
var request = require('request');
const url = require('url'); 
const app = require('../app');

const GetDataAPI = require("../CallAPI/GetDataAPI")
const userControllers = require("../controllers/UserControllers")


router.get('/', function(req, res, next) {
  GetDataAPI.ApiUsers(function(rs_user){
      xxx = rs_user.data;
      res.render('admin_user', { title: 'ผู้ดูแลระบบ',text: 'Admin' ,user: xxx });
  });
});


// router.post('/AddUserType', usertypeControllers.AddUserType);
// router.post('/EditUserType', usertypeControllers.UpdateUserType);
router.post('/DeleteUser', userControllers.DeleteUser);
// router.post('/DeleteUser', function(req, res, next) {
//   // console.log(req.body);
//   var UserId = req.body.UserId;
//   // console.log(UserId);
//   // userControllers.DeleteUser(UserId ,rs);
//   userControllers.DeleteUser(function(UserId ,rs){
//     res.status(200).json({
//       message: 'ลบข้อมูลเรียบร้อยแล้ว'
//     });
//   });
//     // res.end();
// });


// router.post('/controlUsertype', function(req, res, next) {
//     let btn = req.body.btn;
//     let UserTypeId = req.body.UserTypeId;
//     let UserTypeCode = req.body.UserTypeCode;
//     let UserTypeName = req.body.UserTypeName;
//     console.log(UserTypeId);
//     console.log(UserTypeCode);
//     console.log( UserTypeName );
//     if (btn == 'Add'){
//                   request.post({
//                       headers: {'content-type' : 'application/json'},
//                       url:     'http://localhost:3000/api/usertype/AddUserType',
//                       json: {
//                         "UserTypeCode": UserTypeCode,
//                         "UserTypeName": UserTypeName
//                       }
//                   }, function(error, response, body){
//                       res.status(200).redirect('/admin_usertype');
//                   });


//     } else if (btn == 'Edit') { 
//                 request.post({
//                     headers: {'content-type' : 'application/json'},
//                     url:     'http://localhost:3000/api/usertype/EditUserType',
//                     json: {
//                       "UserTypeId": UserTypeId,
//                       "UserTypeCode": UserTypeCode,
//                       "UserTypeName": UserTypeName
//                     }
//                 }, function(error, response, body){
//                     res.status(200).redirect('/admin_usertype');
//                 });

//     } else if(btn == 'Delete'){
//                 request.post({
//                     headers: {'content-type' : 'application/json'},
//                     url:     'http://localhost:3000/api/usertype/DeleteUserType',
//                     json: {
//                       "UserTypeId": UserTypeId,
//                     }
//                 }, function(error, response, body){
//                     res.status(200).redirect('/admin_usertype');
//                 });
//     } 
//   });

  


module.exports = router;

