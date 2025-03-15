import classNames from "classnames/bind";
import React from "react";
import styles from "./Home.module.scss";
import { useState,useEffect } from "react";

const cx = classNames.bind(styles);

function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/course") // Thay thế bằng API backend của bạn
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error("Error fetching properties:", error));
  }, []);
  return (
    <div className={cx("home", "container-fluid", "p-0")}>
      <img
        src="/img/home-picture.png"
        className="img-fluid"
        width="1920"
        height="600"
      />
      <div className="container search-bar position-absolute top-50 start-50 translate-middle">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "home" ? "active" : ""}`}
              onClick={() => setActiveTab("home")}
              id="pills-home-tab"
              type="button"
            >
              Nhà đất bán
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "profile" ? "active" : ""}`}
              onClick={() => setActiveTab("profile")}
              id="pills-profile-tab"
              type="button"
            >
              Nhà đất cho thuê
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className={`tab-pane fade ${
              activeTab === "home" ? "show active" : ""
            }`}
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="input-group mb-3">
              <select className="form-select" aria-label="Loại nhà đất">
                <option selected>Loại nhà đất</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <input
                type="text"
                className="form-control"
                placeholder="Tìm nhanh. VD: Vinhomes Central Park"
                aria-label="Search"
              />
              <button className="btn btn-danger" type="button">
                Tìm kiếm
              </button>
            </div>
            <div className="input-group mb-3">
              <select className="form-select" aria-label="Trên toàn quốc">
                <option selected>Trên toàn quốc</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <select className="form-select" aria-label="Mức giá">
                <option selected>Mức giá</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <select className="form-select" aria-label="Diện tích">
                <option selected>Diện tích</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <select className="form-select" aria-label="Lọc thêm">
                <option selected>Lọc thêm</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>
          </div>
          <div
            className={`tab-pane fade ${
              activeTab === "profile" ? "show active" : ""
            }`}
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="input-group mb-3">
              <select className="form-select" aria-label="Loại nhà đất">
                <option selected>Loại nhà đất</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <input
                type="text"
                className="form-control"
                placeholder="Tìm nhanh. VD: Vinhomes Central Park"
                aria-label="Search"
              />
              <button className="btn btn-danger" type="button">
                Tìm kiếm
              </button>
            </div>
            <div className="input-group mb-3">
              <select className="form-select" aria-label="Trên toàn quốc">
                <option selected>Trên toàn quốc</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <select className="form-select" aria-label="Mức giá">
                <option selected>Mức giá</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <select className="form-select" aria-label="Diện tích">
                <option selected>Diện tích</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <select className="form-select" aria-label="Lọc thêm">
                <option selected>Lọc thêm</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("space-between", "d-flex", "container")}>
        <div>
          <a>
            <h4>Bất động sản dành cho bạn</h4>
          </a>
        </div>
        <div className="position-relative">
          <a>Tin nhà đất bán mới nhất</a>
          <a className={cx("line-between", "ms-2")}>
            Tin nhà đất cho thuê mới nhất
          </a>
        </div>
      </div>

      <div className="container">
          <div class="row">
            {/* <div class="col-sm-4 mb-3 mb-sm-0">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to additional
                    content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to additional
                    content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div> */}
             {properties.length > 0 ? (
            properties.map((property) => (
              <div key={property.id} className="col-sm-4 mb-3">
                <div className="card">
                  <img src={property.image} className="card-img-top" alt="property" />
                  <div className="card-body">
                    <h5 className="card-title">{property.title}</h5>
                    <p className="card-text">{property.description}</p>
                    <a href="#" className="btn btn-primary">
                      Xem chi tiết
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Đang tải dữ liệu...</p>
          )}

          </div>
      </div>
    </div>
  );
}

export default Home;
