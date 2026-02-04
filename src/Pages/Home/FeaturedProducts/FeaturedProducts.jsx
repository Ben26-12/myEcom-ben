import classNames from "classnames/bind";

import styles from "./FeaturedProducts.module.scss";
import SectionIntro from "@/components/SectionIntro";
import ProductCard from "@/components/ProductCard";
import CountDownBanner from "@/Pages/Home/CountDownBanner";

const cx = classNames.bind(styles);
import { MOCK_PRODUCTS } from "@/Service/ProductService";

function FeatureProducts() {
  return (
    <div className={cx("wrapper")}>
      <SectionIntro title="Don't miss super offer" desc="Our best products" />
      {/* Khối list product 1 */}
      <div className={cx("product-list")}>
        <CountDownBanner />
        <div className={cx("section-grid-2")}>
          {MOCK_PRODUCTS.slice(0, 2).map((item) => {
            return <ProductCard key={item.id} item={item} />;
          })}
        </div>
      </div>
      {/* Khối list product 2 */}
      <div className={cx("product-list")}>
        <div className={cx("section-grid-4")}>
          {MOCK_PRODUCTS.slice(2).map((item) => {
            return <ProductCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default FeatureProducts;
