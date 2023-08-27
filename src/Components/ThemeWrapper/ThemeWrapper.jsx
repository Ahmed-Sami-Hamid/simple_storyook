// ui-kit
import { ThemeProvider } from "@hybris-software/ui-kit";

// theme
import Theme from "./Theme/Theme";

const ThemeWrapper = ({ children }) => {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
