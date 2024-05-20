import React from "react";
import "../App.css";
import { AboutSection } from "./StyledAbout";
import "bootstrap/dist/css/bootstrap.min.css";

import Aimg from "../img/about-img.webp";
const About = () => {
  return (
    <AboutSection id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="img-box">
              <img src={Aimg} alt="AboutImg" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>Burger K</h2>
              </div>
              <p>
                Restoran Burger K adalah salah satu restoran ikonik yang
                terkenal dengan menu burger berkualitas tinggi dan pelayanan
                yang ramah. Restoran ini didirikan pada tahun 1995 oleh dua
                saudara kembar, yang memiliki visi untuk menyajikan burger yang
                lezat dengan harga terjangkau. Dengan dedikasi dan kerja keras,
                restoran ini cepat menjadi favorit di kalangan warga setempat
                dan wisatawan. Restoran Burger K terletak di pusat kota yang
                ramai, menarik pelanggan dengan aroma menggoda burger mereka
                yang terkenal. Aroma makanan yang lezat dari Dapur kami
                memperlihatkan keahlian para koki dalam memanggang daging sapi
                segar dan menggoreng kentang goreng yang renyah, dan makanan
                lainnya.
              </p>
              <a className="a-about" href="#about">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </AboutSection>
  );
};

export default About;
