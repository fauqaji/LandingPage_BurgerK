import styled from "styled-components";

export const ContactUs = styled.div`
  background-color: #222831;
  color: #ffffff;
  padding: 75px 0 40px 0;
  text-align: center;

  h4 {
    font-size: 28px;
  }

  h4,
  .footer-logo {
    font-weight: 600;
    margin-bottom: 20px;

    text-decoration: none;
    font-family: "Dancing Script", cursive;
  }

  p {
    color: #dbdbdb;
  }

  .footer-col {
    margin-bottom: 30px;
  }

  .respon-foot {
    margin: 0;
  }

  .footer_contact .contact_link_box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .footer_contact .contact_link_box a {
    margin: 5px 0;

    text-decoration: none;
    color: #ffffff;
  }

  .footer_contact .contact_link_box a i {
    margin-right: 5px;
  }

  .footer_contact .contact_link_box a:hover {
    color: #ffbe33;
  }

  .footer-logo {
    display: block;
    font-weight: bold;
    font-size: 38px;
    line-height: 1;
    color: #ffffff;
  }

  .footer_social {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .footer_social a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #222831;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-color: #ffffff;
    border-radius: 100%;
    margin: 0 2.5px;
    font-size: 18px;
  }

  .footer_social a:hover {
    color: #ffbe33;
  }

  .footer-info {
    text-align: center;
    margin-top: 25px;
  }

  .footer-info p {
    color: #ffffff;
    margin: 0;
  }

  .footer-info p a {
    color: inherit;
  }
`;
