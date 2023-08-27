import Style from "./ListEleven.module.css";
import Image from "../../../Assets/icons/charIcon.png";
const ListEleven = ({
  icon = Image,
  heading = "Increase Productivity",
  content = "Increased productivity means greater output from the same amount of input & It is getting important things done consistently.",
}) => {
  return (
    <div className={Style.list}>
      <img src={icon} alt="" className={Style.image} />
      <h2 className={Style.title}>{heading}</h2>
      <p className={Style.content}>{heading}</p>
    </div>
  );
};

export default ListEleven;
