import styles from "./Input.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function Input({
  required,
  className,
  label,
  type,
  name,
  error,
  touched,
  ...restProps
}) {
  let Component = "input";
  if (type === "textarea") {
    Component = "textarea";
  }
  return (
    <div className={cx("wrapper")}>
      {label && (
        <label className={cx("label")} htmlFor={name}>
          {label + `${required ? " *" : ""}`}
        </label>
      )}
      <Component
        className={cx("input", { [className]: className })}
        type={type}
        id={name}
        name={name}
        {...restProps}
      ></Component>
      {touched && error && <span className={cx("error-message")}>{error}</span>}
    </div>
  );
}

export default Input;
