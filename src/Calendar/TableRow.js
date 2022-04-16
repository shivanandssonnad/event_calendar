import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

function TableRow(props) {
  const { className = "", ...rest } = props;
  return <div {...rest} className={`${styles.row} ${className}`}></div>;
}

TableRow.propTypes = {
  className: PropTypes.string
};

export default TableRow;
