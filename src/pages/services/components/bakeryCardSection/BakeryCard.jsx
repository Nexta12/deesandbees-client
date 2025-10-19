import SubTitle from "@components/subTitle/SubTitle";
import styles from "./bakeryCard.module.scss"
import ServiceCard from "@pages/home/components/ourServices/servicesCard/ServiceCard";
import { FoodMenuData } from "@data/OurFoodMenuData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Modal from "@components/modal/Modal";
import OrderForm from "@components/orderForm/OrderForm";

const BakeryCard = () => {
     const [isModalOpen, setModalOpen] = useState(false);

  const settings = {
    dots: false,
    speed: 2000,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
    <div className={styles.containerWrapper} id="bakerCard" >
      <div className={styles.containerInner}>
        <SubTitle font="script">Our Special Bakery Product</SubTitle>
        
        <small>
          At Happies, we believe enjoying great food is just as important as indulging your sweet tooth. That is why our bakery offers a delightful range of treats perfect for sharing at hangouts, get-togethers, dinner nights, and any occasion that brings people closer together.
        </small>

        <div className={styles.cards}>
          <Slider {...settings}>
            {FoodMenuData.map((item) => (
              <ServiceCard
                key={item.id}
                topButtonText={item.title}
                bodyText="Happies"
                footerButtonText={item.btnText}
                bgImg={item.bgImg}
                className={styles.serviceCard}
                onClick={() => setModalOpen(true) }
              />
            ))}
          </Slider>
        </div>
        
      </div>
    </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
         <OrderForm onSuccess={() => setModalOpen(false)} />
      </Modal>
    </>
  );
};

export default BakeryCard;
