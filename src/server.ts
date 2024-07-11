import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";
import { Server } from "http";

let server: Server;

(async function () {
  try {
    await mongoose.connect(
      "mongodb+srv://mahmudhassanlehri:mhlehri101@cluster0.yynznjj.mongodb.net/kbd?retryWrites=true&w=majority&appName=Cluster0mongodb+srv://mahmudhassanlehri:mhlehri101@cluster0"
    );
    console.log("db connected successfully");

    server = app.listen(config.port, () => {
      console.log(`Server running on port http://localhost:${config.port}`);
    });
    console.log(server);
  } catch (error) {
    console.log(error);
  }
})();

process.on("unhandledRejection", () => {
  console.log(`unhandledRejection is detected , shutting down ...`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on("uncaughtException", () => {
  console.log(`uncaughtException is detected , shutting down ...`);
  process.exit(1);
});
