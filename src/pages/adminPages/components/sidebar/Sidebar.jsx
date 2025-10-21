import { NavLink } from "react-router-dom";
import { FiHome, FiUsers, FiMessageCircle, FiStar } from "react-icons/fi";
import styles from "./Sidebar.module.scss";
import { paths } from "@routes/path";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.header}>
        <h2>Admin</h2>
        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
          ×
        </button>
      </div>

      <nav className={styles.nav}>
        <NavLink onClick={() => setIsOpen(false)} to={paths.admin} end>
          <FiHome /> Dashboard
        </NavLink>
        <NavLink onClick={() => setIsOpen(false)} to={paths.users}>
          <FiUsers /> Account
        </NavLink>
        <NavLink onClick={() => setIsOpen(false)} to="/admin/testimonials">
          <FiStar /> Testimonials
        </NavLink>
        <NavLink onClick={() => setIsOpen(false)} to="/admin/messages">
          <FiMessageCircle /> Messages
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
