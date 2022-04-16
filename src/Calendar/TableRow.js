import React from "react";
import styles from "./styles.module.scss";

function TableRow(props) {
  const { className = "", ...rest } = props;
  return <div {...rest} className={`${styles.row} ${className}`}></div>;
}

export default TableRow;
