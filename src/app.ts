import express, { Request, Response } from "express";
import cors from "cors";
import router from "./app/modules/products/products.route";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send({
    success: true,
    message: "Welcome to the API",
  });
});

export default app;
