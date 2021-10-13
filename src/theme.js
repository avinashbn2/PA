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
    bgGradient: "#fff",
    primary: {
      main: "#cbc7fc",
      light: "#fffaff",
      dark: "#9a96c9",
    },
    secondary: {
      main: "#34BFAF",
      dark: "#185952",
      light: "#3BD9C6",
    },

    secondaryold: {
      main: "#b5eecb",
      light: "#e8fffe",
      dark: "#84bb9a",
    },
    text: {
      dark: "#000",
      main2: "#14213d",
      main: "#2c404c",
      light: "#edf6f9",
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
