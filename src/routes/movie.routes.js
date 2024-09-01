import express from "express";
import { createMovie, deleteMovie, getAllMovies, getMovie, updateMovie } from "../controllers/movie.controller.js";



const movieRouter=express.Router();
movieRouter.get("/details",getAllMovies)
movieRouter.get("/:id",getMovie);
movieRouter.post("/create",createMovie);
movieRouter.patch("/:id",updateMovie);
movieRouter.delete("/:id",deleteMovie)


export{
    movieRouter
}
