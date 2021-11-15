import { Router } from "express"
import { CreateUserControlller } from "./Controllers/CreateUserController"
import { CreateTagController } from "./Controllers/CreateTagController"
import { EnsureAdmin } from './middlewares/EnsureAdmin';
import { AuthenticateUserController } from "./Controllers/AuthenticateUserController";
import { CreateComplimentController } from "./Controllers/CreateComplimentController";
import { EnsureAuthenticated } from './middlewares/EnsureAuthenticated';
import { ListUserSendComplimentsController } from "./Controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./Controllers/ListUserReceiveComplimentsController";
import { ListTagsController } from "./Controllers/ListTagsController";
import { ListUserController } from "./Controllers/ListUserController";

const router = Router()
const createUserController = new CreateUserControlller;
const createTagController = new CreateTagController;
const authenticateUserController = new AuthenticateUserController;
const createComplimentController = new CreateComplimentController;
const listUserSendComplimentsController = new ListUserSendComplimentsController;
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController;
const listTagsController = new ListTagsController;
const listUserController = new ListUserController;

router.post("/users",createUserController.handle)
router.get("/users",listUserController.handle)
router.post("/tags",EnsureAuthenticated,EnsureAdmin,createTagController.handle)
router.get("/tags",listTagsController.handle)
router.post("/login",authenticateUserController.handle)
router.post("/compliments",EnsureAuthenticated,createComplimentController.handle)
router.get("/user/compliments/send",EnsureAuthenticated,listUserSendComplimentsController.handle)
router.get("/user/compliments/receive",EnsureAuthenticated,listUserReceiveComplimentsController.handle)

export {router}