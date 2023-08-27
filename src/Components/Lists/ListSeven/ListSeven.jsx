// ui-components
import ThemeWrapper from "../../ThemeWrapper/ThemeWrapper";

// styles
import Style from "./ListSeven.module.css";
const ListSeven = ({ number="1", title="Visionary & passionate Team" }) => {
  return (
    <ThemeWrapper>
      <div className={Style.listWrapper}>
        <h2 className={Style.number}>{number}</h2>
        <p className={Style.title}>{title}</p>
      </div>
    </ThemeWrapper>
  );
};

export default ListSeven;
