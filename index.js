import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import cookieParser from 'cookie-parser';
import connectDB from "./src/config/db.js";
import userRouter from "./src/routes/user.routes.js";
import { movieRouter } from "./src/routes/movie.routes.js";
import { showRouter } from "./src/routes/show.routes.js";
import { newsRouter } from "./src/routes/news.routes.js";


dotenv.config();

const app= express();
//middleware
app.use(express.json());
app.use(cors())
app.use(cookieParser());


//routes

app.use("/api/user",userRouter);
app.use("/api/movie",movieRouter);
app.use("/api/show",showRouter);
app.use("/api/news",newsRouter)


app.get("/",(req,res)=>{
    res.status(200).send("Welcome to the Rotten Tomatoes portal")
})

const PORT =process.env.PORT || 8000;
app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is listening on port ${PORT}`)
})

module.exports=app;
