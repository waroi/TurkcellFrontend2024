import React from "react";
import styles from "./Selects.module.css";

export const Selects = ({ value, onChange, name }) => {
  return (
    <select
      value={value}
      className={styles.select}
      name={name}
      onChange={onChange}
    >
      <option value="" disabled>
        Select a category
      </option>
      <option value="On Hold" key="On Hold">
        On Hold
      </option>
      <option value="To Do" key="To Do">
        To Do
      </option>
      <option value="In Progress" key="In Progress">
        In Progress
      </option>
      <option value="Done" key="Done">
        Done
      </option>
    </select>
  );
};
