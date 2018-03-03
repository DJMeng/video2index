var user = require("../models/user.js");
// 移动文件需要使用fs模块
var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');
var path = require('path');
var fs = require('fs');
module.exports = function (app) {
    app.post('/updateUsers', function (req, res, next) {
        user.updateUsers({
            sql: "update user SET username=?,password=?,age=?,info=? WHERE id = ?",
            params: [ req.body.username, req.body.password, req.body.age, req.body.info, req.body.id ]
        }, function (data) {
            res.send(data);
        });
    });

    app.post('/deleteUsers', function (req, res, next) {
        user.deleteUsers({
            sql: "DELETE FROM user WHERE id = " + req.body.id
        }, function (data) {
            res.send(data);
        });
    });

    app.post('/addUsers', function (req, res, next) {
        user.addUsers({
            data: {
                username: req.body.username,
                password: req.body.password,
                age: req.body.age,
                info: req.body.info
            },
            sql: "INSERT INTO user SET ?"
        }, function (data) {
            res.send(data);
        });
    });

    // app.post('/file-upload', function(req, res, next) {
    //     console.log(req.body);
    //     console.log(req.files);
    // });

//     router.post('/file-upload',function(req,res,next){
//     // 解析一个文件上传
//     var form = new multiparty.Form();
//     //设置文件存储路径
//     form.uploadDir = "uploads/images/";
//     //设置单文件大小限制
//     form.maxFilesSize = 2 * 1024 * 1024;
//     //form.maxFields = 1000;  设置所以文件的大小总和
//     //解析表单数据
//     form.parse(req, function(err, fields, files) {
//         //fields:非文件内容；files：文件内容
//         console.log(files.originalFilename);
//         console.log(files.path);
//         //重命名文件名
//         fs.rename(oldPath,newPath,(err) => {
//             if (err) throw err;
//             //具体操作
//         });
//     });
// });

  //   app.post('/file-upload', function(req, res) {
  //    // 获得文件的临时路径
  //   var tmp_path = req.files.thumbnail.path;
  //   // 指定文件上传后的目录 - 示例为"images"目录。 
  //   var target_path = './public/images/' + req.files.thumbnail.name;
  //   // 移动文件
  //   fs.rename(tmp_path, target_path, function(err) {
  //     if (err) throw err;
  //     // 删除临时文件夹文件, 
  //     fs.unlink(tmp_path, function() {
  //        if (err) throw err;
  //        res.send('File uploaded to: ' + target_path + ' - ' + req.files.thumbnail.size + ' bytes');
  //     });
  //   });
  // });
};