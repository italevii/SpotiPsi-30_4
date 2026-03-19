export const updateFavorites = async (FavoriteSongsList: string[], song: string) => {
    let path = ""
    if (!FavoriteSongsList.includes(song)) {
        path = "http://127.0.0.1:5001/api/favorites/add"
    }
    else {
        path = "http://127.0.0.1:5001/api/favorites/remove"

    }
    try {
        await fetch(path, {
            method: "POST",
            body: JSON.stringify({
                songId: song,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
    }
    catch (error) {
        console.error(error)
    }
}