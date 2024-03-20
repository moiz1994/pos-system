import Button from "react-bootstrap/Button";
import IconInput from "../IconInput";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { ImAttachment } from "react-icons/im";
import { useState } from "react";
import axios from "axios";

const CompanyRegister = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:80/pos-system/company/save", inputs);
  };

  return (
    <>
      <h2 className="text-center">Company Setup</h2>
      <form onSubmit={handleSubmit}>
        <IconInput
          inputType="text"
          placeholder="Enter Company name"
          icon={FaHome}
          label="Company Name"
          onChange={handleChange}
          name="name"
        />

        <IconInput
          inputType="number"
          placeholder="Enter Mobile No"
          icon={FaPhoneAlt}
          label="Mobile No"
          onChange={handleChange}
          name="phone"
        />

        <IconInput
          inputType="email"
          placeholder="Enter Email Address"
          icon={MdEmail}
          label="Email Address"
          onChange={handleChange}
          name="email"
        />

        <IconInput
          inputType="text"
          placeholder="Enter Location"
          icon={FaLocationDot}
          label="Location"
          onChange={handleChange}
          name="location"
        />

        <IconInput
          inputType="file"
          icon={ImAttachment}
          label="Choose Company Logo"
          onChange={handleChange}
          name="logo"
        />

        <div className="d-grid">
          <Button variant="dark" type="submit">
            Submit & Continue
          </Button>
        </div>
      </form>
    </>
  );
};

export default CompanyRegister;
