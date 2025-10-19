import b1 from "@assets/img/sliders/5.jpg";
import HeroSection from "@components/heroSection/HeroSection";
import { handleScrollIntoView } from "@utils/helpers";
import {
  FaUserGraduate,
  FaRegLightbulb,
  FaPassport,
  FaPlaneDeparture,
  FaUniversity,
  FaChalkboardTeacher,
} from "react-icons/fa";
import "./Services.scss";

const Services = () => {
  return (
    <>
      <HeroSection
        smallTitle="Our Services"
        description={
          <>
            Empowering students to achieve global education dreams  
            <br /> from application to arrival, we’re with you every step of the way.
          </>
        }
        bottonText="Discover Our Services"
        bgImg={b1}
        onClick={() => handleScrollIntoView("services-list")}
      />
    
      {/* Intro Section */}
      <section className="services-section intro" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <p className="intro-text">
            At <strong>Dees and Bees Global</strong>, we are passionate about connecting ambitious
            students with world-class education opportunities across the United Kingdom, Europe,
            United States, Canada, and Australia.  
            <br /> We simplify the journey to studying abroad by offering expert guidance, tailored
            support, and trusted recruitment services that empower students to achieve their dreams.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section grid" id="services-list" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Our Services</h2>

          <div className="services-grid">
            <div className="service-card">
              <FaUserGraduate className="icon" />
              <h3>Student Recruitment & Admissions Support</h3>
              <ul>
                <li>Guidance in choosing the right schools, colleges, and universities.</li>
                <li>Application preparation and submission support.</li>
                <li>Assistance with admission requirements and documentation.</li>
              </ul>
            </div>

            <div className="service-card">
              <FaRegLightbulb className="icon" />
              <h3>Career & Academic Counselling</h3>
              <ul>
                <li>One-to-one consultations to align student goals with study options.</li>
                <li>Advice on academic pathways, professional development, and career prospects.</li>
              </ul>
            </div>

            <div className="service-card">
              <FaPassport className="icon" />
              <h3>Visa Guidance & Compliance</h3>
              <ul>
                <li>Step-by-step visa application support.</li>
                <li>Document checks and interview preparation.</li>
                <li>Compliance guidance for international study regulations.</li>
              </ul>
            </div>

            <div className="service-card">
              <FaPlaneDeparture className="icon" />
              <h3>Pre-Departure & Settlement Support</h3>
              <ul>
                <li>Orientation sessions to prepare students for life abroad.</li>
                <li>Advice on accommodation, travel, and cultural adjustment.</li>
                <li>Ongoing pastoral care and welfare checks.</li>
              </ul>
            </div>

            <div className="service-card">
              <FaUniversity className="icon" />
              <h3>Partnerships & Institutional Collaboration</h3>
              <ul>
                <li>Building strong relationships with universities, colleges, and schools.</li>
                <li>
                  Promoting educational institutions to qualified, motivated international students.
                </li>
              </ul>
            </div>

            <div className="service-card">
              <FaChalkboardTeacher className="icon" />
              <h3>Training & Workshops</h3>
              <ul>
                <li>Capacity-building sessions for students, parents, and educators.</li>
                <li>Workshops on global employability skills and career readiness.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-section cta-section" data-aos="zoom-in">
        <div className="cta-container">
          <h2>Start Your Global Education Journey Today</h2>
          <p>
            Take the first step toward studying abroad with confidence — we’re here to guide you
            every step of the way.
          </p>
          <button className="cta-button">Get in Touch</button>
        </div>
      </section>
    </>
  );
};

export default Services;
