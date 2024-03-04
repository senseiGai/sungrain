const determineHeaderTextColor = (scrollOpacity) => {
  return scrollOpacity >= 0.5 ? "white" : "black";
};

export default determineHeaderTextColor;
