import express from "express";

import {
  getMovieByid,
  createMovie,
  getMovies,
  deleteMovieByid,
  updateMovieByName,
  getMovieByName,
} from "../helper.js";

const router = express.Router();



router
  .route("/")
  .put(async (request, response) => {
    const { name } = request.query;
    console.log(request.query, request.body);

    await updateMovieByName(name, request);

    const movie = await getMovieByName(name);
    response.send(movie);
  })
  .post(async (request, response) => {
    const data = request.body;
    const result = await createMovie(data);

    response.send(result);
  })
  .get(async (request, response) => {
    console.log(request.query);
    let filter = request.query;

    if (filter.rating) {
      filter.rating = parseInt(filter.rating);
    }
    console.log(filter);
    const movies = await getMovies(filter);
    // console.log(movies);
    response.send(movies);
  });



router
  .route("/:id")
  .delete(async (request, response) => {
    const { id } = request.params;
    // const movie = movies.find((mv) => mv.id === id);
    //    movie?  response.send(movie) : response.send({message: "no matching movies"}) ;
    const movie = await deleteMovieByid(id);

    response.send(movie ? movie : { message: "no matching movies" });
  })
  .get(async (request, response) => {
    const { id } = request.params;
    const movie = await getMovieByid(id);

    response.send(movie ? movie : { message: "no matching movies" });
  });

export const movieRouter = router;
