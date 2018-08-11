var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookSchema = new Schema(
  {
    title: {type: String, required: true},
    author: {type: Schema.ObjectId, ref: 'Author', required: true},
    summary: {type: String, required: true},
    isbn: {type: String, required: true},
    genre: [{type: Schema.ObjectId, ref: 'Genre'}]
  }
);

// Tạo hàm ảo lấy URL của sách
BookSchema
.virtual('url')
.get(function () {
  return '/catalog/book/' + this._id;
});

//Xuất mô hình
module.exports = mongoose.model('Book', BookSchema);