import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { connectDB } from "./Database/dataBase.js";
import route from "./routes/userRoute.js";
dotenv.config();
const app = express();
const PORT = process.env.SERVER_PORT;
app.use(bodyParser.json());
connectDB();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log("Server up and Running");
});
app.use("/api/user", route);
