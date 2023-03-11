import Movies from "../model/Movie.js"
export default async function Delete(req, res, next)  {
try {
    const id = req.params.id
    await Movies.findByIdAndDelete(id)
    return res.status(200).json({msg:"movie deleted successfully"})
} catch (error) {
    return res.status(500).json({msg: "an error occurred" + error})
}
}
