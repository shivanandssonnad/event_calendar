import React, { forwardRef } from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const TableRow = forwardRef((props, ref) => {
  const { className = "", ...rest } = props;
  return (
    <div ref={ref} {...rest} className={`${styles.row} ${className}`}></div>
  );
});

TableRow.propTypes = {
  className: PropTypes.string
};

export default TableRow;
