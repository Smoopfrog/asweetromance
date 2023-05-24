import "../Styles/Locations.css";
import LocationCard from "./LocationCard";

const Locations = () => {
  return (
    <sectio className="locations-container">
      <h1 className="locations-title">Our Locations</h1>
      <div className="location-cards">
        <LocationCard />
        <LocationCard />
        <LocationCard />
      </div>
    </sectio>
  );
};

export default Locations;
