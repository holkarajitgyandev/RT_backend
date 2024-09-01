import express from "express";
import { createNews, deleteNews, getAllNews, getNews, updateNews } from "../controllers/news.controller.js";



const newsRouter=express.Router();
 newsRouter.get("/details",getAllNews);
 newsRouter.get("/:id",getNews);
 newsRouter.post("/create",createNews);
 newsRouter.patch("/:id",updateNews);
 newsRouter.delete("/:id",deleteNews);

 export {
    newsRouter
 }