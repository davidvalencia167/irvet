import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router";
import { useState } from "react"; 
import logo from "../../assets/images/logo_irvet.jpeg";
import "./Navbar.css";

function Navbar () {

    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        {name: "Inicio", path: "/"},
        {name: "Servicios", path: "/servicios"},
        {name: "Promociones", path: "/promociones"},
        {name: "Contacto", path: "/contacto"}
    ];

    const isActive = (path) => { return location.pathname === path };

    return(
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="IRVET Logo" />
          </Link>

          <div className="navbar-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar-link ${isActive(link.path) ? "active" : ""}`}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:3041322283" className="navbar-phone">
              <Phone size={16} />
              <span>304 132 2283</span>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="navbar-mobile-button"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="navbar-mobile-menu">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`navbar-mobile-link ${isActive(link.path) ? "active" : ""}`}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:3041322283" className="navbar-mobile-phone">
              <Phone size={16} />
              <span>304 132 2283</span>
            </a>
          </div>
        )}
      </div>
    </nav>
    );
}

export default Navbar;