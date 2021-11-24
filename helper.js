import { client } from "./index.js";

async function updateMovieByName(name, request) {
 //const client = await createConnection();
  const result = await client
    .db("b27rwd")
    .collection("movies")
    .updateOne({ name: name }, { $set: request.body });
  return result;
}


async function getMovieByName(name) {
 //const client = await createConnection();
  return await client.db("b27rwd").collection("movies").findOne({ name: name });
}


async function getMovies(filter) {
 //const client = await createConnection();

  const movies = await client
    .db("b27rwd")
    .collection("movies")
    .find(filter)
    .toArray();
  return movies;
}


async function getMovieByid(id) {
 //const client = await createConnection();
  const movie = await client
    .db("b27rwd")
    .collection("movies")
    .findOne({ id: id });
  return movie;
}


async function createMovie(data) {
 //const client = await createConnection();
  const result = await client
    .db("b27rwd")
    .collection("movies")
    .insertMany(data);
  return result;
}


async function deleteMovieByid(id) {
 //const client = await createConnection();
  const movie = await client
    .db("b27rwd")
    .collection("movies")
    .deleteOne({ id: id });
  return movie;
}

export {
  getMovieByid,
  createMovie,
  getMovies,
  deleteMovieByid,
  updateMovieByName,
  getMovieByName,
};
