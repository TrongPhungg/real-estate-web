import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 text-center text-md-start">
            <div className="logo">
              <img
                src="https://storage.googleapis.com/a1aa/image/OP8jnwdFKTL3_95yBrmIinnSv_bE28IYFGdYMF_y0AY.jpg"
                alt="Company logo with a house and the text 'muonnha.com.vn'"
                width="150"
                height="50"
              />
            </div>
            <p className="mt-3">CÔNG TY TNHH TẦM NHÌN TRUYỀN THÔNG</p>
            <div className="contact-info">
              <p>
                <i className="fas fa-map-marker-alt"></i> 98/39/1B12, Đông Hưng
                Thuận 5, Phường Tân Hưng Thuận, Quận 12, Tp. Hồ Chí Minh.
              </p>
              <p>
                <i className="fas fa-phone-alt"></i> 0909 888 019
              </p>
              <p>
                <i className="fas fa-envelope"></i> muonnha.com.vn@gmail.com
              </p>
            </div>
          </div>
          <div className="col-md-2 text-center text-md-start">
            <h5>HƯỚNG DẪN</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Báo giá &amp; hỗ trợ</a>
              </li>
              <li>
                <a href="#">Câu hỏi thường gặp</a>
              </li>
              <li>
                <a href="#">Giới thiệu</a>
              </li>
              <li>
                <a href="#">Liên hệ</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2 text-center text-md-start">
            <h5>QUY ĐỊNH</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Quy định đăng tin</a>
              </li>
              <li>
                <a href="#">Quy chế hoạt động</a>
              </li>
              <li>
                <a href="#">Quy định sử dụng</a>
              </li>
              <li>
                <a href="#">Chính sách bảo mật</a>
              </li>
              <li>
                <a href="#">Giải quyết khiếu nại</a>
              </li>
              <li>
                <a href="#">Hướng dẫn sử dụng</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 text-center text-md-start">
            <h5>ĐĂNG KÝ NHẬN TIN</h5>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button type="button" class="btn btn-outline-danger">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-send"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"></path>
                </svg>
              </button>
            </div>
            
          </div>
          <div className="col-md-2 text-center text-md-start">
            <h5>LIÊN KẾT</h5>
            <div>
              <a href="https://www.facebook.com/TrongPhungg/" target="_blank">
                <img
                  className={cx("social-icons")}
                  src="./img/facebook-color.svg"
                />
              </a>
              <a href="#" target="_blank">
                <img className={cx("social-icons")} src="./img/zalo_icon.svg" />
              </a>
              <a href="#">
                <img className={cx("social-icons")} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
