import styles from "./SectionInfo.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
import { SERVICNES_INFO } from "@/Pages/Home/SectionInfo/constants";
import InfoItem from "@/Pages/Home/SectionInfo/InfoItem";
function SectionInfo() {
  return (
    <div className={cx("wrapper")}>
      {SERVICNES_INFO.map((item, index) => {
        return <InfoItem key={index} item={item} />;
      })}
    </div>
  );
}

export default SectionInfo;
