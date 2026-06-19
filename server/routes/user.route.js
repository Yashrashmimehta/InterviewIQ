import express from 'express';
import { getCurrentUser } from '../controller/user.controller.js';
import {isAuth} from '../middleware/isAuth.js';

export const userRouter = express.Router();

userRouter.get("/current-user", isAuth, getCurrentUser)