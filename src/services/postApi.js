import axios from "axios"; 
import { BASE_URL } from "../constants/urls";


export const postApi =(inputUrl , body) => { 
 const url = `${BASE_URL}${inputUrl}`

 console.log("body.postApi =", body)
  axios
     .post(url, body)
     .then((res)=> {
         console.log(res)})
     .catch((err) => {
         console.log(err)
         alert(err.response.data)
    })
}