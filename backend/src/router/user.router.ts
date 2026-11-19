import { Router } from "express"
import { authenticaitonUser } from "../middleware/auth.middleware";

const userRouter = Router();

userRouter.post('/signup');
userRouter.post('/signin', )
userRouter.post('/logout', authenticaitonUser, )
userRouter.get('/me', authenticaitonUser, )

export default userRouter;