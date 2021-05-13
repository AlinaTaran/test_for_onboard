import s from "./SubTitle.module.css";

function SubTitle() {
  return (
    <div className={s.wrapperSubTitle}>
      <p className={s.subTitleName}>Name</p>
      <p className={s.subTitleType}>Type</p>
      <p className={s.subTitleResult}>Result</p>
      <p className={s.subTitleDate}>Date</p>
      <p className={s.subTitleStatus}>Status</p>
    </div>
  );
}

export default SubTitle;
