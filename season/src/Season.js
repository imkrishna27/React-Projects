import React from "react";
import "./season.css";

const SeasonConfig = {
  summer: {
    text: "O Man ... Its So Fucking Hot ",
    iconName: "sun",
  },
  winter: {
    text: "Its Cold",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) return lat > 0 ? "summer" : "winter";
  else return lat > 0 ? "winter" : "summer";
};
const Season = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
 const {text,iconName}=SeasonConfig[season];
  return (
    <div className={`colorbg ${season}`} >
      <i className={`left-assign massive ${iconName} icon`} />
      <h1 className="text-assign">{text}</h1>
      <i className={`right-assign massive ${iconName} icon`} />
    </div>
  );
};

export default Season;
