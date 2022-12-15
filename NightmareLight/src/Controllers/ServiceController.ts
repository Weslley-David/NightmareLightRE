import { Request, response, Response } from "express";
import { Administrator } from "../UseCases/Administrator";
import { User } from "../UseCases/User";
import { validationResult } from 'express-validator';
export class ServiceController {
    createService = async (request: Request, response: Response) => {
        try {
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(400).json({ errors: errors.array() });
            }

            const { name, description, value, userid } = request.body
            const administrator = new Administrator();
            response.status(200).json(await administrator.createService(name, userid, description, value))
        } catch (error) {
            response.status(500).json({ "status": "internal server error" })
        }
    }
    updateService = async (request: Request, response: Response) => {
        try {
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(400).json({ errors: errors.array() });
            }

            const { name, description, value, id} = request.body
            const administrator = new Administrator();
            response.status(200).json(await administrator.updateService(id, name, description, value))
        } catch (error) {
            response.status(500).json({ "status": "internal server error" })
        }
    }

    readServices = async (request: Request, response: Response) => {
        const user = new User();
        try {
            response.status(200).json(await user.readService())
        } catch (error) {
            response.status(500).json({ "status": "internal server error" })
        }
    }

    deleteService = async (request: Request, response: Response) => {
        const { ServiceId } = request.body
        try {
            const administrator = new Administrator()
            response.status(200).json(await administrator.deleteService(ServiceId))


        } catch (error) {
            response.status(500).json({ "status": "internal server error" })
        }
    }
}