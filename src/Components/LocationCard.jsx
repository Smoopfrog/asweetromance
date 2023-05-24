import "../Styles/LocationCard.css";
import peachland from "../Assets/peachland.webp";

const LocationCard = () => {
  return (
    <article className="location-card">
      <img
        className="location-img"
        src={peachland}
        alt="A lovely day showcasing the peachland welcome sign"
      />
      <div className="location-info">
        <h1 className="location-title">
          Peachland Farmers and Crafters Market
        </h1>
        <div className="location-time">
          <div className="location-date">Friday</div>
          <div className="location-hours">9am-2pm</div>
        </div>
        <div className="location-address">
          <div>Heritage Park, Beach Ave</div>
          <div className="location-city">Peachland, BC</div>
        </div>
      </div>
    </article>
  );
};

export default LocationCard;
