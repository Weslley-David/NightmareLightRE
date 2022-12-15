import { Request, response, Response } from "express";
import { Administrator } from "../UseCases/Administrator";
import { User } from "../UseCases/User";
import { validationResult } from 'express-validator';
export class UserTermController {
    createUserTerm = async (request: Request, response: Response) => {
        try {
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(400).json({ errors: errors.array() });
            }

            const { name, content, userid } = request.body
            const administrator = new Administrator();
            response.status(200).json(await administrator.createUserTerm(name, content, userid))
        } catch (error) {
            response.status(500).json({ "status": "internal server error" })
        }
    }

    updateUserTerm = async (request: Request, response: Response) => {
        try {
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(400).json({ errors: errors.array() });
            }

            const {id, name, content} = request.body
            const administrator = new Administrator();
            response.status(200).json(await administrator.updateUserTerm(id, name, content))
        } catch (error) {
            response.status(500).json({ "status": "internal server error" })
        }
    }

    deleteUserTerm = async (request: Request, response: Response) => {
        try {
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(400).json({ errors: errors.array() });
            }

            const {id} = request.body
            const administrator = new Administrator();
            response.status(200).json(await administrator.deleteUserTerm(id))
        } catch (error) {
            response.status(500).json({ "status": "internal server error" })
        }
    }

    readUserTerm = async (request: Request, response: Response) => {
        try {
            const user = new User();
            response.status(200).json(await user.readUserTerm())
        } catch (error) {
            response.status(500).json({ "status": "internal server error" })
        }
    }
}