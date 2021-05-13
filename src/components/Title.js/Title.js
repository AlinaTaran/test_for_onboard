import image from "./images/Vector.png";
import s from "./Title.module.css";

function Title() {
  return (
    <div className={s.wrapperTitle}>
      <img src={image} />
      <span className={s.title}>Onboardee reports</span>
    </div>
  );
}

export default Title;
