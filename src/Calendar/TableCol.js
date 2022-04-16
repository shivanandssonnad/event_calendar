import React from "react";
import PropTypes from "prop-types";

import { CELL_MIN_HEIGHT, CELL_MIN_WIDTH } from "../constants";

import styles from "./styles.module.scss";

function TableCol(props) {
  const { className = "", dataCol, headerCol, style, height, ...rest } = props;
  const classList = [styles.col];
  if (className) classList.push(className);
  if (dataCol) classList.push(styles.data_col);
  if (headerCol) classList.push(styles.header_col);

  return (
    <div
      {...rest}
      style={{
        ...style,
        height: `${height}px`,
        minHeight: `${CELL_MIN_HEIGHT}px`,
        minWidth: `${CELL_MIN_WIDTH}px`
      }}
      className={classList.join(" ")}
    ></div>
  );
}

TableCol.propTypes = {
  className: PropTypes.string,
  dataCol: PropTypes.bool,
  headerCol: PropTypes.bool,
  style: PropTypes.shape(),
  height: PropTypes.number
};

export default TableCol;
