import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReports, setReportStatusById } from "../../redux/modules/reports";
import s from "./Report.module.css";

function Reports() {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.reports.reports);

  useEffect(() => {
    dispatch(fetchReports());
  }, [dispatch]);

  function formatString(string) {
    return string.length < 25 ? string : `${string.slice(0, 25)}...`;
  }

  function classNamesTypes(type) {
    if (type === "FAILED") {
      return s.failed;
    } else if (type === "PASSED") {
      return s.passed;
    } else if (type === "ESSAY") {
      return s.essay;
    }
    return s.result;
  }

  return (
    <ul className={s.dataList}>
      {notifications.map(({ id, date, type, moduleName, learner, status }) => (
        <li key={id} className={s.dataListItem}>
          <p className={s.name}>{learner.name}</p>
          <p className={s.moduleName}>
            <span data-tooltip={moduleName}>{formatString(moduleName)}</span>
          </p>
          <p className={s.type}>Task</p>
          <p className={classNamesTypes(type)}>{type}</p>
          <p className={s.date}>{date}</p>
          <button
            onClick={() => dispatch(setReportStatusById(id))}
            className={status === 1 ? s.checked : s.new}
          >
            <span className={s.btnSubTitle}>
              {status === 1 ? "Checked" : "New"}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Reports;
