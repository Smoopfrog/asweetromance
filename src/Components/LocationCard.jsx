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
      <h1 className="location-title">Peachland</h1>
      <div className="location-time">
        <div className="location-date">Friday</div>
        <div className="location-hours">9am-2pm</div>
      </div>
    </article>
  );
};

export default LocationCard;
