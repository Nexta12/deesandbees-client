
import { useState } from "react";
import SubTitle from "@components/subTitle/SubTitle";
import EnhancedInput from "@components/FormUI/EnhancedInput";
import Button from "@components/button/Button";
import styles from "./AddTestimonial.module.scss";
import { apiClient } from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { toast, ToastContainer } from "react-toastify";
import { ErrorFormatter } from "@utils/helpers";
import EnhancedTextarea from "@components/FormUI/EnhancedTextarea";

const EditTestimonials = ({testimonialData, onSuccess }) => {
  const [loading, setLoading] = useState(false);

  const [formDetails, setFormDetails] = useState({
        fullName: testimonialData?.fullName || "",
        message: testimonialData?.message || "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await apiClient.put(`${endpoints.EditTestimonial}/${testimonialData._id}`, formDetails);

      toast.success("Testimonial updated successfully!");
    
      if (onSuccess) {
        setTimeout(onSuccess, 2000);
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
      <SubTitle className={styles.title}>Update Testimonial</SubTitle>

      <div className={styles.formContent}>
        <div className={styles.inputContainer}>
          <EnhancedInput
            onChange={handleOnChange}
            name="fullName"
            value={formDetails.fullName}
            label="Full Name"
            required
          />
        </div>

        <EnhancedTextarea
          onChange={handleOnChange}
          label="Message"
          name="message"
          value={formDetails.message}
          required
        />

        <Button type="submit" disabled={loading}>
          {loading ? "Please wait..." : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default EditTestimonials;
