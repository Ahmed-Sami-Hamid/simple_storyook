import { MdPlace, MdOutlineAccessTimeFilled } from "react-icons/md";
import { BsArrowUpRight } from "react-icons/bs";

// Style
import Style from "./ListTen.module.css";

const ListTen = ({
  title = "design",
  position = "Product designer",
  Link = "Apply for this job",
  place = "remote",
  time = "full time",
}) => {
  return (
    <div className={Style.list}>
      <div className={Style.jobTitle}>{title}</div>
      <div className={Style.jobPostionWrap}>
        <div className={Style.jobPostion}> {position} </div>
        <div className={Style.jobLink}>
          {Link}
          <span className={Style.icon}>
            <BsArrowUpRight />
          </span>
        </div>
      </div>

      <div className={Style.jobInfo}>
        <span className={Style.infoText}>
          <MdPlace className={Style.infoIcon} />
          {place}
        </span>
        <span className={Style.infoText}>
          <MdOutlineAccessTimeFilled className={Style.infoIcon} />
          {time}
        </span>
      </div>
    </div>
  );
};

export default ListTen;
