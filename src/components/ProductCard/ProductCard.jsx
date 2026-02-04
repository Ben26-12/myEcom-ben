import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./ProductCard.module.scss";
import Button from "@/components/Button";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
const cx = classNames.bind(styles);

function ProductCard({ item }) {
  return (
    <div className={cx("product-card")}>
      {/* img container  */}
      <div className={cx("img-container")}>
        <img className={cx("main-img")} src={item.images[0]} alt="Product" />
        <img className={cx("hover-img")} src={item.images[1]} alt="Product" />

        <div className={cx("actions")}>
          <Button className={cx("action-btn")}>
            <FontAwesomeIcon icon={faCartShopping} />
          </Button>
          <Button className={cx("action-btn")}>
            <FontAwesomeIcon icon={faHeart} />
          </Button>
          <Button className={cx("action-btn")}>
            <FontAwesomeIcon icon={faEye} />
          </Button>
        </div>
      </div>
      {/* card information */}
      <div className={cx("card-information")}>
        <div className={cx("card-title")}>{item.title}</div>
        <div className={cx("price")}>
          {typeof item.price == "object"
            ? `$${item.price.min} - $${item.price.max}`
            : item.price}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
