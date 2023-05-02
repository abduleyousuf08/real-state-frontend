import React, { useState } from "react";
import { BsDashLg } from "react-icons/bs";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useEffect } from "react";
import axios from "axios";

function Schedule({ user }) {
  const [scheduleData, setScheduleData] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [isExpended, setIsExpended] = useState(false);
  const [expendedIndex, setExpendedIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/schedule/oneSchedule/${user?._id}`)
      .then((res) => {
        console.log(res.data.schedulePlan);
        setScheduleData(res.data.schedulePlan);
        setDataLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  if (dataLoading) {
    return <div>Scheduling listing....</div>;
  }

  console.log(scheduleData);
  // const scheduleList = scheduleData.map((data) => {
  //   return <div></div>;
  // });

  return (
    <div className="h-full p-10">
      <div>
        <h2 className="flex gap-3 items-center text-amber-400 font-bold text-xl">
          <BsDashLg className="fill-current " style={{ strokeWidth: "3px" }} />
          Schedules
        </h2>
        {/**EXPENDED DROPDOWN SCHEDULE DESIGN */}
        {/* <div>{  }</div> */}
        {/* <Calendar className="mt-10" /> */}
      </div>
    </div>
  );
}

export default Schedule;
