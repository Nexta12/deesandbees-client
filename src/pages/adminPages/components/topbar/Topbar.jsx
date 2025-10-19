import { useState, useEffect, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import styles from "./Topbar.module.scss";
import { useAuth } from "@contexts/useAuth";
import Modal from "@components/modal/Modal";
import EditUser from "@pages/adminPages/users/EditUser";

const Topbar = ({ toggleSidebar }) => {
  const { user } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const menuRef = useRef(null);
  const { logout } = useAuth()

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={styles.topbar}>
      <button className={styles.menuBtn} onClick={toggleSidebar}>
        <FiMenu size={22} />
      </button>

      <h1 className={styles.title}>Admin Dashboard</h1>

      {/* Profile dropdown */}
      <div className={styles.profile} ref={menuRef}>
        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          onClick={() => setMenuOpen((prev) => !prev)}
        />

        {menuOpen && (
          <div className={styles.dropdown}>
            <button  onClick={() => setIsEditModalOpen(true)} className={styles.dropdownItem}>
              <FaUser /> Profile
            </button>
            <button onClick={()=> {logout(); setMenuOpen(false)}} className={styles.dropdownItem}>
              <FaSignOutAlt /> Logout
            </button>
          </div>
        )}
      </div>
        <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}>
        <EditUser
          userData={user}
          onSuccess={() => {
            setIsEditModalOpen(false);
           
          }}
        />
      </Modal>
    </header>
  );
};

export default Topbar;
