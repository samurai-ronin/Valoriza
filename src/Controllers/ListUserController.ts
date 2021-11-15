import { Request, Response, response } from 'express';
import { ListUserService } from '../Services/ListUserService';

class ListUserController{
    async handle(resquest:Request,response:Response){
        const listUserService = new ListUserService()
        const users = await listUserService.execute()
        return response.json(users)
    }
}
export {ListUserController}