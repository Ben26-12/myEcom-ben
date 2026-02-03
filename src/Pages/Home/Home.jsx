import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import Banner from "@/components/Banner";
const cx = classNames.bind(styles);
import images from "@/assets/Images";

function Home() {
  return (
    <div className={cx("wrapper")}>
      <Banner
        backgroundURL={images.banner}
        title="Let's take a little trip"
        description="Make yours celebrations even more special this years with beautiful."
        buttonTitle="Go to shop"
      />
    </div>
  );
}

export default Home;
