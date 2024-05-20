import "../App.css";
import React, { useState, useEffect, useRef } from "react";
import Isotope from "isotope-layout";

import Dpizza from "../img/f1.webp";
import Dburger from "../img/f2.webp";
import DpizzaDaun from "../img/f3.webp";
import Dpasta from "../img/f4.webp";
import FFries from "../img/f5.webp";
import Tburger from "../img/f7.webp";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FoodSection, FoodHeading, FoodText } from "./StyledFood";

const Food = () => {
  const [activeFilter, setActiveFilter] = useState("*");
  const $grid = useRef(null);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    $grid.current.arrange({
      filter: filter,
    });
  };

  useEffect(() => {
    $grid.current = new Isotope(".grid", {
      itemSelector: ".all",
      percentPosition: false,
      masonry: {
        columnWidth: ".all",
      },
    });

    window.$(".filters_menu li").on("click", function () {
      window.$(".filters_menu li").removeClass("active");
      window.$(this).addClass("active");

      const data = window.$(this).attr("data-filter");
      handleFilterClick(data);
    });

    return () => {
      window.$(".filters_menu li").off("click");
    };
  }, []);
  return (
    <FoodSection id="menu">
      <div className="food_section layout_padding-bottom">
        <div className="container">
          <FoodText>
            <FoodHeading>Menu</FoodHeading>

            <ul className="filters_menu">
              <li
                className={activeFilter === "*" ? "active" : ""}
                data-filter="*"
                onClick={() => handleFilterClick("*")}
              >
                All
              </li>
              <li
                className={activeFilter === ".burger" ? "active" : ""}
                data-filter=".burger"
                onClick={() => handleFilterClick(".burger")}
              >
                Burger
              </li>
              <li
                className={activeFilter === ".pizza" ? "active" : ""}
                data-filter=".pizza"
                onClick={() => handleFilterClick(".pizza")}
              >
                Pizza
              </li>
              <li
                className={activeFilter === ".pasta" ? "active" : ""}
                data-filter=".pasta"
                onClick={() => handleFilterClick(".pasta")}
              >
                Pasta
              </li>
              <li
                className={activeFilter === ".fries" ? "active" : ""}
                data-filter=".fries"
                onClick={() => handleFilterClick(".fries")}
              >
                Fries
              </li>
            </ul>

            <div>
              <div className="row grid">
                <div className="col-sm-6 col-lg-4  all pizza">
                  <div className="box">
                    <div>
                      <div className="img-box">
                        <img src={Dpizza} alt="imgoff2" />
                      </div>
                      <div className="detail-box">
                        <h2>Meaty One</h2>
                        <p>
                          Pizza Meaty One, paduan sempurna daging pepperoni,
                          ham, sausage, dan bacon dengan saus tomat dan keju.
                        </p>
                        <div className="options">
                          <h3>Rp. 80.000</h3>
                          <a
                            href="#menu"
                            aria-label="Menu"
                            className="icn-food"
                          >
                            <FontAwesomeIcon icon={faUtensils} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4  all burger">
                  <div className="box">
                    <div>
                      <div className="img-box">
                        <img src={Dburger} alt="imgoff3" />
                      </div>
                      <div className="detail-box">
                        <h2>Mister Cheese</h2>
                        <p>
                          Burger lezat dengan daging, keju, saus spesial,
                          sayuran segar, di dalam roti empuk. Daging tebal
                          membuat burger menjadi lezat.
                        </p>
                        <div className="options">
                          <h3>Rp. 25.000</h3>
                          <a
                            href="#menu"
                            aria-label="Menu"
                            className="icn-food"
                          >
                            <FontAwesomeIcon icon={faUtensils} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4 all pizza">
                  <div className="box">
                    <div>
                      <div className="img-box">
                        <img src={DpizzaDaun} alt="imgoff4" />
                      </div>
                      <div className="detail-box">
                        <h2>All Season Veggie</h2>
                        <p>
                          Pizza All Season Veggie, kombinasi segar sayuran
                          musiman seperti paprika, jamur, bawang, dan jagung
                          manis.
                        </p>
                        <div className="options">
                          <h3>Rp. 100.000</h3>
                          <a
                            href="#menu"
                            aria-label="Menu"
                            className="icn-food"
                          >
                            <FontAwesomeIcon icon={faUtensils} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4  all fries">
                  <div className="box">
                    <div>
                      <div className="img-box">
                        <img src={FFries} alt="imgoff5" />
                      </div>
                      <div className="detail-box">
                        <h2>French Fries</h2>
                        <p>
                          irisan kentang digoreng garing, dapat memilih bumbu
                          kesukaan Anda. Dengan kentang kualitas makanan menjadi
                          nikmat.
                        </p>
                        <div className="options">
                          <h3>Rp. 19.000</h3>
                          <a
                            href="#menu"
                            aria-label="Menu"
                            className="icn-food"
                          >
                            <FontAwesomeIcon icon={faUtensils} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4  all pasta">
                  <div className="box">
                    <div>
                      <div className="img-box">
                        <img src={Dpasta} alt="imgoff6" />
                      </div>
                      <div className="detail-box">
                        <h2>Alle Vongole Pasta</h2>
                        <p>
                          pasta al dente dengan saus putih, kerang segar, bawang
                          putih, jamur, marconi dan rempah Italia.
                        </p>
                        <div className="options">
                          <h3>Rp. 35.000</h3>
                          <a
                            href="#menu"
                            aria-label="Menu"
                            className="icn-food"
                          >
                            <FontAwesomeIcon icon={faUtensils} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4  all burger">
                  <div className="box">
                    <div>
                      <div className="img-box">
                        <img src={Tburger} alt="imgoff7" />
                      </div>
                      <div className="detail-box">
                        <h2>Mister Angry Burger</h2>
                        <p>
                          Roti, daging ayam fillet super pedas, mayonaisse,
                          selada, saos sambal saos tomat. Membuat lidah pedas
                        </p>
                        <div className="options">
                          <h3>Rp. 28.000</h3>
                          <a
                            href="#menu"
                            aria-label="Menu"
                            className="icn-food"
                          >
                            <FontAwesomeIcon icon={faUtensils} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FoodText>
        </div>
      </div>
    </FoodSection>
  );
};
export default Food;
