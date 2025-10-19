import { useState } from "react";
import SubTitle from "@components/subTitle/SubTitle";
import EnhancedInput from "@components/FormUI/EnhancedInput";
import EnhancedTextarea from "@components/FormUI/EnhancedTextarea";

import Button from "@components/button/Button";
import styles from "./orderform.module.scss";
import { apiClient } from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { toast, ToastContainer } from "react-toastify";
import { ErrorFormatter } from "@utils/helpers";

const OrderForm = ({  onSuccess }) => {
  const [loading, setLoading] = useState(false);

  const [formDetails, setFormDetails] = useState({
    fullName: "",
    email: "",
    address: "",
    phone: "",
    message: "",
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
   
    try {
      await apiClient.post(endpoints.sendMessage, formDetails);

      toast.success("Message Sent");

      setFormDetails({
        fullName: "",
        email: "",
        address: "",
        phone: "",
        choice: "",
        message: "",
      });

       if (onSuccess) {
        setTimeout(onSuccess, 3000);
      }

    } catch (error) {
      toast.error(ErrorFormatter(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer />
      <SubTitle className={styles.title}>Get In Touch</SubTitle>
      <div className={styles.formContent}>
        <div className={styles.inputContainer}>
          <EnhancedInput
            onChange={handleOnchange}
            name="fullName"
            value={formDetails.fullName}
            label="Full Name"
            required
          />
          <EnhancedInput
            onChange={handleOnchange}
            label="Email"
            name="email"
            type="email"
            value={formDetails.email}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <EnhancedInput
            onChange={handleOnchange}
            label="Address"
            name="address"
            value={formDetails.address}
          />
          <EnhancedInput
            onChange={handleOnchange}
            label="Phone"
            name="phone"
            value={formDetails.phone}
            required
          />
        </div>

    
        <EnhancedTextarea
          onChange={handleOnchange}
          name="message"
          value={formDetails.message}
          label="More Details"
          placeholder="Tell us about what you want"
        />
        <Button type="submit">
          {loading ? "Please Wait.. " : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default OrderForm;
