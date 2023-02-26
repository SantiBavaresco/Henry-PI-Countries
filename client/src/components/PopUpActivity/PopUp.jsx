import React, { Component } from "react";
import styles from "./PopUpActivity.module.css"
 
const Popup = props => {
  return (
    <div className={styles.popup_box}>
      <div className={styles.box}>
        <span className={styles.close_icon} onClick={props.handleClose}>x</span>
          {props.content}
      </div>
    </div>
  );
};
 
export default Popup;