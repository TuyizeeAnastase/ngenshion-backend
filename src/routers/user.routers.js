import express from "express";
import { checkUserExist,checkPasswords } from "../middleware/user.middleware";
import userController from "../controllers/user.controllers";
import { userValidation } from "../validations/user.validations";

const router = express();

router.post(
    "/signup",
    userValidation,
    checkPasswords,
    checkUserExist,
    userController.signUp
  );


export default router;  
