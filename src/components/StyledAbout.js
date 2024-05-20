import styled from "styled-components";
export const AboutSection = styled.section`
  background: #222831;
  color: #ffffff;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .row {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .img-box {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .img-box img {
    width: 100%;
    max-width: 250px;
    position: relative;
    z-index: 2;
  }

  .detail-box p {
    margin-top: 15px;
  }

  .detail-box a {
    display: inline-block;
    padding: 10px 45px;
    background-color: #ffbe33;
    color: #333333;
    border-radius: 45px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    border: none;
    margin-top: 15px;
    text-decoration: none;
  }

  .detail-box a:hover {
    background-color: #e69c00;
  }

  .layout_padding {
    padding: 90px 0;
  }

  .img-box {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .img-box {
    width: 100%;
    max-width: 445px;
    position: relative;
    z-index: 2;
  }
  .detail-box p {
    margin-top: 15px;
    text-align: justify;
  }

  .heading_container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  .heading_container h2 {
    position: relative;
    margin-bottom: 0;
    font-size: 2.5rem;
    font-weight: bold;
  }

  .heading_container h2 span {
    color: #ffbe33;
  }

  .heading_container p {
    margin-top: 10px;
    margin-bottom: 0;
  }

  .heading_container.heading_center {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
  }
`;
