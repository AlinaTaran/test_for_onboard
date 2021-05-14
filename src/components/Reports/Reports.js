import s from "./Report.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchNotifications } from "../../redux/data/data-operations";

function Reports() {
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");
  const notifications = useSelector((state) => state.data);

  function unique(arr) {
    return Array.from(new Set(arr));
  }

  function handleStatus(status) {
    setStatus("Checked");
  }

  function formatString(string) {
    return string.length < 25 ? string : `${string.slice(0, 25)}...`;
  }

  useEffect(() => {
    return dispatch(fetchNotifications());
  }, [dispatch]);

  return (
    <ul className={s.dataList}>
      {unique(notifications).map(
        ({ id, date, type, moduleName, learner, status }) => (
          <li key={id} className={s.dataListItem}>
            <p className={s.name}>{learner.name}</p>
            <p className={s.moduleName}>
              <p data-tooltip={moduleName}>{formatString(moduleName)}</p>
            </p>
            <p className={s.type}>Task</p>
            <p className={s.result}>{type}</p>
            <p className={s.date}>{date}</p>
            <button onClick={() => handleStatus(status)} className={s.status}>
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
