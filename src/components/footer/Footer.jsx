import { Link, NavLink } from "react-router-dom";
import styles from "./footer.module.scss";
import Logo from "@assets/img/Logo.png";
import SubTitle from "@components/subTitle/SubTitle";
import { NavMenu } from "@data/MenuData";
import { TbSeparator } from "react-icons/tb";
import { openHours } from "@data/OpeningHours";
import { useAuth } from "@contexts/useAuth";

const Footer = () => {
  const { user, logout } = useAuth();

  const dynamicMenu = user
    ? NavMenu.map(item =>
        item.title === "Login"
          ? { title: "Logout", link: "#", action: logout }
          : item
      )
    : NavMenu;

  return (
    <div className={styles.container}>
      {/* Company Info */}
      <div className={styles.details}>
        <Link to="/">
          <img src={Logo} alt="Logo" className={styles.logo} />
        </Link>

        <div>
          <div className={styles.contactInfo}>
            <span>Phone:</span>
            <span>+2347069223328</span>
            <span>+447359641827</span>
          </div>

          <div className={styles.contactInfo}>
            <span>Email:</span>
            <span>info@deesandbeesglobal.com</span>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className={styles.sectionContainer}>
        <div>
          <SubTitle className={styles.headingTitle}>LINKS</SubTitle>
          <TbSeparator />
        </div>

        <div className={styles.navItems}>
          {dynamicMenu.map((item) =>
            item.title === "Logout" ? (
              <NavLink
                key={item.title}
                onClick={item.action}
                className={styles.link}
              >
                {item.title}
              </NavLink>
            ) : (
              <NavLink
                key={item.title}
                to={item.link}
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
              >
                {item.title}
              </NavLink>
            )
          )}

          <a href="https://webmail.deesandbeesglobal.com/" target="_blank" >Webmail</a>
        </div>
      </div>

      {/* Open Hours Section */}
      <div className={styles.sectionContainer}>
        <div>
          <SubTitle className={styles.headingTitle}>OPEN HOURS</SubTitle>
          <TbSeparator />
        </div>
        <div className={styles.openHours}>
          {openHours.map((item, index) => (
            <div key={index} className={styles.hourRow}>
              <span>{item.day}</span>
              <span>{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
