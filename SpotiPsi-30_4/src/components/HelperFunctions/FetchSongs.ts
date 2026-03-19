

export const fetchSongs = async  () => {
    try{
        const respone = await fetch("http://127.0.0.1:5001/api/songs");
        const data = await respone.json()
        return data
    }
    catch (error){
        console.error(error)
    }
}


