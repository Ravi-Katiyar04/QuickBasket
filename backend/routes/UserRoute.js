import express from "express";
const userRouter = express.Router();
import { registerUser, loginUser } from "../controllers/UserController.js";


userRouter.post("/register", registerUser);

userRouter.post("/login", loginUser);

export default userRouter;



