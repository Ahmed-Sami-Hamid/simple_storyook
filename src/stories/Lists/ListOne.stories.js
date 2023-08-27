import {ListOne} from "./";
import {BiAperture } from "react-icons/bi"
// styling
import Style from "./list.module.css";

export default {
  title: "ListOne",
  component: ListOne,
};

export const Primary = () => <ListOne body={{heading:"this is heading" , content:"this is some content ..."}} icon={ <BiAperture /> }  />;
