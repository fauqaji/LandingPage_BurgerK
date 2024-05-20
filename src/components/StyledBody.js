import styled from "styled-components";
import BgBenner from "../img/hero-bg.webp";

// Benner
export const BennerStyle = styled.section`
  width: auto;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-image: url(${BgBenner});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 45px 0 75px 120px;
`;

export const ButtonSty = styled.button`
  padding: 12px 40px;
  border-radius: 0.3rem;
  background: #f3ca52;
  color: #333333;
  font-weight: 500;
  border: 1px solid;
  border-color: #f3ca52;

  &:hover {
    cursor: pointer;
    background: #f5ebeb;
    color: #e69c00;
    border-color: #f3ca52;
  }
`;
export const ButtonStyleDel = styled.button`
  padding: 12px 40px;
  border-radius: 0.3rem;
  background: #f3ca52;
  color: #333333;
  font-weight: 500;
  border: 1px solid;
  border-color: #f3ca52;

  &:hover {
    cursor: pointer;
    background: #f5ebeb;
    color: #e69c00;
    border-color: #f3ca52;
  }
`;

export const BennerText = styled.div`
  text-align: start;
`;
export const TextHB = styled.h1`
  font-size: 3.4rem;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 2px 5px 5px #f3ca52;
  margin: 0;
  padding-bottom: 35px;
`;
export const TextPB = styled.p`
  font-size: 1rem;
  color: #ffffff;
  text-transform: lowercase;
  letter-spacing: 1px;
  word-wrap: break-word;
  width: 35rem;
  text-align: justify;

  padding-bottom: 25px;
`;

export const BennerImg = styled.div`
  font-size: 3.4rem;
  color: #3887be;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

// About
export const AboutSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, auto));
  align-items: center;
  gap: 1.5rem;
  padding: 0 100px;
  margin-top: 17px;
`;

export const AboutImg = styled.div`
  border-radius: 0.5rem;
`;

export const AboutHeading = styled.h2`
  font-size: 2rem;
  margin: 1rem 0 1.1rem;
  text-align: center;
`;

export const AboutText = styled.div`
  font-size: 0.938rem;
  margin: 0.5rem 0 1.1rem;
`;

// Testimoni
export const TestiStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, auto));
  gap: 1.5rem;
  margin-top: 2rem;
  padding: 22px 30px;

  label {
    padding-bottom: 10px;
    color: #e69c00;
  }

  .testi_section .heading_container {
    margin-bottom: 25px;
  }

  .testi_section .form_container .form-control {
    width: 100%;
    border: none;
    height: 50px;
    margin-bottom: 25px;
    padding-left: 25px;
    border: 1px solid #999;
    outline: none;
    color: #000000;
    border-radius: 5px;
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .testi_section .form_container .form-control::-webkit-input-placeholder {
    color: #222222;
  }

  .testi_section .form_container .form-control:-ms-input-placeholder {
    color: #222222;
  }

  .testi_section .form_container .form-control::-ms-input-placeholder {
    color: #222222;
  }

  .testi_section .form_container .form-control::placeholder {
    color: #222222;
  }

  .testi_section .form_container .nice-select .current {
    font-size: 16px;
  }

  .testi_section .form_container button {
    margin-top: 15px;
    border: none;
    text-transform: uppercase;
    display: inline-block;
    padding: 10px 55px;
    background-color: #ffbe33;
    color: #ffffff;
    border-radius: 45px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    border: none;
  }

  .testi_section .form_container button:hover {
    background-color: #e69c00;
  }

  .testi_section .map_container {
    width: 100%;
    height: 345px;
    border-radius: 10px;
    overflow: hidden;
  }

  .testi_section .map_container #googleMap {
    height: 100%;
    min-height: 100%;
    width: 100%;
  }
  .box {
    padding: 20px;
    border-radius: 0.5rem;
    text-align: center;
    background: #222831;

    p {
      font-size: 0.938rem;
      color: #f6e9b2;
    }

    h2 {
      font-size: 1.2rem;
      font-weight: 600;
      margin: 0.5rem 0 0.5rem;
      color: #f3ca52;
    }
  }
`;

export const TestiForm = styled.div`
  width: auto;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    margin-bottom: 10px;
  }

  input[type="text"],
  textarea {
    width: 100%;
    padding: 5px;
    margin-bottom: 10px;
    @media (min-width: 768px) {
      width: 40%;
    }
  }

  input[type="submit"] {
    background-color: #4d869c;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    margin: 0 auto;
  }
`;

// offer

export const Offer = styled.section`
  position: relative;
  padding-top: 45px;

  .box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 45px;
    border-radius: 5px;
    padding: 20px 15px;
    background-color: #222831;
    color: #ffffff;
  }

  .box .img-box {
    width: 175px;
    min-width: 175px;
    height: 175px;
    margin-right: 15px;
    position: relative;
    -webkit-transition: all 0.1s 0.5s;
    transition: all 0.1s 0.5s;
    border-radius: 100%;
    border: 5px solid #ffbe33;
    overflow: hidden;

    img {
      width: 100%;
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
    }
  }

  .box .detail-box h5 {
    font-family: "Dancing Script", cursive;
    font-size: 24px;
    margin: 0;
  }

  .box .detail-box h6 {
    font-family: "Dancing Script", cursive;
    margin: 10px 0;

    span {
      font-size: 2.5rem;
      font-weight: bold;
    }
  }

  .box .detail-box a {
    display: inline-block;
    padding: 10px 30px;
    background-color: #ffbe33;
    color: #ffffff;
    border-radius: 45px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    border: none;

    &:hover {
      background-color: #e69c00;
    }

    svg {
      width: 20px;
      height: auto;
      margin-left: 5px;
      fill: #ffffff;
    }
  }

  .box:hover .img-box img {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  .layout_padding-bottom {
    padding-bottom: 90px;
  }
`;
export const OffText = styled.h2`
  font-size: 26px;
  color: #333;
  margin: 0;
  color: #ffffff;
`;
export const ButtonOff = styled.button`
  background-color: #f3a600;
  padding: 7px 33px;
  color: #333333;
  border-radius: 45px;
  border: none;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #e69c00;
  }
`;
export const Heading2 = styled.h2`
  font-size: 2rem;
  margin: 1rem 0 1.1rem;
  text-align: center;
`;
