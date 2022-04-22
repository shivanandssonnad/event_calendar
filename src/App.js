import Calendar from "./Calendar";
// import CalendarWithTable from "./CalendarWithTable";

import "./styles.css";

export default function App() {
  return (
    <div className={`App`}>
      <Calendar currentMonth={new Date()} />
    </div>
  );
}
