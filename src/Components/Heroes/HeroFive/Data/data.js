// icons
import { GiSwordInStone, GiStoneThrone } from "react-icons/gi";

const data = [
  {
    icon: <GiSwordInStone />,
    heading: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget elit ut quam tempor commodo vel vel leo. Sed a ultrices elit. Cras lacinia facilisis volutpat. Duis tempus ut turpis dapibus auctor. Nullam quis consequat arcu. Nam vel blandit ipsum. Praesent vitae ex ornare.",
    image: module.require("../../../../Assets/backgrounds/bg_hero5_slide1.png"),
  },
  {
    icon: <GiStoneThrone />,
    heading: "Fusce eget elit ut quam tempor",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget elit ut quam tempor commodo vel vel leo. Sed a ultrices elit. Cras lacinia facilisis volutpat. Duis tempus ut turpis dapibus auctor. Nullam quis consequat arcu. Nam vel blandit ipsum. Praesent vitae ex ornare.",
    image: module.require("../../../../Assets/backgrounds/bg_hero5_slide2.png"),
  },
];

const columnGap = {
  horizontal: { xs: 50, sm: 50, md: 50, lg: 50, xl: 50, xxl: 50 },
  vertical: { xs: 50, sm: 50, md: 50, lg: 50, xl: 50, xxl: 50 },
};

export { data, columnGap };
