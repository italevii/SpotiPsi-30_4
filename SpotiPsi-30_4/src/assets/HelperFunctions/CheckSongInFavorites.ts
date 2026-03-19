
export const CheckInFavorite = (favoriteSongsList: string[], songID: string) => {
    if (favoriteSongsList.includes(songID)) {
        return true
    } else {
        return false
    }
}