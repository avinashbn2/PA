const base = {
  fonts: {},
  fontSizes: {
    h1: "6rem",
    h2: "4rem",
    h3: "2.5rem",
    h4: "1.25rem",
    h5: "1rem",
    h6: "1rem",
  },
  fontWeights: {},
};
export const light = {
  colors: {
    background: "rgba(235, 255, 240, 0.25)",
    background2: "#FCECA5",
    fieldBg: "rgb(243,243,244)",
    primary: {
      main: "#cbc7fc",
      light: "#fffaff",
      dark: "#9a96c9",
    },
    secondary: {
      main: "#b5eecb",
      light: "#e8fffe",
      dark: "#84bb9a",
    },
    text: {
      dark: "#000",
      main: "#2c404c",
      light: "#808080",
    },

    accent: "",
    error: "#ff7961",
    warning: "#f57c00",
    success: "#80e27e",
  },
  ...base,
};
export const dark = {
  colors: {
    text: "",
    background: "",
    primary: {
      main: "",
      light: "",
      dark: "",
    },
    secondary: {
      main: "",
      light: "",
      dark: "",
    },
    accent: "",
    error: "",
    warning: "",
    success: "",
  },
  ...base,
};
