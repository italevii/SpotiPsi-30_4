import type { Playlist } from "../types"
export const isInPlaylist = (playlists: Array<Playlist>, songID: string, playlistId: string): boolean => {
    let isInPlaylist: boolean = false
    isInPlaylist = playlists.some((playlist) => {
        if (playlist.id === playlistId) {
            if (playlist.songIds.includes(songID)) {
                return true
            }

        }
    }

    )
    return isInPlaylist
}