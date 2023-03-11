import { model, Schema } from "mongoose";

const movies = new Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },
    rate:{
        type:Number,
        required:true,
        min:1,
        max:5
    },
   director    :{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
     imgUrl:{
        type:String,
        required:true,
        unique:true,
    },
}, {timestamps:true})
const Movies = model("movies", movies)
export default Movies