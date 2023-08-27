import Theme from "./Theme.module.css";

const container = {
  containerClassName: Theme.containerClass,
};

const row = {
  columnGap: {
    horizontal: {
      xs: 50,
      sm: 50,
      md: 50,
      lg: 50,
      xl: 50,
      xxl: 50,
    },
    vertical: {
      xs: 100,
      sm: 100,
      md: 100,
      lg: 100,
      xl: 100,
      xxl: 100,
    },
  },
};

const button = {
  buttonClassName: Theme.buttonClass,
  buttonDisabledClassName: Theme.buttonDisabledClass,
  loader: <div className={Theme.buttonLoader}></div>,
};

const inputField = {
  baseClassName: Theme.textFieldClass,
};

const themeExport = {
  container,
  row,
  button,
  inputField,
};

export default themeExport;
