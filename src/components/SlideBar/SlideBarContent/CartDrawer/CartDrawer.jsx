import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./CartDrawer.module.scss";
import ProductItem from "@/components/SlideBar/components/ProductItem";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import config from "@/config";
import { useContext, useEffect, useMemo, useState } from "react";
import { slideBarContext } from "@/contexts/SlideBarProvider";
import { MOCK_USER_ID } from "@/components/ProductCard/constants";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function CartDrawer() {
  const { setIsOpen, setType, listProductCart, handleGetListProductsCart } =
    useContext(slideBarContext);
  const navigate = useNavigate();

  useEffect(() => {
    handleGetListProductsCart(MOCK_USER_ID, "cart");
    setType("cart");
  }, []);

  const handleNavigate = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  const cartSubtotal = useMemo(() => {
    return listProductCart.reduce((acc, currV) => acc + currV.total, 0);
  }, [listProductCart]);

  return (
    <div className={cx("cart")}>
      <div className={cx("cart-body")}>
        {listProductCart.length <= 0 ? (
          <div className={cx("blank-cart")}>
            <div className={cx("blank-icon")}>
              <FontAwesomeIcon icon={faCartPlus} />
            </div>
            <h4 className={cx("blank-title")}>YOUR SHOPPING CART IS EMPTY</h4>
            <span className={cx("blank-content")}>
              We invite you to get acquainted with an assortment of our shop.
              Surely you can find something for yourself!
            </span>
          </div>
        ) : (
          listProductCart.map((product, index) => {
            return <ProductItem key={index} product={product} />;
          })
        )}
      </div>

      <div className={cx("cart-footer")}>
        <div className={cx("cart-calculation")}>
          <span className={cx("subtotal")}>Subtotal:</span>
          <span className={cx("cart-price")}>${cartSubtotal.toFixed(2)}</span>
        </div>
      </div>
      <div className={cx("cart-actions")}>
        <Button
          onClick={() => handleNavigate(config.routes.cart)}
          large
          className={cx("viewCart-btn")}
        >
          View cart
        </Button>
        <Button
          onClick={() => handleNavigate(config.routes.checkout)}
          large
          className={cx("checkout-btn")}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}

export default CartDrawer;
