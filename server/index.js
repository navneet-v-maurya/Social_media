import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postsRouter from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postsRouter);

const CONNECTION_URL =
  "mongodb+srv://Nav:906790998128@cluster0.kopzx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected to our application");
  })
  .catch((error) => {
    console.log("ERROR : ", error.message);
  });

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
