import classNames from "classnames/bind";

import styles from "./CountDownBanner.module.scss";
import images from "@/assets/Images";
import CountDownTimer from "@/components/CountDownTimer";
import Button from "@components/Button";
const cx = classNames.bind(styles);
function CountDownBanner() {
  return (
    <div
      className={cx("countdown-wrapper")}
      style={{ backgroundImage: `url(${images.countDownImage})` }}
    >
      <div className={cx("timmer-wrapper")}>
        <CountDownTimer />
      </div>
      <div className={cx("content")}>
        <div className={cx("title")}>The classics make a comeback</div>
        <Button primary className={cx("btn")}>
          Buy now
        </Button>
      </div>
    </div>
  );
}

export default CountDownBanner;
