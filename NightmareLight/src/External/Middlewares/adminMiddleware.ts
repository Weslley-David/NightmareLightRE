import { NextFunction, Request, Response } from "express";

const jwt = require('jsonwebtoken')
//console.log(secret)


export async function AdminMiddleware(request: Request, response: Response, next: NextFunction) {
    const auth = request.headers.authorization
    if (!auth) {
        return response.status(401).json('No Auth Found')
    }

    const [authType, authValue] = auth.split(' ')

    if (authType !== 'Bearer' || !authValue) {
        return response.status(401).json('Invalid Auth Type or No Auth Value')
    }

    if (!authValue) {
        return response.status(401).json('Invalid Credential')
    }

    jwt.verify(authValue, process.env.SECRET_JWT, async (err: Error, decoded: any) => {
        if (err) {
            console.log(err)
            return response.status(401).end('Invalid Token');
        } else {
            if (decoded.token !== 'acetoken' || decoded.type !== 'admin') {
                return response.status(401).end('No Privileges');
            }
            return next()
        }
    })
    //console.log(`\n Auth Middleware :) -> ${authType}->\n`)
}