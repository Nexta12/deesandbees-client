
import { FiChevronRight } from "react-icons/fi";
import { IoChevronBackSharp } from "react-icons/io5";
import "./customArrow.scss"

const CustomArrow = ({ direction, onClick }) => {
  return (
    <button
      className={`slick-arrow ${direction === "left" ? "slick-prev" : "slick-next"}`}
      onClick={onClick}
      aria-label={direction === "left" ? "Previous" : "Next"}
    >
      {direction === "left" ? <IoChevronBackSharp /> : <FiChevronRight />} 
    </button>
  );
};


export default CustomArrow