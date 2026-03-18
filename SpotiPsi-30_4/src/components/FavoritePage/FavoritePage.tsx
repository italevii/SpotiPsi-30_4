
interface Props {
    songList: Array<Object>;
    favoriteSongs: Array<string>;
}
const FavoritePage = ({ songList, favoriteSongs }: Props) => {

    const favoriteSongslist: Array<Object> = songList.filter((item:Object) => 
        favoriteSongs.includes(item.id))
    return (
        <>
        {/* <SongsTable songList={favoriteSongslist} /> */}
        </>
    )
}

export default FavoritePage