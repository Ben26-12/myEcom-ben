import classNames from "classnames/bind";

import styles from "./WishList.module.scss";
import ProductItem from "@/components/SlideBar/components/ProductItem";
import Button from "@/components/Button";
const cx = classNames.bind(styles);
function WishList() {
  return (
    <div className={cx("wishList")}>
      <div className={cx("wishList-body")}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>

      <div className={cx("wishList-footer")}>
        <div className={cx("wishList-actions")}>
          <Button href="#" large className={cx("viewWishList-btn")}>
            View wishlist
          </Button>
          <Button href="#" large className={cx("addAll-btn")}>
            Add all to cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default WishList;
