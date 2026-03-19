import type { Playlist } from "../../assets/types"
export const checkIfPlaylistExists = (playlists: Array<Playlist> ,playlistName: string): boolean => {
    let isInPlaylist: boolean = false
    isInPlaylist = playlists.some((playlist) => {
            if (playlist.name === playlistName) {
                return true
            }
        })

    return isInPlaylist
}