// Style
import Style from "./ListNine.module.css";

const ListNine = ({ number = "1", heading = "Analyse" }) => {
  return (
    <div className={Style.list}>
      <p className={Style.title}>Step {number}</p>
      <h4 className={Style.heading}>{heading}</h4>
    </div>
  );
};

export default ListNine;
