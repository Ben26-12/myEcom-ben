import classNames from "classnames/bind";
import styles from "./About.module.scss";
import Breadcrumb from "@/components/Breadcrumb";
import config from "@/config";
import SectionIntro from "@/components/SectionIntro";

const cx = classNames.bind(styles);
function About() {
  const breadcrumbItems = [
    { label: "Home", path: config.routes.home },
    { label: "About us" }, // Chặng cuối không cần path
  ];
  const images = [
    {
      src: "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-min.jpg",
      alt: "image 1",
      desc: "Ac eget cras augue nisi neque lacinia in aliquam. Odio pellentesque sed ultrices dolor amet nunc habitasse proin consec. tur feugiat egestas eget.",
    },
    {
      src: "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-copy-2-min.jpg",
      alt: "image 2",
      desc: "Arcu volutpat sollicitudin sapien sit justo tellus eu fames aenean. Faucibus at eu nulla adipiscing. Ipsum a morbi tortor ullamcorper sit semper.",
    },
    {
      src: "https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-copy-min.jpg",
      alt: "image 3",
      desc: "Nibh luctus eu dignissim sit. Lorem netus ultrices neque elementum. Et convallis consectetur lacus luctus iaculis quisque sed.",
    },
  ];
  return (
    <div className={cx("container")}>
      <Breadcrumb items={breadcrumbItems} />
      <SectionIntro
        title="we try our best for you"
        desc="Welcome to the Marseille04 Shops"
      />
      <div className={cx("images-container")}>
        {images.map((image, index) => {
          return (
            <div key={index} className={cx("img")}>
              <img src={image.src} alt={image.alt} />
              <div className={cx("desc")}>{image.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;
