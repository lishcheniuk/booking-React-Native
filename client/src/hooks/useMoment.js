import { useRef, useState } from "react";
import moment from "moment";
import "moment/locale/ru";

export const useMoment = () => {
  const [calendar, setCalendar] = useState([]);
  const currentDate = useRef(moment()).current;

  function generateCalendar() {
    const startMonth = currentDate.clone().startOf("month");
    const endMonth = startMonth.clone().add(12, "M");
    const month = startMonth.clone().subtract(1, "M");

    const calendarGenerate = [];
    while (month.isBefore(endMonth, "month")) {
      const startWeek = startMonth.clone().startOf("month").startOf("week");
      const endWeek = startMonth.clone().endOf("month").endOf("week");
      const date = startWeek.clone().subtract(1, "day");

      const monthGenerate = [];

      while (date.isBefore(endWeek, "day")) {
        monthGenerate.push(
          Array(7)
            .fill("")
            .map((_) => {
              const value = date.add(1, "day").clone();
              const isSameMonth = !startMonth.isSame(value, "month");

              return {
                value: isSameMonth ? false : value,
                disabled: currentDate > value.clone().add(1, "day")
              };
            })
        );
      }
      startMonth.add(1, "M");

      calendarGenerate.push({
        month: month.add(1, "M").clone(),
        monthGenerate
      });
    }

    setCalendar(calendarGenerate);
  }

  return { calendar, generateCalendar, currentDate };
};
