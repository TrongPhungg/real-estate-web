require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const db =require('./src/config/db');
const path = require('path');
const route = require("./src/routes/noderoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Kết nối MongoDB
db.connect();

// app.engine('jsx', require('express-react-views').createEngine());
// app.set('view engine', 'jsx');

// Định nghĩa Schema
const course = new mongoose.Schema({
    name:{type:String, required:true},
    description:{type:String},
    image:{type:String},
    videoId:{type:String, required:true},
    level:{type:String},
});

// const realestate = new mongoose.Schema({
//     title: { type: String, required: true }, // Tiêu đề tin đăng
//     description: { type: String }, // Mô tả chi tiết
//     type: { type: String }, // Loại hình bất động sản (căn hộ, nhà phố, biệt thự, ...)
//     purpose: { type: String, enum: ["sale", "rent"] }, // Mục đích: bán hoặc cho thuê
//     address: { type: String }, // Địa chỉ cụ thể
//     area: { type: Number }, // Diện tích (m²)
//     bathrooms: { type: Number }, // Số phòng tắm
//     bedrooms: { type: Number }, // Số phòng ngủ
//     city: { type: String }, // Thành phố
//     district: { type: String }, // Quận/Huyện
//     ward: { type: String }, // Phường/Xã
//     floor: { type: Number }, // Số tầng
//     furniture: { type: Boolean }, // Nội thất (có/không)
//     price: { type: Number, required: true }, // Giá bán/thuê (VNĐ)
//     images:{type:String},
//     localtion:{type:String}
// });


const test = new mongoose.Schema({
    title: { type: String, required: true }, // Tiêu đề tin đăng
});

const Property = mongoose.model('course', course);
// const estateModel = mongoose.model('realestate', realestate);
const testModal = mongoose.model('test', test);

// console.log(path.join(__dirname,'src','resources','views'));

app.set('views', path.join(__dirname,'src','resources','views'));

// API lấy danh sách bất động sản
app.get('/api/course', async (req, res) => {
    try {
        const courses = await Property.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// app.get('/api/estate', async (req, res) => {
//     try {
//         const realestates = await estateModel.find();
//         console.log("Dữ liệu được tìm thấy",realestates);
//         res.json(realestates);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

app.get('/api/test', async (req, res) => {
    try {
        const tests = await testModal.find( );
        console.log("Dữ liệu được tìm thấy",tests);
        res.json(tests);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

route(app);

// Chạy server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
