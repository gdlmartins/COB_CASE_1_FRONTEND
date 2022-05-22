import axios from "axios"; 
import { BASE_URL } from "../constants/urls";


export const postApi =(inputUrl, body, dataUp) => { 
 const url = `${BASE_URL}${inputUrl}`

 console.log(url, body )
  axios
     .post(url, body)
     .then((res)=> dataUp(res))
     .catch((err) => {
         alert(err.response.data)
    })
}