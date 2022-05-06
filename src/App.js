import { useMemo } from "react";
import Calendar from "./Calendar";
// import CalendarWithTable from "./CalendarWithTable";

import "./styles.css";

export default function App() {
  const currentMonth = useMemo(() => new Date(), []);
  return (
    <div className={`App`}>
      <Calendar currentMonth={currentMonth} />
    </div>
  );
}
