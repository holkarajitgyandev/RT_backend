import express from "express";
import {createShow, deleteShow, getAllShows, getShow, updateShow} from "../controllers/show.controller.js";


const showRouter=express.Router();

showRouter.get("/details",getAllShows);
showRouter.get("/:id",getShow);
showRouter.post("/create",createShow);
showRouter.patch("/:id",updateShow);
showRouter.delete("/:id",deleteShow);



export{
    showRouter
}