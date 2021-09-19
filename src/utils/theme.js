export const getColor = ({ theme: { colors = {} } = {} } = {}, key, type) => {
  if (colors[type]) {
    return colors[type][key];
  }
  return colors[key];
};
