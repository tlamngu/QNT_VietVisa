import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useResponsive } from "../Layout/ResponsiveProvider";
import axios from "axios";

Modal.setAppElement("#root");

function Form() {
  const { isMobile, globalWidth } = useResponsive();
  const [formData, setFormData] = useState({
    UserNameForm: "",
    UserEmailForm: "",
    UserTelForm: "",
    Aera: "",
    Service: "",
    ip: "",
    url: window.location.href,
  });

  const [isSending, setIsSending] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    axios.get("https://api.ipify.org?format=json")
      .then(response => {
        setFormData(prevState => ({ ...prevState, ip: response.data.ip }));
      })
      .catch(error => {
        console.error("Không thể lấy địa chỉ IP:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const postData = (data) => {
    const API = `https://script.google.com/macros/s/AKfycbwt-BRrmtgtxBEZ9b_KtsglXmGs5Ij5-qnh7Ss5Em_8zGoaPGxWxaJL29s2TwLpRKhrhw/exec`;

    fetch(`${API}?name=${data.name}&email=${data.email}&phone=${data.phone}&country=${data.country}&service=${data.service}&ip=${data.ip}&durl=${encodeURIComponent(data.url)}`, {
      method: "GET",
      followRedirects: true,
    }).catch((error) => {
      console.error("Error:", error);
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    postData({
      name: formData.UserNameForm,
      email: formData.UserEmailForm,
      phone: formData.UserTelForm,
      country: formData.Aera,
      service: formData.Service,
      ip: formData.ip,
      url: formData.url,
    });

    setTimeout(() => {
      setIsSending(false);
      setModalIsOpen(true);
    }, 3000);
  };

  return (
    <div className="FormGrid" style={{ gridTemplateColumns: isMobile ? "1fr" : "", width: isMobile ? "90%" : globalWidth < 1200 ? "80%" : "" }}>
      <div className={`centeredImageForm ${isMobile ? "mobile" : ""}`}>
        <img src="/OperaHouseCity.png" alt="Opera House City" />
      </div>
      <div className="centeredForm">
        <div className="formBounding">
          <form onSubmit={handleFormSubmit} className="InfoForm">
            <h2>FILL THE FORM TO GET MORE INFORMATION</h2>
            <input type="text" name="UserNameForm" placeholder="Full name / Họ và tên" value={formData.UserNameForm} onChange={handleInputChange} required />
            <input type="email" name="UserEmailForm" placeholder="Email" value={formData.UserEmailForm} onChange={handleInputChange} required />
            <input type="tel" name="UserTelForm" placeholder="Phone / Số điện thoại" value={formData.UserTelForm} onChange={handleInputChange} required />
            <select name="Aera" value={formData.Aera} onChange={handleInputChange} required>
              <option value="" disabled hidden>Country / Quốc gia</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Australia">Australia</option>
            </select>
            <input type="text" name="Service" placeholder="Service / Dịch vụ" value={formData.Service} onChange={handleInputChange} required />
            <input type="submit" value={isSending ? "Sending / Đang gửi" : "SEND / Gửi"} />
          </form>
        </div>
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} contentLabel="Submission Successful">
        <h2>Submitted Successfully!</h2>
        <p>Thank you! We will contact you as soon as possible.</p>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default Form;