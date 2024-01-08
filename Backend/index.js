import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config()

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000", // Specify allowed origin
    allowedHeaders: ["Content-Type", "Authorization", "auth"], // Include auth header
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific methods
  })
);

const apiURL = "https://apis.tollguru.com/toll/v2/origin-destination-waypoints";

let tollData;

app.get("/", async (req, res) => {
  tollData = req.query;

  console.log(tollData);
  res.json({ message: "Suceesfully" });
})

app.post("/toll", async (req, res) => {
  // try {
  //   const data = await axios.get("http://localhost:3000/");
  //   console.log(data);
  // } catch (error) {
  //   res.status(400).send(error.message);
  // }

  try {
    const data = await axios.post(
      apiURL,
      {
        headers: {
          "x-api-key": process.env.API_Key,
        },
      },
      req.body
    );
    console.log(data);
    res.send(data.data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.listen(4000, () => {
  console.log("Sucessfully Port");
});
