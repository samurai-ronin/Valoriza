import { Response, Request } from 'express';
import { ListUserSendComplimentsService } from '../Services/ListUserSendComplimentsService';

class ListUserSendComplimentsController{
    async handle(request:Request,response:Response){
        const {user_id} =request
        const listUserSendComplimetsService = new ListUserSendComplimentsService
        const compliments = await listUserSendComplimetsService.execute(user_id)
        return response.json(compliments)
    }

}
export {ListUserSendComplimentsController}