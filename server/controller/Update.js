import Movies from "../model/Movie.js";

export default async function Update(req, res) {
  const { id } = req.params; 
  const { title, rate, director, description, imgUrl } = req.body;

  try {
    const updatedMovie = await Movies.findByIdAndUpdate(
      id,
      { title, rate, director, description, imgUrl },
      { new: true }
    );
    res.json({ msg: "movie updated successfully", updatedMovie});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
