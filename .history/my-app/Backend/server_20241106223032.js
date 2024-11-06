import express from "express";
import userRouter from "./routes/userRouter.js";
import authRouter from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import blogRoutes from "./routes/blogRoutes.js"
import blogUserRoutes from "./routes/blogUserRouter.js"
import cors from "cors";
import connect from "./config/db.js";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { createDefaultAdmin } from "./controllers/userController.js";
dotenv.config();
//connect to DB
connect()
  .then(() => {
    console.log("Database connected.");
    createDefaultAdmin(); // Create default admin account
  })
  .catch((error) => console.error("Database connection error:", error));

const app = express();
app.use(express.json());
app.use(cors());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use(express.urlencoded({ extended: true }));
console.log(path.join(__dirname, "public/images"));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/courses", courseRoutes);
app.use("/api/v1/blog", blogRoutes)
app.use("/api/v1/blogUser", blogUserRoutes)

app.listen(process.env.PORT, () => {
  console.log("Server is running!");
});
