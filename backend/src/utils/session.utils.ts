import { type Response, type CookieOptions, response } from 'express'
import { env } from '../lib/env'

const cookiesOption: CookieOptions = {
    httpOnly: true,
    secure: env.NODE_ENV === 'production', //Cookie is sent only over HTTPS. Default: false for HTTP, true for HTTPS.
    sameSite: 'lax',
    path: '/' //URL path for which the cookie is valid. Default is /.
}

export function createSession(response: Response, cookieName: string, token: string) {
    response.cookie(cookieName, token, {
        ...cookiesOption,
        maxAge: 24 * 60 * 60 * 1000, //1 day
    })
}

export function clearSession(response: Response, cookieName: string) {
    return response.clearCookie(cookieName, cookiesOption)
}