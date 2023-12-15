import React from "react";
import Sidebar from "../component/Sidebar";
import styles from "./AppLayout.module.css";
import Map from "../component/Map";
export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}
