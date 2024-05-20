import styled from "styled-components";

export const HeaderAR = styled.section`
  position: relative;
  min-height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  .bg-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .bg-box img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }

  .sub_page .hero_area {
    min-height: auto;
  }

  .sub_page .hero_area .bg-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .sub_page .hero_area .bg-box img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: right top;
    object-position: right top;
  }

  .header_section {
    padding: 15px 0;
  }
  .container-fluid {
    padding-right: 25px;
    padding-left: 25px;
  }
  .navbar-brand {
    font-family: "Dancing Script", cursive;
  }

  .imgNav {
    width: 80px;
    height: 80px;
  }

  .navbar-brand span {
    font-weight: bold;
    font-size: 32px;
    color: #ffffff;
  }

  .custom_nav-container {
    padding: 0;
  }

  .custom_nav-container .navbar-nav {
    padding-left: 18%;
  }

  .custom_nav-container .navbar-nav .nav-item .nav-link {
    padding: 5px 20px;
    color: #ffffff;
    text-align: center;
    text-transform: uppercase;
    border-radius: 5px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  .custom_nav-container .navbar-nav .nav-item:hover .nav-link,
  .custom_nav-container .navbar-nav .nav-item.active .nav-link {
    color: #ffbe33;
  }

  .custom_nav-container .nav_search-btn {
    width: auto;
    height: auto;
    padding: 0;
    border: none;
    color: #ffffff;
    margin: 0 10px;
  }

  .custom_nav-container .nav_search-btn:hover {
    color: #ffbe33;
  }
  .custom_nav-container .navbar-toggler {
    outline: none;
  }

  .custom_nav-container .navbar-toggler {
    padding: 0;
    width: 37px;
    height: 42px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  .custom_nav-container .navbar-toggler span {
    display: block;
    width: 35px;
    height: 4px;
    background-color: #ffffff;
    margin: 7px 0;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    position: relative;
    border-radius: 5px;
    transition: all 0.3s;
  }

  .custom_nav-container .navbar-toggler span::before,
  .custom_nav-container .navbar-toggler span::after {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #ffffff;
    top: -10px;
    border-radius: 5px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  .custom_nav-container .navbar-toggler span::after {
    top: 10px;
  }

  .custom_nav-container .navbar-toggler[aria-expanded="true"] {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }

  .custom_nav-container .navbar-toggler[aria-expanded="true"] span {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .custom_nav-container .navbar-toggler[aria-expanded="true"] span::before,
  .custom_nav-container .navbar-toggler[aria-expanded="true"] span::after {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    top: 0;
  }
  .user_option {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .user_option a {
    margin: 0 10px;
  }

  .user_option .user_link {
    color: #ffffff;
  }

  .user_option .user_link:hover {
    color: #ffbe33;
  }

  .user_option .ct_nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .user_option .ct_nav {
    width: 17px;
    height: auto;
    fill: #ffffff;
    color: #ffffff;
    margin-bottom: 2px;
  }

  .user_option .ct_nav:hover {
    fill: #ffbe33;
  }
  .orderNow {
    padding: 8px 30px;
    background-color: #f3a600;
    color: #333333;
    border-radius: 45px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    border: none;
  }
  .user_option .order_online {
    display: inline-block;
    padding: 8px 30px;
    background-color: #f3a600;
    color: #333333;
    border-radius: 45px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    border: none;
  }

  .user_option .order_online:hover {
    background-color: #e69c00;
  }
  .slider_section {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    padding: 45px 0 75px 0;
  }
  .slider_section .row {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .slider_section #customCarousel1 {
    width: 100%;
    position: unset;
  }

  .slider_section .detail-box {
    color: #ffffff;
    margin-bottom: 145px;
  }

  .slider_section .detail-box h1 {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .slider_section .detail-box p {
    font-size: 1.2rem;
  }

  .slider_section .detail-box a {
    display: inline-block;
    padding: 10px 45px;
    background-color: #ffbe33;
    color: #ffffff;
    border-radius: 45px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    border: none;
    text-decoration: none;
    margin-top: 10px;
  }

  .slider_section .detail-box a:hover {
    background-color: #e69c00;
  }

  .slider_section .img-box img {
    width: 100%;
  }

  .slider_section .carousel-indicators {
    position: unset;
    margin: 0;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .slider_section .carousel-indicators li {
    background-color: #ffffff;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    opacity: 1;
    list-style: none;
  }

  .slider_section .carousel-indicators li.active {
    width: 20px;
    height: 20px;
    background-color: #ffbe33;
  }
`;

export const ButtonNav = styled.button`
  background-color: #f3a600;
  padding: 7px 33px;
  color: #ffffff;
  border-radius: 45px;
  border: none;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #e69c00;
  }
`;
