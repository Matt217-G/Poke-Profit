import express from "express"
import cors from "cors"
import "dotenv/config"
import {supabase}  from "./config/supabaseClient.js";
const app = express();
app.use(cors())

app.get("/health", (req, res) => {
  return res.status(200).json("server is running")
  
});



app.listen(process.env.PORT, () => console.log("Server is running on port: 3001"))