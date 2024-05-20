import "../App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ButtonStyleDel, TestiStyle, TestiForm, ButtonSty } from "./StyledBody";
const Testi = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [inputAuthor, setInputAuthor] = useState("");
  const [inputText, setInputText] = useState("");

  const handleAuthorChange = (e) => {
    setInputAuthor(e.target.value);
  };

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const addTestimonial = () => {
    if (inputAuthor.trim() !== "" && inputText.trim() !== "") {
      const newTestimonial = {
        author: inputAuthor,
        text: inputText,
      };
      setTestimonials([...testimonials, newTestimonial]);
      setInputAuthor("");
      setInputText("");
    }
  };

  const deleteTestimonial = (index) => {
    const updatedTestimonials = testimonials.filter((_, i) => i !== index);
    setTestimonials(updatedTestimonials);
  };
  return (
    <TestiStyle id="testimoni" className="testi_section layout_padding">
      <div className="container">
        <TestiForm>
          <h1>Testimonial App</h1>
          <div className="label-f">
            <label htmlFor="nama">Nama</label>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Masukkan nama Anda..."
            value={inputAuthor}
            onChange={handleAuthorChange}
          />

          <label htmlFor="pesan">Pesan</label>
          <textarea
            className="form-control"
            placeholder="Masukkan kritik & saran..."
            value={inputText}
            onChange={handleTextChange}
          ></textarea>
          <ButtonSty onClick={addTestimonial}>Add Testimonial</ButtonSty>
        </TestiForm>

        <TestiStyle className="testimonial-list">
          {testimonials.map((testimonial, index) => (
            <div className="box" key={index}>
              <h2 className="card-title">{testimonial.author}</h2>
              <p className="card-text">{testimonial.text}</p>
              <ButtonStyleDel onClick={() => deleteTestimonial(index)}>
                Delete
              </ButtonStyleDel>
            </div>
          ))}
        </TestiStyle>
      </div>
    </TestiStyle>
  );
};
export default Testi;
