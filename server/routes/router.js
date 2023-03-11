import { Router } from "express";
import Delete from "../controller/Delete.js";
import Map from "../controller/Map.js";
import Poster from "../controller/Poster.js";
import Update from "../controller/Update.js";
const router = Router()
router.get('/', Map)
router.post('/', Poster)
router.put('/:id', Update)
router.delete('/:id', Delete)
export default router