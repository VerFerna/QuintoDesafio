import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const url = `mongodb+srv://vfdizayner:<ccs123++>@cluster0.9qm69d3.mongodb.net/M&M?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(url, {
  dbName: process.env.DB_MONDO_DB,
});

export const mongodb = mongoose.connection;
mongodb.on("error", console.error.bind(console, "MongoDB connection error:"));
mongodb.once("open", () => console.log("Connected to MongoDB successfully."));

process.on("SIGINT", () => {
  mongodb.close(() => {
    console.log("Connection to MongoDB closed");
    process.exit(0);
  });
});


