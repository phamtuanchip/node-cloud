var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Genre = new Schema(
  {
    name: {type: String, required: true, min: 3, max: 100}     
  }
);

// Tạo hàm ảo lấy URL của sách
Genre
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

//Xuất mô hình
module.exports = mongoose.model('Genre', Genre);