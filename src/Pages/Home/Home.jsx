import classNames from "classnames/bind";

import Banner from "@/components/Banner";
import styles from "./Home.module.scss";
import SectionInfo from "@/Pages/Home/SectionInfo";
import images from "@/assets/Images";

const cx = classNames.bind(styles);
function Home() {
  return (
    <div className={cx("wrapper")}>
      {/* Banner */}
      <Banner
        backgroundURL={images.banner}
        title="Let's take a little trip"
        description="Make yours celebrations even more special this years with beautiful."
        buttonTitle="Go to shop"
      />
      {/* section infomation */}
      <SectionInfo />
    </div>
  );
}

export default Home;
