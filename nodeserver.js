require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const db =require('./src/config/db');
const path = require('path');

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

const Property = mongoose.model('course', course);

console.log(path.join(__dirname,'src','resources','views'));

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

// Chạy server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
