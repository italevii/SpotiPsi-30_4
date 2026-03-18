const fetchSongs = async  () => {
    try{
        const respone = await fetch("https://127.0.0.1:5001/api/songs/");
        const data = await respone.json()
        console.log(data)
        return data
    }
    catch (error){
        console.error(error)
    }
}

export default fetchSongs