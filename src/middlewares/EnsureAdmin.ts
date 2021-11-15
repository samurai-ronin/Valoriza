import { Response, Request, NextFunction, request } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../Repositories/UsersRepositories';
 
export async function EnsureAdmin(request:Request,response:Response,next:NextFunction){
    const {user_id} = request
    const userRepository = getCustomRepository(UsersRepositories)
    const {admin} = await userRepository.findOne(user_id);
    if (admin) {
        return next();
    }

    return response.status(401).json({
        error:"Unauthorized"
    });
}