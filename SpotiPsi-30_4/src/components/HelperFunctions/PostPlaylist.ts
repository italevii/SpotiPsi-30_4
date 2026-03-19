

export const postPlaylist = async  (playListName:string) => {
    try{
        await fetch("http://127.0.0.1:5001/api/playlists", {
        method: "POST",
        body: JSON.stringify({
            name: playListName,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});
    }
    catch (error){
        console.error(error)
    }
}


