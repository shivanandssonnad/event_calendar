import React from "react";
import { CELL_MIN_HEIGHT, CELL_MIN_WIDTH } from "../constants";
import styles from "./styles.module.scss";

function TableCol(props) {
  const { className = "", dataCol, headerCol, style, height, ...rest } = props;
  const localClassNames = [styles.col];
  if (className) localClassNames.push(className);
  if (dataCol) localClassNames.push(styles.data_col);

  return (
    <div
      {...rest}
      style={{
        ...style,
        height: `${height}px`,
        minHeight: `${CELL_MIN_HEIGHT}px`,
        minWidth: `${CELL_MIN_WIDTH}px`
      }}
      className={localClassNames.join(" ")}
    ></div>
  );
}

export default TableCol;
