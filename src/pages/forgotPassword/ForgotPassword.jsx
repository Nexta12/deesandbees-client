
import React, { useState } from "react";
import styles from "../login/Login.module.scss";
import EnhancedInput from "@components/FormUI/EnhancedInput";
import Button from "@components/button/Button";
import { ErrorFormatter } from "@utils/helpers";
import { apiClient } from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { toast } from "react-toastify";
import { useAuth } from "@contexts/useAuth";
import { paths } from "@routes/path";

const ForgotPassword = () => {
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await apiClient.post(endpoints.login, formData);
      const data = response.data;
      login(data.user, data.token);
      toast.success(data.message);
    } catch (error) {
      toast.error(ErrorFormatter(error));
    }
  };
  //  <PuffLoader height="80" width="80" radius={1} color="#4866ff" />
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>Reset Password</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <EnhancedInput
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
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

        <div className={styles.footerText}>
          <a href={paths.Login} className={styles.link}>
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
