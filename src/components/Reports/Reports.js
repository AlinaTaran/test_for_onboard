import s from "./Report.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchNotifications } from "../../redux/data/data-operations";

function Reports() {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(0);
  const notifications = useSelector((state) => state.data);

  function unique(arr) {
    return Array.from(new Set(arr));
  }

  function handleStatus(status) {
    // setStatus((prevState) => ({
    //   status: !status.status,
    // }));
  }

  function formatString(string) {
    return string.length < 25 ? string : `${string.slice(0, 25)}...`;
  }

  // function classNamesResult(type) {
  //   switch (type) {
  //     case "PASSED":
  //       s.passed
  //       break;
  //     case "FAILED":
  //       { s.failed }
  //       break;
  //     case "ESSAY":
  //       { s.essay }
  //       break;
  //     case "TASK"
  //       { s.result }
  //       break;
  //     default:
  //       { s.result }
  //   }
  // }

  useEffect(() => {
    return dispatch(fetchNotifications());
  }, []);

  return (
    <ul className={s.dataList}>
      {unique(notifications).map(
        ({ id, date, type, moduleName, learner, status }) => (
          <li key={id} className={s.dataListItem}>
            <p className={s.name}>{learner.name}</p>
            <p className={s.moduleName}>
              <span data-tooltip={moduleName}>{formatString(moduleName)}</span>
            </p>
            <p className={s.type}>Task</p>
            <p className={type === "FAILED" ? s.failed : s.passed}>{type}</p>
            <p className={s.date}>{date}</p>
            <button
              onClick={() => handleStatus(status)}
              className={status === 1 ? s.checked : s.new}
            >
              <span className={s.btnSubTitle}>
                {status === 1 ? "Checked" : "New"}
              </span>
            </button>
          </li>
        )
      )}
    </ul>
  );
}

export default Reports;
