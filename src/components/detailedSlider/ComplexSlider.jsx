import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PropertyPlaceholder from "@assets/img/b1.png";
import styles from "./complexSlider.module.scss";

const ComplexSlider = ({
  property,
  currentImageIndex,
  setShowFullScreen,
  prevImage,
  nextImage,
  setCurrentImageIndex,
}) => {
  const thumbnailRef = useRef(null);

  const scrollThumbnails = (direction) => {
    if (thumbnailRef.current) {
      const scrollAmount = direction === "left" ? -150 : 150;
      thumbnailRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.imageSlider}>
      <div className={styles.mainImageWrapper}>
        <img
          src={property?.otherImages[currentImageIndex] || PropertyPlaceholder}
          alt={property?.title}
          className={styles.mainImage}
          onClick={() => setShowFullScreen(true)}
        />
        <button onClick={prevImage} className={styles.navLeft}>
          ←
        </button>
        <button onClick={nextImage} className={styles.navRight}>
          →
        </button>
        <div className={styles.counter}>
          {currentImageIndex + 1}/{property.media.length}
        </div>
      </div>

      <div className={styles.thumbnailsWrapper}>
        <button
          onClick={() => scrollThumbnails("left")}
          className={styles.scrollLeft}
        >
          <FaChevronLeft />
        </button>
        <div ref={thumbnailRef} className={styles.thumbnailScroller}>
          {property.otherImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`${styles.thumbnail} ${
                currentImageIndex === index ? styles.active : ""
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
        <button
          onClick={() => scrollThumbnails("right")}
          className={styles.scrollRight}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ComplexSlider;
