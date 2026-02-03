import styles from "./Banner.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
import Button from "@components/Button";
function Banner({ backgroundURL, title, description, buttonTitle }) {
  return (
    <div
      className={cx("banner")}
      style={{ backgroundImage: `url(${backgroundURL})` }}
    >
      <div className={cx("content")}>
        <h1 className={cx("title")}>{title}</h1>
        <p className={cx("description")}>{description}</p>
        <Button className={cx("btn")} primary>
          {buttonTitle}
        </Button>
      </div>
    </div>
  );
}

export default Banner;
