import "../App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ContactUs } from "./StyledContact";

const Contact = () => {
  return (
    <ContactUs id="contact">
      <div className="row respon-foot">
        <div className="col-md-4 footer-col">
          <div className="footer_contact">
            <h2>Kontak Kami</h2>
            <div className="contact_link_box">
              <a href="#contact">
                <span>Lokasi Saya</span>
              </a>
              <a href="#contact">
                <span>Telepon +62821294901000</span>
              </a>
              <a href="#contact">
                <span>burgerK@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 footer-col">
          <div className="footer_detail">
            <a href="#contact" className="footer-logo">
              Burger K
            </a>
            <p>
              Jika Anda ingin mengetahui informasi mengenai resto kami lebih
              lanjut, silakan hubungi kami, tersedia kontak kami di bawah
            </p>
            <div className="footer_social"></div>
          </div>
        </div>
        <div className="col-md-4 footer-col">
          <h2>Jam Buka</h2>
          <p>Setiap hari</p>
          <p>10.00 - 22.00 </p>
        </div>
      </div>
    </ContactUs>
  );
};
export default Contact;
