

import { FaGlobe, FaUserGraduate, FaPassport, FaPlaneDeparture } from "react-icons/fa";
import styles from "./servicesShowcase.module.scss";

const services = [
  { icon: <FaUserGraduate />, title: "Student Recruitment", desc: "Guidance choosing the right schools and admission support." },
  { icon: <FaPassport />, title: "Visa Guidance", desc: "Step-by-step visa process and compliance support." },
  { icon: <FaPlaneDeparture />, title: "Pre-Departure Support", desc: "Orientation and settlement support for students." },
  { icon: <FaGlobe />, title: "Global Collaboration", desc: "Partnering with world-class institutions worldwide." },
];

const ServicesShowcase = () => (
  <section className={styles.services}>
    <h2>Our Core Services</h2>
    <div className={styles.grid}>
      {services.map((srv, i) => (
        <div key={i} className={styles.card} data-aos="fade-up">
          <div className={styles.icon}>{srv.icon}</div>
          <h3>{srv.title}</h3>
          <p>{srv.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesShowcase;

