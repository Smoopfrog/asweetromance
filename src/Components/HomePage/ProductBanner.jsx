import cake from "../../Assets/cheesecake.png";
import "../../Styles/ProductBanner.css";

const ProductBanner = () => {
  return (
    <div className="product-banner">
      <img className="product-banner-img" src={cake} alt="Delicious strawberry cheesecake" />
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>Shop Cakes</button>
      </div>
    </div>
  );
};

export default ProductBanner;
