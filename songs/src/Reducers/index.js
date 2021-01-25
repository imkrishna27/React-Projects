import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Candy Shop",
      duration: "4:40",
    },
    {
      title: "Eminem - Loda",
      duration: "5:00",
    },
    {
      title: " C**T Vol-1",
      duration: "5:50",
    },
    {
      title: "Veere ki Wedding",
      duration: "6:54",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers(
    {
        songs:songsReducer,
        song:selectedSongReducer
    }
)