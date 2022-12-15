import { Request, response, Response } from "express";
import { validationResult } from "express-validator";
import { Administrator } from "../UseCases/Administrator";
import { Moderator } from "../UseCases/Moderator";
import { User } from "../UseCases/User";
export class DenounceController {
    readDenounce = async (request: Request, response: Response) => {
        const user = new Administrator();
        try {
            response.status(200).json(await user.getDenoncedUsers())
        } catch (error) {
            response.status(500).json({ "status": "internal server error" })
        }
    }

    readDenounceOfUser = async (request: Request, response: Response) => {
        const user = new Moderator();


        const id = request.params.id;

        try {
            response.status(200).json(await user.getDenouncesOfUser(id))
        } catch (error) {
            response.status(500).json({ "status": "internal server error" })
        }
    }
    readDenounceFromUser = async (request: Request, response: Response) => {
        const user = new Moderator();


        const id = request.params.id;
        
        try {
            response.status(200).json(await user.getDenouncesFromUser(id))
        } catch (error) {
            response.status(500).json({ "status": "internal server error" })
        }
    }

    markAsSolved = async (request: Request, response: Response) => {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }

        const user = new Moderator();
        try {
            const { id } = request.body
            response.status(200).json(await user.MarckAsSolvedDenounce(id))
        } catch (error) {
            response.status(500).json({ "status": "internal server error" })
        }
    }

    readById = async (request: Request, response: Response) => {
        const user = new Moderator();
        try {
            const id = request.params.id;
            //return response.status(200).json(id)
            response.status(200).json(await user.getDenounceById(id))
        } catch (error) {
            return response.status(500).json({ "status": "internal server error" })
        }
    }

    createDenounce = async (request: Request, response: Response) => {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }
        const { userid, denouncedusername, reason } = request.body
        const user = new User();
        try {
            response.status(200).json(await user.createDenounceUsers(userid, reason, denouncedusername))
        } catch (error) {
            response.status(500).json({ "status": "internal server error" })
        }
    }
}