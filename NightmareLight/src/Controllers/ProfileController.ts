import { Request, response, Response } from "express";
import { Administrator } from "../UseCases/Administrator";
import { Moderator } from "../UseCases/Moderator";
export class ProfileController {
    readById = async (request: Request, response: Response) => {
        const user = new Moderator();
        try {
            const id = request.params.id;
            //return response.status(200).json(id)
            response.status(200).json(await user.getProfileById(id))
        } catch (error) {
            return response.status(500).json({ "status": "internal server error" })
        }
    }
    readByUsername = async (request: Request, response: Response) => {
        const user = new Moderator();
        try {
            const username = String(request.query.username);
            response.status(200).json(await user.getProfileByUsername(username))
        } catch (error) {
            response.status(500).json({ "status": "internal server error" })
        }
    }
    getStatistics = async (request: Request, response: Response) => {
        const user = new Administrator();
        try {
            response.status(200).json(await user.getStatistics())
            //return response.status(400)
        } catch (error) {
            response.status(500).json({ "status": "internal server error" })
        }
    }
    getAllProfiles = async (request: Request, response: Response) => {
        const user = new Moderator();
        try {
            response.status(200).json(await user.readAllProfiles())
            //return response.status(400)
        } catch (error) {
            response.status(500).json({ "status": "internal server error" })
        }
    }
}