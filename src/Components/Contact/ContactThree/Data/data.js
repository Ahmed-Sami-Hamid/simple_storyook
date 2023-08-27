const data = [
  {
    src: module.require("../../../../Assets/icons/social/fb.svg").default,
    href: "https://facebook.com",
  },
  {
    src: module.require("../../../../Assets/icons/social/instagram.svg")
      .default,
    href: "https://www.instagram.com",
  },
  {
    src: module.require("../../../../Assets/icons/social/twitter.svg").default,
    href: "https://www.twitter.com",
  },
  {
    src: module.require("../../../../Assets/icons/social/linkedin.svg").default,
    href: "https://www.linkedin.com/",
  },
];

const columnGap = {
  horizontal: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0, xxl: 0 },
  vertical: { xs: 50, sm: 50, md: 50, lg: 50, xl: 50, xxl: 50 },
};

export { data, columnGap };
