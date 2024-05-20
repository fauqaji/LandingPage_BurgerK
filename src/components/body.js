import React from "react";
import ImgOff1 from "../img/o1.webp";
import ImgOff2 from "../img/o2.webp";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { Heading2, OffText, Offer, ButtonOff } from "./StyledBody";

const Body = () => {
  const handleGamelabClick = () => {
    const menuElement = document.getElementById("menu");
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Offer id="offer">
        <>
          <div className="container ">
            <Heading2>Penawaran Spesial</Heading2>
            <div className="row">
              <div className="col-md-6">
                <div className="box">
                  <div className="img-box">
                    <img src={ImgOff1} alt="imgoff" />
                  </div>
                  <div className="detail-box">
                    <OffText>Tasty Thursdays</OffText>
                    <h3>
                      <span>20%</span> Off
                    </h3>
                    <ButtonOff onClick={handleGamelabClick}>
                      Order Now
                      <FontAwesomeIcon icon={faCartShopping} />
                    </ButtonOff>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="box">
                  <div className="img-box">
                    <img src={ImgOff2} alt="imgoff2" />
                  </div>
                  <div className="detail-box">
                    <OffText>Pizza Days</OffText>
                    <h3>
                      <span>15%</span> Off
                    </h3>
                    <ButtonOff onClick={handleGamelabClick}>
                      Order Now
                      <FontAwesomeIcon icon={faCartShopping} />
                    </ButtonOff>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </Offer>
    </>
  );
};

export default Body;
