// social icons
import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";

const data = [
  { socialIcon: <FiFacebook />, socialLink: "https://facebook.com" },
  { socialIcon: <FiTwitter />, socialLink: "https://twitter.com" },
  { socialIcon: <FiLinkedin />, socialLink: "https://linkedin.com" },
];

const columnGap = {
  horizontal: { xs: 10, sm: 10, md: 10, lg: 10, xl: 10, xxl: 10 },
  vertical: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0, xxl: 0 },
};

export { data, columnGap };
