import { Request, Response } from "express";
import { validationResult } from 'express-validator';
import { supabase } from "../External/Database";
import { Administrator } from "../UseCases/Administrator";
import { User } from "../UseCases/User";

export class AuthController {
    public signup = async (request: Request, response: Response) => {
        try {
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(400).json({ errors: errors.array() });
            }
            const { username, password } = request.body
            const user = new User()
            response.status(200).json(await user.signin(username, password))
        } catch (error) {
            response.status(500).json({ "error": "failed signup" })
            throw new Error("Failed to Signup");
        }
    }
    public createUser = async (request: Request, response: Response) => {
        try {
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(400).json({ errors: errors.array() });
            }
            const { username, password, type } = request.body
            const user = new Administrator()
            response.status(200).json(await user.createHelloWorker(username, password, type))
        } catch (error) {
            response.status(500).json({ "error": "failed signup" })
            throw new Error("Failed to Signup");
        }
    }

    public updatePasswordUser = async (request: Request, response: Response) => {
        try {
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(400).json({ errors: errors.array() });
            }
            const { username, password, newpassword } = request.body
            const user = new Administrator()
            response.status(200).json(await user.updatePasswordHelloWorker(username, password, newpassword))
        } catch (error) {
            response.status(500).json({ "error": "failed signup" })
            throw new Error("Failed to Signup");
        }
    }

    public deleteUser = async (request: Request, response: Response) => {
        try {
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(400).json({ errors: errors.array() });
            }
            const { id } = request.body
            const user = new Administrator()
            response.status(200).json(await user.deleteHelloWorker(id))
        } catch (error) {
            response.status(500).json({ "error": "failed signup" })
            throw new Error("Failed to Signup");
        }
    }

    public listAllHelloWorkers = async (request: Request, response: Response) => {
        try {
            const user = new Administrator()
            response.status(200).json(await user.getAllHelloWorkers())
        } catch (error) {
            response.status(500).json({ "error": "failed signup" })
            throw new Error("Failed to Signup");
        }
    }
    public setValidToFalse = async (request: Request, response: Response) => {
        try {
            const { id } = request.body

            const { error } = await supabase
                .from('helloworker')
                .update({ valid: false })
                .eq('id', id)

            if (error) {
                console.log(error)
                throw new Error
            }
            response.status(200).json({ 'status': 'updated' })
        } catch (error) {
            response.status(500).json({ "status": "internal server error" })
        }
    }
    public setValidToTrue = async (request: Request, response: Response) => {
        try {
            const { id } = request.body

            const { error } = await supabase
                .from('helloworker')
                .update({ valid: true })
                .eq('id', id)

            if (error) {
                console.log(error)
                throw new Error
            }
            response.status(200).json({ 'status': 'updated' })
        } catch (error) {
            response.status(500).json({ "status": "internal server error" })
        }
    }
}
