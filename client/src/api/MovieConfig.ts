import { movie } from "@/interface";
import URLHOLDER from "./instance";
export const addMovie = (Data : movie )  =>
  URLHOLDER.post("/", Data).then((response) => response.data);

export const GetMovies = (Data : any)=>
  URLHOLDER.get("/", Data).then((response) => response.data);
