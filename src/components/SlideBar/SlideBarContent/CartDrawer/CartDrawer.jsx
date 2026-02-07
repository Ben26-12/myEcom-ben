import classNames from "classnames/bind";

import styles from "./CartDrawer.module.scss";
import ProductItem from "@/components/SlideBar/components/ProductItem";
import Button from "@/components/Button";
const cx = classNames.bind(styles);
function CartDrawer() {
  return (
    <div className={cx("cart")}>
      <div className={cx("cart-body")}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>

      <div className={cx("cart-footer")}>
        <div className={cx("cart-calculation")}>
          <span className={cx("subtotal")}>Subtotal:</span>
          <span className={cx("cart-price")}>$239</span>
        </div>
      </div>
      <div className={cx("cart-actions")}>
        <Button href="#" large className={cx("viewCart-btn")}>
          View cart
        </Button>
        <Button href="#" large className={cx("checkout-btn")}>
          Checkout
        </Button>
      </div>
    </div>
  );
}

export default CartDrawer;
