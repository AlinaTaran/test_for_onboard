import s from "./Report.module.css";

function Reports({ data }) {
  return (
    <ul className={s.dataList}>
      {data.map(({ id, date, type, moduleName, status, learner }) => (
        <li key={id} className={s.dataListItem}>
          <span className={s.name}>{learner.name}</span>
          <span className={s.name}>{moduleName}</span>
          <span className={s.type}>{type}</span>
          <span className={s.date}>{date}</span>
          <span className={s.status}>{status}</span>
        </li>
      ))}
    </ul>
  );
}

export default Reports;
