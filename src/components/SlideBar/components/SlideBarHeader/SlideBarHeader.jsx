import styles from "./SlideBarHeader.module.scss";
import classNames from "classnames/bind";
import { useContext, useMemo } from "react";
import { slideBarContext } from "@/contexts/SlideBarProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const cx = classNames.bind(styles);
import { HEADER_ACTIONS } from "@/components/Header/Constants";
function SlideBarHeader() {
  const { type } = useContext(slideBarContext);
  const headerData = useMemo(() => {
    return HEADER_ACTIONS.find((item) => item.type == type);
  }, [type]);

  return (
    <div className={cx("slider-header")}>
      <div className={cx("header-content")}>
        <div className={cx("header-icon")}>
          <FontAwesomeIcon icon={headerData.icon} />
        </div>
        <div className={cx("header-title")}>
          {headerData.type.toUpperCase()}
        </div>
      </div>
    </div>
  );
}

export default SlideBarHeader;
