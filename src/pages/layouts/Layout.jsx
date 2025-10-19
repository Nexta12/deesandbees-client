
import Header from "@components/header/Header";
import { Outlet} from "react-router-dom";
import styles from "./Layout.module.scss"
import Footer from "@components/footer/Footer";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <div className={styles.pageLayout} >
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
        <Header/>
       <Outlet /> 
       <Footer/>
    </div>
  );
};

export default Layout;
