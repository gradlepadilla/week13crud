import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h2> Navbar </h2>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
           <button> Home </button>
          </li>
          <li className="nav-item">
            <button> About Use </button>
          </li>
          <li className="nav-item">
          <button> Contact Us </button>
          </li>
        </ul>
        </div>
    </nav>
  );
};

export default Navbar;