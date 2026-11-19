import jwt from 'jsonwebtoken';
import type { Types } from 'mongoose';
import type { AuthUser } from '../types/express.js';
import { env } from '../lib/env.js';

export function createToken(user: { _id: Types.ObjectId }) {
    const payload = {
        id: user._id
    }
    return jwt.sign(
        payload,
        env.JWT_SECRET,
        { expiresIn: '1d' }
    )

}

export function verifyToken(token: string): AuthUser {
    const decode = jwt.verify(token, env.JWT_SECRET);

    if (typeof decode === "string" || typeof decode.id !== "string") {
        throw new Error("Invaled token payload")
    }

    return { id: decode.id };
}