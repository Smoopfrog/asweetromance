import "../../Styles/Locations.css";
import LocationCard from "./LocationCard";

const Locations = () => {
  return (
    <section className="locations-container">
      <h1 className="locations-title">Visit Us</h1>
      <div className="location-cards">
        <LocationCard />
        {/* <LocationCard />
        <LocationCard /> */}
      </div>
    </section>
  );
};

export default Locations;
