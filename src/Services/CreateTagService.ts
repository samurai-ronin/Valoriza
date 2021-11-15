import { getCustomRepository} from "typeorm"
import { TagsRepositories } from "../Repositories/TagsRepositories"

interface IUserRequest{
    name:string;
    email:string;
    admin?:boolean
}

class CreateTagService{
    async execute(name:string){
        const tagRepository = getCustomRepository(TagsRepositories)

        if (!name) {
            throw new Error("name incorrect");
        }

        const tagAlreadyExists = await tagRepository.findOne({name});

        if (tagAlreadyExists) {
            throw new Error("Tag already exists");
        }

        const tag = tagRepository.create({
            name,
        });

       await tagRepository.save(tag);
       return tag;
    }
}

export { CreateTagService}