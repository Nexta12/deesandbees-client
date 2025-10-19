import { Link, NavLink } from "react-router-dom";
import styles from "./header.module.scss";
import Logo from "@assets/img/Logo.png";
import Button from "@components/button/Button";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { NavMenu } from "@data/MenuData";
import { useState } from "react";
import Modal from "@components/modal/Modal";
import OrderForm from "@components/orderForm/OrderForm";


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);


  return (
    <>
      <section className={styles.section}>
     
        <div className={styles.headerWrapper}>
          {/* Header */}
          <div className={styles.header}>
            {/* Logo */}
            <Link to="/" className={styles.logoContainer}>
              <img src={Logo} alt="Logo" className={styles.logo} />
            </Link>

            {/* Desktop Nav */}
            <div className={styles.navlink}>
              {NavMenu.map((item, i) => (
                <NavLink
                  key={i}
                  to={item.link}
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                >
                  {item.title}
                </NavLink>
              ))}
            </div>

            {/* Desktop Button */}
            <div className={styles.rightButton}>
              <Button onClick={() => setModalOpen(true)}>
                Apply Now
              </Button>
            </div>

            {/* Mobile Toggle */}
            <div
              className={styles.menuToggle}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <IoMdClose /> : <IoMdMenu />}
            </div>
          </div>

          {/* Mobile Menu Dropdown */}

          {isMobileMenuOpen && (
            <div className={styles.mobileMenu}>
              {NavMenu.map((item, i) => (
                <NavLink
                  key={i}
                  to={item.link}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.mobileLink} ${styles.active}`
                      : styles.mobileLink
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </NavLink>
              ))}

              {/* Mobile Button */}
              <div className={styles.mobileButton}>
                <Button onClick={() => setModalOpen(true)} className={styles.lightOrange}>
                   Apply Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <OrderForm onSuccess={() => setModalOpen(false)} />
      </Modal>

    </>
  );
};

export default Header;
