import React from "react";
import styles from "./ToolBar.module.css";

const ToolBar = (props) => (
  <footer className={styles.ToolBar}>
    <button className={styles.ResetButton} onClick={props.onClick}>
      Reset
    </button>
  </footer>
);

export default ToolBar;
