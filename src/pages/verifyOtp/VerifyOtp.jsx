import React, { useState, useEffect } from "react";
import styles from "../login/Login.module.scss";
import EnhancedInput from "@components/FormUI/EnhancedInput";
import Button from "@components/button/Button";
import { ErrorFormatter } from "@utils/helpers";
import { apiClient } from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { toast } from "react-toastify";
import { paths } from "@routes/path";
import { useNavigate } from "react-router-dom";
import { getLocalStorageItem} from "@utils/localStorage";

const VerifyOtp = () => {
  const navigate = useNavigate();

  const otpEmail = getLocalStorageItem("otpEmail");
  const otp = getLocalStorageItem("otp");

  const [formData, setFormData] = useState({ otp: "" });
  const [loading, setLoading] = useState(false);

  // ✅ Redirect if not eligible to view this page
  useEffect(() => {
    if (!otpEmail || !otp) {
      navigate(paths.forgotPassword, { replace: true });
    }
  }, [otpEmail, otp, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await apiClient.post(endpoints.verifyOtp, {
        email: otpEmail,
        otp: formData.otp,
      });

      toast.success("OTP verified successfully!");
    
      // example: move to password reset
      navigate(paths.resetPassword);
      
    } catch (error) {
      toast.error(ErrorFormatter(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>Verify OTP</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <EnhancedInput
            name="otp"
            value={formData.otp}
            onChange={handleChange}
            placeholder="Enter OTP"
            required
          />

          <div className={styles.actions}>
            <Button
              type="submit"
              variant="success"
              className={styles.loginBtn}
              disabled={loading}
            >
              {loading ? "Please wait..." : "Verify"}
            </Button>
          </div>
        </form>

        <div className={styles.footerText}>
          <a href={paths.Login} className={styles.link}>
            Cancel
          </a>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
