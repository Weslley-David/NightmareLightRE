import { Request, response, Response } from "express";
import { supabase } from "../External/Database";
import { User } from "../UseCases/User";
export class InfraController {
    revoguesanctions = async (request: Request, response: Response) => {
        try {

            const { data, error } = await supabase.rpc('delete_denouce()')
            if(error){
                console.log(error)
                throw new Error
            }
            response.status(200).json(data)
        } catch (error) {
            response.status(500).json({ "status": "internal server error" })
        }
    }
}