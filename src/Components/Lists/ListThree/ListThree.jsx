// ui-components
import ThemeWrapper from "../../ThemeWrapper/ThemeWrapper";
import Spacer from "../../UI-Kit/Spacer/Spacer";

// styles
import Style from "./ListThree.module.css";

const ListThree = ({title="Our Vesion" ,
content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit deleniti eum quaerat provident."}) => {
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

export default ListThree;
