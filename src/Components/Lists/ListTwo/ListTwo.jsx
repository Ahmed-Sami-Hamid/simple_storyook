// ui-components
import Spacer from "../../UI-Kit/Spacer/Spacer";

// images
import bgDefault from "../../../Assets/backgrounds/bg_list2.png";

// styles
import Style from "./ListTwo.module.css";

const ListTwo = ({ bgUrl = bgDefault, heading = "Lorem Ipusm" }) => {
  return (
    <>
      <div className={Style.list}>
        <div
          className={Style.image}
          style={{ backgroundImage: `url(${bgUrl})` }}
        />
        <Spacer sm />
        <h4 className={Style.heading}>{heading}</h4>
      </div>
    </>
  );
};

export default ListTwo;
