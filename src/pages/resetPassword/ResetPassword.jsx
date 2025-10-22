import React, { useEffect, useState } from "react";
import styles from "../login/Login.module.scss";
import EnhancedInput from "@components/FormUI/EnhancedInput";
import Button from "@components/button/Button";
import { ErrorFormatter } from "@utils/helpers";
import { apiClient } from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { toast } from "react-toastify";
import { paths } from "@routes/path";
import { useNavigate } from "react-router-dom";
import {
  getLocalStorageItem,
  removeLocalStorageItem,
} from "@utils/localStorage";

const ResetPassword = () => {
  const navigate = useNavigate();

  // ✅ Retrieve stored OTP and email
  const otpEmail = getLocalStorageItem("otpEmail");
  const otp = getLocalStorageItem("otp");

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  // ✅ Redirect if user shouldn't be here
  useEffect(() => {
    if (!otpEmail || !otp) {
      navigate(paths.forgotPassword, { replace: true });
    }
  }, [otpEmail, otp, navigate]);

  // ✅ Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Basic password validation
  const validatePassword = (password) => {
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    return null;
  };

  // ✅ Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { password, confirmPassword } = formData;

    // Client-side validation
    if (!password || !confirmPassword) {
      toast.error("Please fill out both fields.");
      return;
    }
    const passwordError = validatePassword(password);
    if (passwordError) {
      toast.error(passwordError);
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const payload = { email: otpEmail, password, confirmPassword };
      const res = await apiClient.post(endpoints.resetPassword, payload);

      if (res.status === 200) {
        toast.success("Password reset successfully!");

        // Redirect after success
        setTimeout(() => {
          // Cleanup local storage
          removeLocalStorageItem("otpEmail");
          removeLocalStorageItem("otp");
          navigate(paths.Login);
        }, 2500);
      }
    } catch (error) {
      toast.error(ErrorFormatter(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>Set New Password</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <EnhancedInput
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter new password"
            required
          />

          <EnhancedInput
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm new password"
            required
          />

          <div className={styles.actions}>
            <Button
              type="submit"
              variant="success"
              className={styles.loginBtn}
              disabled={loading}
            >
              {loading ? "Please wait..." : "Reset Password"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
