import { Router } from "express"
import { authenticaitonUser } from "../middleware/auth.middleware";
import { getUser, logoutUser, registerUser, userLogin } from "../controller/user.controller";

const userRouter = Router();

userRouter.post('/signup',registerUser);
userRouter.post('/signin',userLogin)
userRouter.post('/logout', authenticaitonUser, logoutUser)
userRouter.get('/me', authenticaitonUser, getUser)

export default userRouter;