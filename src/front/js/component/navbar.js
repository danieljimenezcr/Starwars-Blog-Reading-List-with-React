import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-dark py-3 navbar-fixed-top">
      <div className="container">
        <Link to="/">
          <img
            className="img-logo"
            src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"
          />
        </Link>
        <div className="ml-auto">
          <Link to="/planets">
            <span>
              <i className="fa-solid fa-earth-asia"></i>Planets
            </span>
          </Link>
          <Link to="/people">
            <span>
              <i className="fa-solid fa-jedi"></i>Characters
            </span>
          </Link>
          <Link to="/vehicles">
            <span>
              <i className="fa-brands fa-galactic-senate"></i>Vehicles
            </span>
          </Link>
          <Link to="/starships">
            <span>
              <i className="fa-brands fa-galactic-republic"></i>Starships
            </span>
          </Link>
            <Link to="/species">
            <span>
              <i class="fa-solid fa-book-journal-whills"></i>Species
            </span>
          </Link>
          <Link to="/films">
            <span>
              <i className="fa-solid fa-film"></i>Films
            </span>
          </Link>
          <Link to="/demo">
            <button className="btn btn-warning">Favorites</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
