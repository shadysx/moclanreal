import db from '../Firebase'
import { getId, writeDoc } from '../Firebase';


//This function fetch the instagram API, then send all the images links to firebase 
export const FetchMediaLinks = async () => {

    //Global
    const access_token = "IGQVJWYlZAqamdhRTBmemNwcFk2ZAFl4RVh5QVhKc2JMOUlhd0NuaGFET3dGQ1RYalVES1R5SkVFQVIyVFh4Ums0VDVIMDdXTHZASRzdNWUxzVjdJcVRuTWFoNlZAVWDdfbEctbHRUQlVLZAWdzbEwtV2NzRQZDZD"

    //IDS
    const limit = 25 //To get more check the result of the api request under
    const id_req = `https://graph.instagram.com/me/media?fields=id,caption&access_token=${access_token}&limit=${limit}` 
    let idList = []

    //LINKS
    let linkList = []
    let id = 0

    //IDS FETCH
    try {
        const response = await fetch(id_req)    
        const data = await response.json()
        data.data.map(obj => {
            idList.push(obj.id) 
        })
    }
    catch (err){
        console.log(err)
    }
    console.log("UseFetchMediaID")

    //Links FETCH
    for(var i = 0; i < idList.length; i++){
        try {
            id = idList[i]
            const media_req = `https://graph.instagram.com/${id}?fields=id,media_type,media_url,username,timestamp&access_token=${access_token}`
            const response = await fetch(media_req)    
            const data = await response.json()
            linkList[i] = data.media_url
        }
        catch (err){
            console.log(err)
        }
    }
    console.log("UseFetchMediaLinks")
    console.log(linkList)

    //Sending to firebase
    await writeDoc('instagram-links', '0001', linkList)
}
