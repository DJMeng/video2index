var action_user = require("../action/user.js");
var conn_user = require("../models/user.js");
var path = require("path");  
var express = require("express");  
var router = express.Router();
router.get("/",function(req,res){
    //res.sendFile(path.join(__dirname,"upload.html"));  
    //res.send("OK");
    console.log("index");
    conn_user.getUsers(function (data) {
            if (data.status) {
                data.title = "增删改查";
                res.render('demo', data);
            } else {
                res.render('error', {message: "信息加载失败"});
            }
        });
});  
  
router.get("/user",function(req,res){  
    res.send("index user page" + req.url);  
});  
  
router.get("/admin",function(req,res){  
    res.send("admin page" + req.url);  
});  
  
router.get("/redirect",function(req,res){  
    res.redirect("https://www.baidu.com");  
});  
  
router.get("/upload",function(req,res){  
  // res.send(path.join(__dirname,"../upload.html"));  
  console.log(path.join(__dirname+"/../upload.html"));  
  // res.sendFile(path.join(__dirname,"../upload.html"));  
  res.sendFile(path.join(__dirname+"/../upload.html"));  
});  

router.get("/display",function(req,res){  
  // res.send(path.join(__dirname,"../upload.html"));  
  console.log(path.join(__dirname+"/../display.html"));  
  // res.sendFile(path.join(__dirname,"../upload.html"));  
  res.sendFile(path.join(__dirname+"/../display.html"));  
});  

// router.get("/test.avi",function(req,res){  
//   // res.send(path.join(__dirname,"../upload.html"));  
//   console.log(path.join(__dirname+"/../test.avi"));  
//   // res.sendFile(path.join(__dirname,"../upload.html"));  
//   res.pipe(path.join(__dirname+"/../test.avi"));
//   //res.redirect(path.join(__dirname+"/../test.avi"));  
// }); 
module.exports = router;  

// module.exports = function (app) {
//     //所有的路由信息
//     app.get('/', function (req, res) {
//         conn_user.getUsers(function (data) {
//             if (data.status) {
//                 data.title = "增删改查";
//                 res.render('demo', data);
//             } else {
//                 res.render('error', {message: "信息加载失败"});
//             }
//         });
//     });

//     action_user(app);
// };