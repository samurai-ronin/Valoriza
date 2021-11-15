import { getCustomRepository } from 'typeorm';
import { ComplimentsRepositories } from '../Repositories/ComplimentsRepositories';

class ListUserSendComplimentsService{
    async execute(user_id:string){

        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

        const compliments = complimentsRepositories.find({
            where:{
                user_sender:user_id
            },
            relations:["UserSender","tag","UserReceiver"]
        })

        return compliments
    }
}

export {ListUserSendComplimentsService}