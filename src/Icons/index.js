import Icons from "./icons.svg";

function Icon({ name, color, width = 16, height = 16, ...rest }) {
  return (
    <svg
      preserveAspectRatio="xMidYMin meet"
      fill={color}
      width={width}
      height={height}
      {...rest}
    >
      <use xlinkHref={`${Icons}#src--icons--${name}`} />
    </svg>
  );
}

export default Icon;
