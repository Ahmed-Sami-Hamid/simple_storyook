import Style from "./ListThirteen.module.css";
import Icon from "../../../Assets/icons/Subtract.png";

const ListThirteen = ({ icon = Icon, title = "Zenit", heading = "Company" }) => {
  return (
    <div className={Style.list}>
      <div className={Style.headingWrap}>
        <img src={icon} alt="" className={Style.image} />
        <p className={Style.heading}>{heading}</p>
      </div>
      <h3 className={Style.title}>{title}</h3>
    </div>
  );
};

export default ListThirteen;
