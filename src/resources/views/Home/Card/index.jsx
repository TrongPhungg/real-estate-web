import classNames from "classnames/bind";
import styles from "./Card.module.scss";

const cx = classNames.bind(styles);

function Card({ property }) {
  return (
    <div className="col-md-3">
      <div className={cx('card')}>
          <div className={cx("property-card")}>
            <img src={property.images} alt={`Image of ${property.title}`} />
            <div className={cx("card-body")}>
            <h5 className={cx("card-title",'text-truncate')}>
                       {property.title}
                     </h5>
                     <p className="card-text text-muted small">
                      📍 {property.address}, {property.ward},{" "}
                       {property.district}, {property.city}
                     </p>
              <p className="text-success fw-bold">
                     {property.price
                       ? `${property.price.toLocaleString()} VND`
                        : "Liên hệ"}
                    </p>
            <div className="d-flex flex-wrap gap-2 text-muted small">
                 <span>📏 {property.area}m²</span>
                 <span>🛏 {property.bedrooms} PN</span>
                 <span>🚿 {property.bathrooms} WC</span>
                 <span>🏢 {property.floor} tầng</span>
                 <span>
                   🛋 {property.furniture ? "Có nội thất" : "Không có"}
                 </span>
               </div>
            </div>
            <div className={cx("card-footer")}>
              <small className={cx("text-muted")}>{property.ward}</small>
              <a href="#" className="btn btn-primary ms-auto">
                  Xem chi tiết
               </a>
              <i className={cx("far fa-heart")}></i>
            </div>
      </div>
      </div>
    </div>
  );
}

export default Card;
