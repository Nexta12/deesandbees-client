
import React, { useState, useEffect } from "react";
import styles from "./Login.module.scss";
import EnhancedInput from "@components/FormUI/EnhancedInput";
import Button from "@components/button/Button";
import { ErrorFormatter } from "@utils/helpers";
import { apiClient } from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { toast } from "react-toastify";
import { useAuth } from "@contexts/useAuth";
import { paths } from "@routes/path";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // ✅ Redirect authenticated user automatically
  useEffect(() => {
    if (isAuthenticated && user) {
      navigate(paths.admin, { replace: true });
    }
  }, [isAuthenticated, user, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await apiClient.post(endpoints.login, formData);
      const data = response.data;

      // save auth state
      login(data.user, data.token);

      toast.success(data.message || "Login successful!");
      navigate(paths.admin);
    } catch (error) {
      toast.error(ErrorFormatter(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2 className={styles.title}>Login</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <EnhancedInput
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <EnhancedInput
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />

          <div className={styles.actions}>
            <Button
              type="submit"
              variant="success"
              className={styles.loginBtn}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </div>
        </form>

        <div className={styles.footerText}>
          <a href={paths.forgotPassword} className={styles.link}>
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

