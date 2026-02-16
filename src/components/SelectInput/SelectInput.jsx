import styles from "./SelectInput.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function SelectInput({
  small,
  options,
  getValue,
  type,
  defaultValue,
  className,
}) {
  return (
    <div className={cx("select-wrapper", { [className]: className })}>
      <select
        className={cx("select-input", { [className]: className, small: small })}
        onChange={(e) => getValue(e.target.value, type)}
        value={defaultValue}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      <span className={cx("arrow-input")}>
        <FontAwesomeIcon icon={faAngleDown} />
      </span>
    </div>
  );
}

export default SelectInput;
