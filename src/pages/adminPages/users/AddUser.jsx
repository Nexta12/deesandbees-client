import { useState } from "react";
import SubTitle from "@components/subTitle/SubTitle";
import EnhancedInput from "@components/FormUI/EnhancedInput";
import EnhancedSelect from "@components/FormUI/EnhancedSelect";
import Button from "@components/button/Button";
import styles from "./Adduser.module.scss";
import { apiClient } from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { toast, ToastContainer } from "react-toastify";
import { ErrorFormatter } from "@utils/helpers";
import { roleOptions } from "@data/General";

const AddUser = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);

  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
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
      await apiClient.post(endpoints.createUser, formDetails);

      toast.success("User created successfully!");
      setFormDetails({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "",
      });

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
      <SubTitle className={styles.title}>Create a User</SubTitle>

      <div className={styles.formContent}>
        <div className={styles.inputContainer}>
          <EnhancedInput
            onChange={handleOnChange}
            name="firstName"
            value={formDetails.firstName}
            label="First Name"
            required
          />
          <EnhancedInput
            onChange={handleOnChange}
            name="lastName"
            value={formDetails.lastName}
            label="Last Name"
            required
          />
        </div>

        <div className={styles.inputContainer}>
          <EnhancedInput
            onChange={handleOnChange}
            label="Email"
            name="email"
            type="email"
            value={formDetails.email}
            required
          />
          <EnhancedInput
            onChange={handleOnChange}
            name="password"
            type="password"
            value={formDetails.password}
            label="Password"
            required
          />
        </div>

        <EnhancedSelect
          onChange={handleOnChange}
          label="Role"
          name="role"
          value={formDetails.role}
          options={roleOptions}
          required
        />

        <Button type="submit" disabled={loading}>
          {loading ? "Please wait..." : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default AddUser;
