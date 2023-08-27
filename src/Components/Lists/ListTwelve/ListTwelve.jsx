import Style from "./ListTwelve.module.css";

const ListTwelve = ({
  number = "01.",
  heading = "Crescita",
  content = "Una realtà in continua evoluzione che sta continuando a crescere,nonostante la crisi dell’auto e dei chip.",
}) => {
  return (
    <div className={Style.list}>
      <div className={Style.number}>{number}</div>
      <h3 className={Style.heading}>{heading}</h3>
      <p className={Style.content}>{content}</p>
    </div>
  );
};

export default ListTwelve;
