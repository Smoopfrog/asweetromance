import cake from "../../Assets/cheesecake.png";
import "../../Styles/ProductBanner.css";

const ProductBanner = () => {
  return (
    <div className="product-banner">
      <img className="product-banner-img" src={cake} alt="Delicious strawberry cheesecake" />
      <div className="product-banner-article">
        <p className="product-banner-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button className="product-banner-btn">Shop Cakes</button>
      </div>
    </div>
  );
};

export default ProductBanner;
