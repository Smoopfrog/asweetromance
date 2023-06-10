import "../../Styles/Locations.css";
import LocationCard from "./LocationCard";

const locationData = [
  {
    name: "The Kelowna Farmers’ and Crafters’ Market",
    location: {
      address: "1992 Dilworth Dr",
      city: "Kelowna",
      province: "BC",
    },
    time: { days: "Wednesday, Saturday", hours: "8AM - 1PM" },
  },
  {
    name: "Peachland Farmers and Crafters Market",
    location: {
      address: "Heritage Park, Beach Ave",
      city: "Peachland",
      province: "BC",
    },
    time: {
      days: "Sunday",
      hours: "10AM - 2PM",
    },
  },
];

const Locations = () => {
  return (
    <section className="locations-container">
      <h1 className="locations-title">Visit Us</h1>
      <div className="location-cards">
        {locationData.map((location, index) => (
          <LocationCard key={index} location={location} />
        ))}
      </div>
    </section>
  );
};

export default Locations;
