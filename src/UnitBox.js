import React from "react";
import styles from "./UnitBox.module.css";

const UnitBox = function UnitBox(props) {
  return (
    <div className={styles.UnitBox}>
      <div className={styles.FieldWrapper}>
        <input
          type="text"
          name={props.unit}
          className={styles.Field}
          value={props.value}
          onChange={props.onValueChange}
        ></input>
        <p className={styles.Label}>{props.unit}</p>
      </div>
      <div className={styles.Actions}>
        {props.steps.map((step) => (
          <button
            key={step}
            className={styles.Action}
            onClick={(event) => props.onStepClick(event, step)}
            name={props.unit}
          >
            <span className={styles.ActionIcon}>{step}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default UnitBox;
