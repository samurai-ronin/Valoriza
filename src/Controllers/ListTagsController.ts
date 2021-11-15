import { Request, Response, response } from 'express';
import { ListTagsService } from '../Services/ListTagsService';

class ListTagsController{
    async handle(request:Request,response:Response){
        const listTagsService = new ListTagsService
        const tags = listTagsService.execute()
        return response.json(tags)
    }
}

export {ListTagsController}