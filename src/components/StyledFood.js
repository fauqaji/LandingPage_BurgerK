import styled from "styled-components";

// Food section

export const FoodSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, auto));
  align-items: center;
  gap: 1.5rem;
  padding: 0 16px;
  margin-top: 17px;

  .filters_menu {
    padding: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    list-style-type: none;
    margin: 45px 0 20px 0;
  }

  .filters_menu li {
    padding: 7px 25px;
    cursor: pointer;
    border-radius: 25px;
  }

  .food_section .filters_menu li.active {
    background-color: #222831;
    color: #ffffff;
  }

  .food_section .box {
    position: relative;
    margin-top: 25px;
    background-color: #ffffff;
    border-radius: 10px;
    color: #ffffff;
    border-radius: 15px;
    overflow: hidden;
    background: linear-gradient(to bottom, #f1f2f3 25px, #222831 25px);
  }

  .food_section .box .img-box {
    background: #f1f2f3;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 215px;
    border-radius: 0 0 0 45px;
    margin: -1px;
    padding: 25px;
  }

  .food_section .box .img-box img {
    max-width: 100%;
    max-height: 125px;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }

  .food_section .box .detail-box {
    padding: 25px;
  }

  .food_section .box .detail-box h5 {
    font-weight: 600;
  }

  .food_section .box .detail-box p {
    font-size: 15px;
  }

  .food_section .box .detail-box h6 {
    margin-top: 10px;
  }

  .food_section .box .options {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .food_section .box .options a {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: #ffbe33;
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

  .food_section .box .options a svg {
    width: 18px;
    height: auto;
    fill: #ffffff;
  }

  .icn-food {
    width: 18px;
    height: auto;
    fill: #ffffff;
    color: #333333;
    text-decoration: none;
  }

  .food_section .box:hover .img-box img {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  .box {
    padding: 25px 1px;
    margin: 1px 16px;
  }
  .food_section .btn-box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: 45px;
  }

  .food_section .btn-box a {
    display: inline-block;
    padding: 10px 55px;
    background-color: #ffbe33;
    color: #ffffff;
    border-radius: 45px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    border: none;
  }

  .food_section .btn-box a:hover {
    background-color: #e69c00;
  }

  .layout_padding-bottom {
    padding-bottom: 90px;
  }
`;
export const FoodHeading = styled.h2`
  font-size: 2rem;
  margin: 1rem 0 1.1rem;
  text-align: center;
`;

export const FoodText = styled.div`
  font-size: 0.938rem;
  margin: 0.5rem 0 1.1rem;
`;
