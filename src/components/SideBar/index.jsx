import { Outlet } from "react-router-dom";

import Logo from "@components/Header/Logo";
import styles from "./Sidebar.module.css";
import AppNav from "@components/Header/AppNav";
import Footer from "@components/Footer";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SideBar;
