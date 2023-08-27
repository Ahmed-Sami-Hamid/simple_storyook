// ui-components
import ThemeWrapper from "../../ThemeWrapper/ThemeWrapper";

// Images
import mapIcon from "../../../Assets/icons/map-pin.png"

// styles
import Style from "./ListFive.module.css";

const ListFive = ({ Icon = mapIcon, content = "918 Road, Hudson" }) => {
  return (
    <ThemeWrapper>
      <div className={Style.listWrapper}>
        <img src={Icon} alt="map icon" className={Style.icon} />
        <p className={Style.content}>{content}</p>
      </div>
    </ThemeWrapper>
  );
};

export default ListFive;
