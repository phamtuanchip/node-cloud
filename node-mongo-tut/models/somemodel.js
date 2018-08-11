// Tập tin: ./models/somemodel.js

//Nhập Mongoose
var mongoose = require('mongoose');

//Định nghĩa một schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    a_string          : String,
    a_date            : Date,
});

//Xuất ra lớp mô hình "SomeModel"
module.exports = mongoose.model('SomeModel2', SomeModelSchema );