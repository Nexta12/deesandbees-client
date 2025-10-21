import styles from "./contact.module.scss"

import HeroSection from "@components/heroSection/HeroSection"
import b1 from "@assets/img/sliders/b5.jpg"
import ContactForm from "./components/ContactForm"

const ContactUs = () => {
  return (
    <>
       <HeroSection
        smallTitle="Contact Us"
        description={
          <>
           Your journey matters to us. Reach out for expert advice, support, or partnership <br/>opportunities we’re always ready to guide you toward your goals.
          </>
        }
        bgImg={b1}
        className={styles.heroSection}
      />
      <ContactForm/>
    </>
  )
}

export default ContactUs