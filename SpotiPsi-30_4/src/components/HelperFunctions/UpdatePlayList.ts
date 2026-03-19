export const UpdatePlaylist = async ( songId: string,playlistId:string) => {
    console.log(playlistId)
    try {
        const response = await fetch(`http://127.0.0.1:5001/api/playlists/${playlistId}/add`, {
            method: "POST",
            body: JSON.stringify({
                songId: songId,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const data = await response.json()
        return data
    }
    catch (error) {
        console.error(error)
    }
}