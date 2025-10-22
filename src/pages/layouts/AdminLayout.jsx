import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "./AdminLayout.module.scss";
import Sidebar from "@pages/adminPages/components/sidebar/Sidebar";
import Topbar from "@pages/adminPages/components/topbar/Topbar";
import { useAuth } from "@contexts/useAuth";
import { paths } from "@routes/path";
import { PuffLoader } from "react-spinners";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  const navigate = useNavigate();
  const { user, isAuthenticated, validateAuth } = useAuth();

  useEffect(() => {
    const verifyAuth = async () => {
      setAuthLoading(true);
      try {
        await validateAuth();
      } finally {
        setAuthLoading(false);
      }
    };

    verifyAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!authLoading) {
      // Only redirect once validation is complete
      if (!isAuthenticated || !user) {
        navigate(paths.Index);
      }
    }
  }, [authLoading, isAuthenticated, user, navigate]);

  if (authLoading) {
    return (
      <div className={styles.loadingWrapper}>
        <PuffLoader size={60} color="#4866ff" />
      </div>
    );
  }

  return (
    <div
      className={`${styles.adminLayout} ${
        sidebarOpen ? styles.sidebarOpen : ""
      }`}
    >
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className={styles.adminMain}>
        <Topbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className={styles.adminContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
