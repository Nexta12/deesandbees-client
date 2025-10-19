import { useState } from "react";
import styles from "./faq.module.scss";
import SubTitle from "@components/subTitle/SubTitle";
import HeadingText from "@components/headingText/HeadingText";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What does Dees and Bees Global Resources do?",
    answer:
      "Dees and Bees Global Resources is an international education recruitment organisation that connects students with top universities in UK, Europe, USA, Canada and Australia. We provide expert guidance on university admissions, visa applications, and study abroad preparation while supporting institutions with their strategic recruitment goals.",
  },
  {
    question: "Which countries do you recruit students from?",
    answer:
      "We currently recruit students from Africa, Asia, and other regions globally who are interested in studying in our target markets.",
  },
  {
    question: "Can you help me choose the right university and course?",
    answer:
      "Absolutely! Our experienced education advisors help you select a university and programme that best fits your academic background, budget, and career goals.",
  },
  {
    question: "Do you assist with student visa applications?",
    answer:
      "Yes. We provide comprehensive UK visa guidance and support throughout your application process to ensure compliance with UKVI requirements.",
  },
  {
    question: "What documents do I need to apply for a UK university?",
    answer:
      "Generally, you’ll need your academic documents and every other documents relevant to your application. We guide you through every step of document preparation and submission.",
  },
  {
    question: "Do you provide accommodation assistance?",
    answer:
      "We guide students in finding safe, affordable, and convenient accommodation options, either on-campus or off-campus.",
  },
  {
    question: "Do you support students after arrival in the UK?",
    answer:
      "Yes, we offer post-arrival support including airport pick-up guidance, orientation, and settling-in tips for international students.",
  },
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className={styles.container} data-aos="fade-up">
      <div className={styles.header}>
        <SubTitle font="script">Questions</SubTitle>
        <HeadingText>Frequently Asked Questions</HeadingText>
        <small>
          Find answers to some of the most common questions students and parents
          ask about studying abroad with Dees and Bees Global.
        </small>
      </div>

      <div className={styles.faqList}>
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${
              activeIndex === index ? styles.active : ""
            }`}
          >
            <button
              className={styles.question}
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <FaChevronDown
                className={`${styles.icon} ${
                  activeIndex === index ? styles.rotate : ""
                }`}
              />
            </button>
            <div
              className={`${styles.answer} ${
                activeIndex === index ? styles.show : ""
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
