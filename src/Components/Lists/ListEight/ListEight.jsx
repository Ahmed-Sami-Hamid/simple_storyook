// Avatars
import bgImage from "../../../Assets/avatars/avatar_t4.png";

// Icon
import Image from "../../../Assets/icons/shap.svg";

// Style
import Style from "./ListEight.module.css";

const ListEight = ({
  title = "metaverse",
  showAvatar = false,
  showInnerImage = false,
  avatar = bgImage,
  shape = Image,
  children,
}) => {
  return (
    <div className={Style.listWrapper}>
      {avatar && showAvatar && (
        <div
          className={Style.image}
          style={{ backgroundImage: `url(${avatar})` }}
        />
      )}
      <div className={Style.wrap}>
        {shape && showInnerImage && (
          <img className={Style.shape} src={shape} alt="" />
        )}

        <h2 className={Style.title}>{children || { title }}</h2>
      </div>
    </div>
  );
};

export default ListEight;
