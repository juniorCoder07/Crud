import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { connectDB } from "./Database/dataBase.js";
import route from "./routes/userRoute.js";
import cors from "cors";
dotenv.config();
const app = express();
// Enable all CORS requests
app.use(cors());
const PORT = process.env.SERVER_PORT;
app.use(bodyParser.json());
connectDB();

app.get("/", (req, res) => {
  res.send("Server is up and Running");
});

app.listen(PORT, () => {
  console.log("Server up and Running");
});
app.use("/api/user", route);
