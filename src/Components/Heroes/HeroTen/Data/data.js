const data = [
  {
    imageUrl: module.require(
      "../../../../Assets/backgrounds/bg_hero_b10_a1.png"
    ),
    heading: "Lorem ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at tristique ex, ac blandit metus.",
  },
  {
    imageUrl: module.require(
      "../../../../Assets/backgrounds/bg_hero_b10_a2.png"
    ),
    heading: "Quisque neque",
    content:
      "Ut et pulvinar augue, in semper est. Quisque neque est, tincidunt quis tincidunt id, scelerisque ac purus.",
  },
];

const columnGap = {
  horizontal: { xs: 50, sm: 50, md: 50, lg: 50, xl: 50, xxl: 50 },
  vertical: { xs: 50, sm: 50, md: 50, lg: 50, xl: 50, xxl: 50 },
};

export { data, columnGap };
