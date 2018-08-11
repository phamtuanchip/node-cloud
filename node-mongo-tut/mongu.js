//Nhập mô-đun mongoose
var mongoose = require("mongoose");

//Thiết lập một kết nối mongoose mặc định
var mongoDB = "mongodb://127.0.0.1/mydb";
mongoose.connect(mongoDB);
//Ép Mongoose sử dụng thư viện promise toàn cục
mongoose.Promise = global.Promise;
//Lấy kết nối mặc định
var db = mongoose.connection;

//Ràng buộc kết nối với sự kiện lỗi (để lấy ra thông báo khi có lỗi)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

function handleError(err) {
  console.log(err);
  //return
}
// Định nghĩa schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  name: String,
  sport: String,
  binary: Buffer,
  living: Boolean,
  updated: { type: Date, default: Date.now },
  age: { type: Number, min: 18, max: 65, required: false },
  mixed: Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  array: [],
  ofString: [String], // Bạn có thể tạo mảng cho các trường khác
  nested: { stuff: { type: String, lowercase: true, trim: true } }
});

//   var breakfastSchema = new Schema({
//     eggs: {
//       type: Number,
//       min: [6, 'Too few eggs'],
//       max: 12,
//       required: [true, 'Why no eggs?']
//     },
//     drink: {
//       type: String,
//       enum: ['Coffee', 'Tea', 'Water',]
//     }
//   });

// Biên dịch mô hình từ schema
var SomeModel = mongoose.model("SomeModel", SomeModelSchema);

var awesome_instance = new SomeModel({ name: "awesome" });

// Lưu phần tử vừa thêm mới lại, thông qua việc truyền vào một hàm callback
awesome_instance.save(function(err) {
  if (err) return handleError(err);
  console.log("saved!");
  // Truy cập vào trường dữ liệu của bản ghi qua cú pháp (.)
  console.log(awesome_instance.name); //sẽ in ra 'also_awesome'

  // Thay đổi bản ghi bằng cách chỉnh sửa trường thông tin, sau đó gọi lệnh save().
  awesome_instance.name = "New cool name";
  awesome_instance.save(function(err) {
    if (err) return handleError(err); // lưu!
    console.log("Updated!");
  });
});

SomeModel.create({ name: "also_awesome" }, function(err, awesome_instance) {
  if (err) return handleError(err);
  console.log("Lưu!");
});
SomeModel.create({ name: "test", sport: "Tennis" }, function(
  err,
  awesome_instance
) {
  if (err) return handleError(err);
  console.log("Lưu!");
});

var Athlete = mongoose.model("Athlete", SomeModelSchema);

// tìm tất cả các vận động viên chơi tennis, chọn hai trường 'name' và 'age'
Athlete.find({ sport: "Tennis" }, "name age", function(err, athletes) {
  if (err) return handleError(err);
  // 'athletes' chứa danh sách các vận động viên phù hợp với tiêu chí đã đề ra.
  console.log("athletes ", athletes.toString());
});

// tìm kiếm tất cả các vận động viên
var query = Athlete.find({ sport: "Tennis" });

// chọn ra hai trường 'name' và 'age'
query.select("name age");

// giới hạn kết quả lại 5 bản ghi
query.limit(5);

// sắp xếp theo tên
query.sort({ age: -1 });

// thực thi câu truy vấn
query.exec(function(err, athletes) {
  if (err) return handleError(err);
  // athletes chứa một danh sách 5 vận động viên chơi tennis được xếp theo tên
  console.log("athletes ", athletes);
});

Athlete.find()
  .where("sport")
  .equals("Tennis")
  .where("age")
  .gt(17)
  .lt(50) //Điều kiện thêm vào sau hàm where
  .limit(5)
  .sort({ age: -1 })
  .select("name age")
  .exec(function(err, athletes) {
    if (err) return handleError(err);
    // athletes chứa một danh sách 5 vận động viên chơi tennis được xếp theo tên
    console.log("athletes ", athletes);
  });

var authorSchema = Schema({
  name: String,
  stories: [{ type: Schema.Types.ObjectId, ref: "Story" }]
});

var storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: "Author" },
  title: String
});

var Story = mongoose.model("Story", storySchema);
var Author = mongoose.model("Author", authorSchema);

var bob = new Author({ name: "Bob Smith" });

bob.save(function(err) {
  if (err) return handleError(err);

  //Bob giờ đã tồn tại, đến lúc tạo tác phẩm rồi
  var story = new Story({
    title: "Bob goes sledding",
    author: bob._id // gắn _id của tác giả Bob. ID này được tạo ra mặc định!
  });

  story.save(function(err) {
    if (err) return handleError(err);
    // Bob giờ đã có tác phẩm của mình
  });
});

Story
.findOne({ title: 'Bob goes sledding' })
.populate('author') //Thay thế ID của tác giả bằng thông tin của tác giả!
.exec(function (err, story) {
  if (err) return handleError(err);
  console.log('The author is %s', story.author.name);
  // in ra "The author is Bob Smith"
});

Story
.find({ author : bob._id })
.exec(function (err, stories) {
  if (err) return handleError(err);
  // trả về tất cả các tác phẩm có id của Bob.
  console.log('Stories of bob ', stories);
});

//Thê mới mô hình SomeModel thông qua lệnh require
var SomeModel2 = require('./models/somemodel')

// Sử dụng đối tượng SomeModel để tìm tất cả bản ghi của SomeModel
SomeModel2.find(function (err, story) {
    if (err) return handleError(err);    
});