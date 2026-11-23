import type { Request, Response, NextFunction } from "express";
import { verifyToken } from "../services/tokenServices.ts";

export async function authenticaitonUser(request: Request, response: Response, next: NextFunction) {
    try {
        const token = request.headers.authorization?.split(' ')[1] ||
            request.cookies['user_Authentication_token']

        if (!token) {
            return response.status(404).json({
                message: "please login !",
                token: token
            })
        }
        const vaidateToken = verifyToken(token);

        request.user = vaidateToken;
        next();

    } catch (error) {
        return response.status(500).json({
            message: 'internal server error in middleware'
        })
    }

}  