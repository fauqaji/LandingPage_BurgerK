import "../App.css";
import React from "react";
import { HeaderAR } from "./StyledHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import ImgNav from "../img/b-burger.webp";
import ImgHero from "../img/hero-bg.webp";
const Header = () => {
  const handleGamelabClick = () => {
    const menuElement = document.getElementById("menu");
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <HeaderAR id="head">
      <div className="bg-box">
        <img src={ImgHero} alt="ImgHero"></img>
      </div>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="#head">
              <img className="imgNav" src={ImgNav} alt="ImgNav"></img>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#head">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#offer">
                    Offer
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#menu">
                    Menu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#testimoni">
                    Testimoni
                  </a>
                </li>
              </ul>
              <div className="user_option">
                <a className="ct_nav" href="#head" aria-label="Cart">
                  <FontAwesomeIcon icon={faCartShopping} />
                </a>

                <button className="order_online" onClick={handleGamelabClick}>
                  Order Online
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div className="slider_section" id="slider">
        <div
          id="customCarousel1"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-7 col-lg-6">
                    <div className="detail-box">
                      <h1>Restoran Cepat Saji</h1>
                      <p>
                        Selamat datang di restoran cepat saji kami! Kami adalah
                        restoran yang menawarkan berbagai hidangan lezat dan
                        praktis untuk memenuhi kebutuhan makanan cepat saji
                        Anda.
                      </p>
                      <div className="btn-box">
                        <button
                          className="orderNow"
                          onClick={handleGamelabClick}
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <ol className="carousel-indicators">
              <li
                data-target="#customCarousel1"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#customCarousel1" data-slide-to="1"></li>
            </ol>
          </div>
        </div>
      </div>
    </HeaderAR>
  );
};

export default Header;
