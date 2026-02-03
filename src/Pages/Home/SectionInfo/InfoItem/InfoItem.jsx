import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../SectionInfo.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function InfoItem({ item }) {
  return (
    <div className={cx("info-item")}>
      <div className={cx("icon")}>
        <FontAwesomeIcon icon={item.icon} />
      </div>
      <div className={cx("content")}>
        <span className={cx("title")}>{item.title}</span>
        <p className={cx("desc")}>{item.desc}</p>
      </div>
    </div>
  );
}

export default InfoItem;
