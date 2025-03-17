const mongoose = require('mongoose');

const realestate = new mongoose.Schema({
    title: { type: String, required: true }, // Tiêu đề tin đăng
    description: { type: String }, // Mô tả chi tiết
    type: { type: String }, // Loại hình bất động sản (căn hộ, nhà phố, biệt thự, ...)
    purpose: { type: String, enum: ["sale", "rent"] }, // Mục đích: bán hoặc cho thuê
    address: { type: String }, // Địa chỉ cụ thể
    area: { type: Number }, // Diện tích (m²)
    bathrooms: { type: Number }, // Số phòng tắm
    bedrooms: { type: Number }, // Số phòng ngủ
    city: { type: String }, // Thành phố
    district: { type: String }, // Quận/Huyện
    ward: { type: String }, // Phường/Xã
    floor: { type: Number }, // Số tầng
    furniture: { type: Boolean }, // Nội thất (có/không)
    price: { type: Number, required: true }, // Giá bán/thuê (VNĐ)
    images:{type:String},
    localtion:{type:String}
});

const estateModel = mongoose.model('realestate', realestate);

class HomeController {
  // [GET] /api/estate
  index(req, res,next) {
    estateModel.find({})
      .then(realestates => {
        res.json(realestates);
      })
      .catch(next);
    }
  
  
}

module.exports = new HomeController();
