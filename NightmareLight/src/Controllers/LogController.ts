import { Request, response, Response } from "express";
import { User } from "../UseCases/User";
export class LogController {
    readLogs = async (request: Request, response: Response) => {
        const user = new User();
        try {
            response.status(200).json(await user.readLogs())
        } catch (error) {
            response.status(500).json({ "status": "internal server error" })
        }
    }
    readAllLogs = async (request: Request, response: Response) => {
        const user = new User();
        try {
            response.status(200).json(await user.readAllLogs())
        } catch (error) {
            response.status(500).json({ "status": "internal server error" })
        }
    }
}