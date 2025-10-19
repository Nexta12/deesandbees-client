import SubTitle from "@components/subTitle/SubTitle";
import styles from "./contactForm.module.scss";
import EnhancedInput from "@components/FormUI/EnhancedInput";
import EnhancedTextarea from "@components/FormUI/EnhancedTextarea";
import Button from "@components/button/Button";
import { MdOutlineCall } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { apiClient } from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { toast } from "react-toastify";
import { ErrorFormatter } from "@utils/helpers";
import { useState } from "react";

const ContactForm = () => {
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
    } catch (error) {
      toast.error(ErrorFormatter(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <SubTitle className={styles.title}>Contact Us</SubTitle>
        <small>
          Have a question, suggestion, or request? Fill out our enquiry form and
          we will respond as soon as possible with the information you need.
        </small>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputBox}>
            <EnhancedInput
              type="text"
              placeholder="Enter your name"
              name="fullName"
              onChange={handleOnchange}
              value={formDetails.fullName}
              required
            />
            <EnhancedInput
              type="email"
              name="email"
              value={formDetails.email}
              onChange={handleOnchange}
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className={styles.inputBox}>
            <EnhancedInput
              onChange={handleOnchange}
                  placeholder="Enter Your Location"
              name="address"
              value={formDetails.address}
            />
            <EnhancedInput
              onChange={handleOnchange}
              placeholder="Enter Phone"
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

          <Button type="submit">{loading ? "Please Wait.. " : "Submit"}</Button>
        </form>
      </div>

      <div className={styles.contactDetails}>
        <div className={styles.singleCard}>
          <SubTitle className={styles.title}>Call Us</SubTitle>
          <small>
            Call us directly and our team will be glad to support you. We’re
            just a dial away!
          </small>
          <a href={`tel: ${import.meta.env.VITE_CONTACT_PHONE}`}>
            <div className={styles.action}>
              <MdOutlineCall />
              <span>{import.meta.env.VITE_CONTACT_PHONE}</span>
            </div>
          </a>
        </div>

        <div className={styles.singleCard}>
          <SubTitle className={styles.title}>Live Chat</SubTitle>
          <small>
            Prefer chatting? Reach out to us instantly on WhatsApp for fast,
            friendly support.{" "}
          </small>

          <div className={styles.action}>
            <IoChatbubbleEllipsesOutline />
            <span>{import.meta.env.VITE_CONTACT_PHONE}</span>
          </div>

          <button
            onClick={() => {
              const phoneNumber = import.meta.env.VITE_WHATSAPP_PHONE.replace(
                /[^\d]/g,
                ""
              );
              const defaultMessage = encodeURIComponent(
                "Hello, I want to place an order."
              );
              const whatsappURL = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

              window.open(whatsappURL, "_blank");
            }}
          >
            <div className={styles.whatsapp}>
              <FaWhatsapp />
              <span>Whatsapp</span>
            </div>

            <IoIosSend className={styles.sendIcon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
