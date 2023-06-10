import "../../Styles/LocationCard.css";
import peachland from "../../Assets/peachland.webp";

const LocationCard = ({ location }) => {
  return (
    <article className="location-card">
      <img
        className="location-img"
        src={peachland}
        alt="A lovely day showcasing the peachland welcome sign"
      />
      <div className="location-info">
        <h1 className="location-title">
          <a
            href="https://www.peachlandfarmersandcraftersmarket.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="location-title-link"
          >
            {location.name}
          </a>
        </h1>
        <div className="location-time">
          <div className="location-date">{location.time.days}</div>
          <div className="location-hours">{location.time.hours}</div>
        </div>
        <div className="location-address">
          <div>{location.location.address}</div>
          <div className="location-city">
            {location.location.city}, {location.location.province}
          </div>
        </div>
      </div>
    </article>
  );
};

export default LocationCard;
