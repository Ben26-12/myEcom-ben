import styles from "./ProductItem.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function ProductItem() {
  return (
    <div className={cx("product-item")}>
      <img
        className={cx("product-img")}
        src="//xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-16.1-min-285x340.jpg"
        alt=""
      />
      <div className={cx("product-content")}>
        <h4 className={cx("product-title")}>
          <a className={cx("product-link")} href="#">
            SuperCold Coat in winter
          </a>
        </h4>
        <div className={cx("cart-attribute")}>
          <div className={cx("size")}>Size: M</div>
        </div>
        <div className={cx("product-description")}>
          <div className={cx("quantity-box")}>
            <div className={cx("quantity")}>
              7 <span>x</span>
            </div>
            <div className={cx("price")}>$20.22</div>
          </div>
          <div className={cx("stats")}>SKU: 9927392729</div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
