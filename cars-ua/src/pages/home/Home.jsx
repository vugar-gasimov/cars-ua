import React from "react";
import one from "../../components/images/home-one.webp";
import two from "../../components/images/home-two.webp";
import "./home.css";
const Home = () => {
  return (
    <main>
      <h1>Make your trips happen.</h1>
      <p>
        From trends to tools that’ll keep you organized in a busy travel season,
        we have what you need.
      </p>
      <div className="home--img-container">
        <div>
          <img className="home--img" src={one} alt="Line of beautiful cars" />
        </div>
        <div>
          <img className="home--img" src={two} alt="Car on a map" />
        </div>
      </div>
      <h2>Search rental cars by destination</h2>
      <p>Find Car Rentals</p>
      <p>
        Find Car Rentals Save money on rental cars by searching for car rental
        deals on CarsUa. CarsUa searches for rental car deals on hundreds of car
        rental sites to help you find the cheapest car rental. Whether you are
        looking for an airport car rental or just a cheap car rental near you,
        you can compare discount car rentals and find the best deals faster at
        CarsUa. CarsUa also compares deals for many different car types. Whether
        you’re looking for luxury car rentals, SUV rentals, van rentals, pickup
        truck rentals, convertible car rentals, cargo van rentals or minivan
        rentals, you’ll find them all on CarsUa.
      </p>
    </main>
  );
};

export default Home;
