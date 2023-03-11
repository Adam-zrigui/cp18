import { movie } from "@/interface"
import { Link, Route, Routes  } from "react-router-dom"

export default function List(props : any) {
 
 
  return (
     <div className="container">
{props.movies.map((movie :  movie ,i: number) =>  {
return (
<div key={i} className="holder">
<img src={movie.imgUrl} className='poster' alt='' />
<p className="title ghost">{movie.title}</p>
</div>)})}
  
</div>
  )
}