
import Movies from "../model/Movie.js";

export default async function Poster(req , res) {
 try {
       const {imgUrl , director , description , title , rate} = req.body
   const movie = new Movies({imgUrl, director, description , title , rate})
   await movie.save()
   return res.status(201).json({msg:"movie added successfully", movie})
   
 } catch (error) {
    return res.status(500).json({msg: String(error)})
 }
}
