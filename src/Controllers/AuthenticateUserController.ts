
import { Request, Response, response, request } from 'express';
import { AuthenticateUserService } from '../Services/AuthenticateUserService';

class AuthenticateUserController{
    async handle(request:Request,response:Response){
        const {email,password} = request.body;
        const authenticateService = new AuthenticateUserService;
        const token = await authenticateService.execute({email,password});
        return response.json(token);
    }
}

export {AuthenticateUserController}