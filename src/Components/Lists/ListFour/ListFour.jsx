// ui-components
import ThemeWrapper from "../../ThemeWrapper/ThemeWrapper";
import Spacer from "../../UI-Kit/Spacer/Spacer";

// styles
import Style from "./ListFour.module.css";

const ListFour = ({
  title = "480+",
  content = "Clients all over the World",
}) => {
  return (
    <ThemeWrapper>
      <div className={Style.listWrapper}>
        <h2 className={Style.title}>{title}</h2>
        <Spacer />
        <p className={Style.content}>{content}</p>
      </div>
    </ThemeWrapper>
  );
};

export default ListFour;
