//ACTIONS

export const selectSong = data => {
  return {
    type: "SONG_SELECTED",
    payload: data
  };
};
