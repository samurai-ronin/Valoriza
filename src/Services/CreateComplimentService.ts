import { getCustomRepository} from "typeorm"
import { ComplimentsRepositories } from "../Repositories/ComplimentsRepositories";
import { UsersRepositories } from "../Repositories/UsersRepositories";

interface IComplimentRequest{
    user_sender:string;
    user_receiver:string;
    tag_id:string;
    message:string;
}

class CreateComplimentService{
    async execute({user_sender,user_receiver,tag_id,message}:IComplimentRequest){
        const complimentsRepository = getCustomRepository(ComplimentsRepositories)
        const userRepository = getCustomRepository(UsersRepositories)

        if (user_receiver===user_sender) {
            throw new Error("incorrect user receiver");
        }

        const UserReceiver = await userRepository.findOne(user_receiver);

        if (!UserReceiver) {
            throw new Error("user reciever does not exists");
        }

        const compliments = complimentsRepository.create({
            user_receiver,
            user_sender,
            tag_id,
            message
        });

       await complimentsRepository.save(compliments);
       return compliments;
    }
}

export { CreateComplimentService}