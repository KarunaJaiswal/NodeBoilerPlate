import express from 'express';
import verifyToken from '../middleware/verifyToken.js'
import validation from "../validations/validation.js";
import userValidation from '../validations/user.validation.js'
import userController from '../controller/user.controller.js';

const userRouter = express.Router();

userRouter.post('/create-user',verifyToken, validation(userValidation.createUser), userController.registerUser);

export default userRouter;