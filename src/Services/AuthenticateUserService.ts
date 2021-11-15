import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../Repositories/UsersRepositories';
import {compare} from "bcryptjs"
import {sign} from "jsonwebtoken"
interface IAuthenticateUser{
    email:string;
    password:string;
}

class AuthenticateUserService{
    async execute({email,password}:IAuthenticateUser){
        const userRepositories = getCustomRepository(UsersRepositories);

        const user = await userRepositories.findOne({email});
        if (!user) {
            throw new Error("E-mail/password incorrect")
        }
        const passwordMatch = await compare(password,user.password)
        if (!passwordMatch) {
            throw new Error("E-mail/password incorrect")
        }
        const token = sign(
            {
                email:user.email
            },
            "secret",
            {
                subject:user.id,
                expiresIn:"1d"
            }
            )
        return token;
    }
}

export {AuthenticateUserService}