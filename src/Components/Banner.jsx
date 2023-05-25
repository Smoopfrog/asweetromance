import "../Styles/Banner.css";
import banner from "../Assets/banner.webp";

const Banner = () => {
  return (
    <div className="banner">
      <img className="banner-img" src={banner} alt="" />
    </div>
  );
};

export default Banner;
