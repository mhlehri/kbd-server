import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const p = process.env;

export default {
  port: p.PORT,
};
