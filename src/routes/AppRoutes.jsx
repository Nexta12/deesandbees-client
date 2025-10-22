import Layout from "@pages/layouts/Layout";
import { paths } from "./path";
import Homepage from "@pages/home/Homepage";
import { Route, Routes } from "react-router-dom";
import NotFound from "@pages/notfound/NotFound";

import ContactUs from "@pages/contact/ContactUs";


import AboutUs from "@pages/aboutUs/AboutUs";
import Services from "@pages/services/Services";
import Login from "@pages/login/Login";
import ForgotPassword from "@pages/forgotPassword/ForgotPassword";
import AdminLayout from "@pages/layouts/AdminLayout";
import Users from "@pages/adminPages/users/Users";
import Testimonials from "@pages/adminPages/testimonials/Testimonials";
import Messages from "@pages/adminPages/messages/Messages";
import Dashboard from "@pages/adminPages/dashboard/Dashboard";
import VerifyOtp from "@pages/verifyOtp/VerifyOtp";
import ResetPassword from "@pages/resetPassword/ResetPassword";


const AppRoutes = () => (
  <Routes>
    {/* Public Routes */}
    <Route path={paths.Index} element={<Layout />}>
    <Route path={paths.Index} element={<Homepage />} />
    <Route path={paths.aboutUs} element={<AboutUs />} />
  
    <Route path={paths.services} element={<Services />} />

    <Route path={paths.contactUs} element={<ContactUs />} />
    <Route path={paths.Login} element={<Login />} />
    <Route path={paths.forgotPassword} element={<ForgotPassword />} />
    <Route path={paths.otpPage} element={<VerifyOtp />} />
    <Route path={paths.resetPassword} element={<ResetPassword />} />
  
    </Route>

    {/* Admin Pages */}
      <Route path={paths.admin} element={<AdminLayout />}>
       <Route path={paths.admin} element={<Dashboard/>} />
       <Route path={paths.users} element={<Users />} />
       <Route path={paths.testimonials} element={<Testimonials />} />
       <Route path={paths.messages} element={<Messages />} />

      </Route>
  

    {/* NOT FOUND */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;