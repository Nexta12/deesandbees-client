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

const EditUser = ({ userData, onSuccess }) => {
  const [loading, setLoading] = useState(false);

  const [formDetails, setFormDetails] = useState({
    firstName: userData?.firstName || "",
    lastName: userData?.lastName || "",
    email: userData?.email || "",
    role: userData?.role || "",
    password: ""
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
      await apiClient.put(`${endpoints.updateUser}/${userData._id}`, formDetails);
      toast.success("User updated successfully!");
      if (onSuccess) {
        setTimeout(onSuccess, 1200);
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
      <SubTitle className={styles.title}>Update Profile</SubTitle>

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
            disabled // Email shouldn’t be editable
          />
             <EnhancedInput
            onChange={handleOnChange}
            name="password"
            type="password"
            value={formDetails.password}
            label="Update Password"
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
          {loading ? "Updating..." : "Update User"}
        </Button>
      </div>
    </form>
  );
};

export default EditUser;
