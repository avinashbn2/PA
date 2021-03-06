const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  desktopS: "1024px",
  desktopM: "1300px",
  desktopL: "1600px",
};
export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  desktopS: `(min-width: ${size.desktopS})`,
  desktopM: `(min-width: ${size.desktopM})`,
  desktopL: `(min-width: ${size.desktopL})`,
};

export const deviceMax = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  desktopS: `(max-width: ${size.desktopS})`,
  desktopM: `(max-width: ${size.desktopM})`,
  desktopL: `(max-width: ${size.desktopL})`,
};
