import React, { useState } from "react";
import { useResponsive } from "../Layout/ResponsiveProvider";

function Form() {
  const { isMobile, globalWidth } = useResponsive();
  const [formData, setFormData] = useState({
    UserNameForm: "",
    UserEmailForm: "",
    UserTelForm: "",
    Aera: "",
    Service: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const postData = (data)=>{
    // const myHeaders = new Headers();
    const API = `https://script.google.com/macros/s/AKfycbzggVMjcgZe2CVSJwlr_ZpRONJhCbKnzLTiwWGj0FdgGdcOqcdNmB4CDEPmzVH-wBI/exec`
    // Example fetch request
fetch(`${API}?name=${data.name}&email=${data.email}&phone=${data.phone}&country=${data.country}&service=${data.service}`, {
  method: 'GET',
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    postData(
      {
        name: formData.UserNameForm,
        email: formData.UserEmailForm,
        phone: formData.UserTelForm,
        country: formData.Aera,
        service: formData.Service
      }
    )
  };

  return (
    <div
      className="FormGrid"
      style={{
        gridTemplateColumns: isMobile ? "1fr" : "",
        width: isMobile ? "90%" : globalWidth < 1200 ? "80%" : "",
      }}
    >
      <div className={`centeredImageForm ${(isMobile ? "mobile": "")}`}>
        <img src="/OperaHouseCity.png" alt="Opera House City" />
      </div>
      <div className="centeredForm">
        <div className="formBounding">
          <form
            onSubmit={handleFormSubmit}
            className="InfoForm"
          >
            <h2>FILL THE FORM TO GET MORE INFORMATION</h2>
            <input
              type="text"
              style={{ marginTop: "0" }}
              name="UserNameForm"
              id="Username"
              placeholder="Full name / Họ và tên"
              value={formData.UserNameForm}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="UserEmailForm"
              id="UserEmail"
              placeholder="Email"
              value={formData.UserEmailForm}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              name="UserTelForm"
              id="UserTelForm"
              placeholder="Phone / Số điện thoại"
              value={formData.UserTelForm}
              onChange={handleInputChange}
              required
            />
            <select
              name="Aera"
              id="Aera"
              value={formData.Aera}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                Country / Quốc gia
              </option>
              <option value="Vietnam">Vietnam</option>
              <option value="Australia">Australia</option>
            </select>
            <input
              type="text"
              name="Service"
              id="Service"
              placeholder="Service / Dịch vụ"
              value={formData.Service}
              onChange={handleInputChange}
              required
            />
            <input type="submit" value="SEND / Gửi" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;