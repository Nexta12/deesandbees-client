import HeroSection from "@components/heroSection/HeroSection";
import b1 from "@assets/img/sliders/s4.jpg";
import { FaGlobe, FaUsers, FaLightbulb, FaHandsHelping, FaAward, FaBalanceScale } from "react-icons/fa";
import { handleScrollIntoView } from "@utils/helpers";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <>
      <HeroSection
        smallTitle="About Dees & Bees Global"
        description={
          <>
            Empowering students to reach global academic excellence.  
            <br /> Bridging dreams to world-class educational opportunities.
          </>
        }
        bottonText="Explore Our Values"
        bgImg={b1}
        onClick={() => handleScrollIntoView("core-values")}
      />

      {/* Vision & Mission */}
      <section className="about-section vision-mission" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Our Vision & Mission</h2>
          <div className="cards">
            <div className="card vision">
              <h3>Vision Statement</h3>
              <p>
                To be a leading bridge between ambitious students and world-class educational 
                opportunities in the United Kingdom, Europe, United States, Canada and Australia, 
                empowering future leaders to achieve academic excellence and global success.
              </p>
            </div>

            <div className="card mission">
              <h3>Mission Statement</h3>
              <p>
                At Dees and Bees, we are committed to guiding students through every step of 
                their international education journey. We provide trusted recruitment services, 
                expert counselling, and dedicated support to ensure students access quality 
                schools and universities abroad. With integrity, innovation, and passion, 
                we connect learners to opportunities that shape brighter futures and contribute 
                to global communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-section core-values" id="core-values" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <FaBalanceScale className="icon" />
              <h4>Integrity</h4>
              <p>
                We uphold honesty, transparency, and ethical practices in all engagements with students, 
                parents, and partner institutions.
              </p>
            </div>
            <div className="value-card">
              <FaAward className="icon" />
              <h4>Excellence</h4>
              <p>
                We deliver outstanding recruitment services, ensuring students achieve 
                the highest standards in their educational journey.
              </p>
            </div>
            <div className="value-card">
              <FaUsers className="icon" />
              <h4>Inclusiveness</h4>
              <p>
                We celebrate diversity and promote equal access to educational 
                opportunities for students from all backgrounds.
              </p>
            </div>
            <div className="value-card">
              <FaLightbulb className="icon" />
              <h4>Innovation</h4>
              <p>
                We embrace creativity and technology-driven solutions to provide 
                modern, efficient, and tailored recruitment services.
              </p>
            </div>
            <div className="value-card">
              <FaHandsHelping className="icon" />
              <h4>Student-Centeredness</h4>
              <p>
                We place the aspirations, growth, and success of every student at the heart of what we do.
              </p>
            </div>
            <div className="value-card">
              <FaGlobe className="icon" />
              <h4>Global Responsibility</h4>
              <p>
                We nurture future leaders who will positively impact their communities 
                and contribute to a better, interconnected world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-section cta-section" data-aos="zoom-in">
        <div className="cta-container">
          <h2>Join Our Global Education Network</h2>
          <p>
            Let’s help you take the next big step in your academic journey — discover, apply, and thrive abroad.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
