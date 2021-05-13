import s from "./Report.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchNotifications } from "../../redux/data/data-operations";

function Reports() {
  const dispatch = useDispatch();
  const [status, setStatus] = useState("New");
  const notifications = useSelector((state) => state.data);

  function unique(arr) {
    return Array.from(new Set(arr));
  }

  function handleStatus() {
    setStatus("Checked");
  }

  useEffect(() => {
    return dispatch(fetchNotifications());
  }, [dispatch]);

  return (
    <ul className={s.dataList}>
      {unique(notifications).map(({ id, date, type, moduleName, learner }) => (
        <li key={id} className={s.dataListItem}>
          <p className={s.name}>{learner.name}</p>
          <p className={s.moduleName}>{moduleName}</p>
          <p className={s.type}>Task</p>
          <p className={s.result}>{type}</p>
          <p className={s.date}>{date}</p>
          <button onClick={() => handleStatus()} className={s.status}>
            <span className={s.btnSubTitle}>{status}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Reports;
