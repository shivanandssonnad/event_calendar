import classNames from "classnames";
import styles from "./styles.module.scss";

function EventImpactName(props) {
  const { impactConfig } = props;
  return (
    <div className={styles.event_impact_name_container}>
      <span
        className={classNames(styles.color_dot)}
        style={{
          backgroundColor: impactConfig.color
        }}
      ></span>
      <span>{impactConfig.label}</span>
    </div>
  );
}

export default EventImpactName;
