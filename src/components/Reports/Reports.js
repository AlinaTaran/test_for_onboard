import s from "./Report.module.css";

function Reports({ data }) {
  return (
    <ul className={s.dataList}>
      {data.map(({ id, date, type, moduleName, learner }) => (
        <li key={id} className={s.dataListItem}>
          <p className={s.name}>{learner.name}</p>
          <p className={s.moduleName}>{moduleName}</p>
          <p className={s.type}>Task</p>
          <p className={s.result}>{type}</p>
          <p className={s.date}>{date}</p>

          <button className={s.status}>
            <span className={s.btnSubTitle}>New</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Reports;
