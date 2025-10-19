import { AxiosError } from "axios";

export const handleScrollIntoView = (id) => {
  const itemToScroll = document.getElementById(id);

  if (itemToScroll) {
    itemToScroll.scrollIntoView({ behavior: "smooth" });
  } else {
    console.log("Id not found");
  }
};

export const handleScrollToTop = () => {
  window.scrollTo(0, 0);
};



export const ErrorFormatter = (error) => {
  const axiosError = error instanceof AxiosError ? error : null;

  const errorMessage =
    axiosError && typeof axiosError.response?.data?.message === "string"
      ? axiosError.response.data.message
      : null;

  return errorMessage;
};
