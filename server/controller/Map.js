import Movies from "../model/Movie.js";

export default async function Map(req, res) {
    try {
      const movies = await Movies.find({});
      res.json(movies)
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }