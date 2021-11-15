import { Response, Request, NextFunction, request, response } from 'express';
import {verify} from "jsonwebtoken"
 
interface IPayload{
    sub:string;
}
export function EnsureAuthenticated(request:Request,response:Response,next:NextFunction){
   const authToken = request.headers.authorization;

   if (!authToken) {
       return response.status(401).end();
   }

   const [,token] = authToken.split(" ");

   try {
       const {sub} = verify(token,"secret") as IPayload
       request.user_id = sub
       return next()
   } catch (error) {
    return response.status(401).end();
   }
}