import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connect } from "./config/database.js";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());


app.use(cors());

// DB connection func
connect();

// Routes
app.use("/api/v1", taskRoutes);


app.get("/", (req, res) => {
    res.send("This is Home Page of Task Tracker Backend");
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`App is running at port ${PORT}`);
});
