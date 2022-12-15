import { Request, response, Response } from "express";
import { validationResult } from 'express-validator';
import { Moderator } from "../UseCases/Moderator";
export class SanctionController {
    createTemporarySanction = async (request: Request, response: Response) => {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        try {
            const { bantime, userban, userid } = request.body
            const user = new Moderator();
            response.status(200).json(await user.applySanctionForUser(userban, userid, bantime))
            //response.status(200).json({ 'saaaaaa': 'fasdasfd' })
        } catch (error) {
            response.status(500).json({ "status": "internal server error" })
        }
    }
    createPermanentSanction = async (request: Request, response: Response) => {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        try {
            const { userban, userid } = request.body
            const user = new Moderator();
            response.status(200).json(await user.applyPermanentSanctionForUser(userban, userid))
            //response.status(200).json({ 'saaaaaa': 'fasdasfd' })
        } catch (error) {
            response.status(500).json({ "status": "internal server error" })
        }
    }

    revogueSanction = async (request: Request, response: Response) => {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        try {
            const { userban} = request.body
            const user = new Moderator();
            response.status(200).json(await user.revogueSanctionForUser(userban))
            //response.status(200).json({ 'saaaaaa': 'fasdasfd' })
        } catch (error) {
            response.status(500).json({ "status": "internal server error" })
        }
    }
}