// ui-components
import ThemeWrapper from "../../ThemeWrapper/ThemeWrapper";
import Spacer from "../../UI-Kit/Spacer/Spacer";


// Icons
import frameIcon from "../../../Assets/icons/Frame.svg";

// styles
import Style from "./ListSix.module.css";

const ListSix = ({
  Icon = frameIcon,
  title = "Retouch programmed for 2 years",
  content = "Find out how over +4500 Dermopigmentistss have created their own automatic income from the Microblading market thanks to the Scheduled Retouching system. Find out how you can do it too with DermoBooking.",
}) => {
  return (
    <ThemeWrapper>
      <div className={Style.listWrapper}>
        <div className={Style.titleWrapper}>
          <img src={Icon} alt="" className={Style.icon} />
          <h2 className={Style.title}>{title}</h2>
        </div>
        <Spacer sm/>
        <div className={Style.contentWrapper}>
          <p className={Style.content}>{content}</p>
        </div>
      </div>
    </ThemeWrapper>
  );
};

export default ListSix;
