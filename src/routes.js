import { Router } from "express";
import UserController from "./App/Controllers/UserController";
import SessionController from "./App/Controllers/SessionController";

const routes = new Router(); // importado conforme a documentação do Express

routes.post("/users", UserController.store)
routes.post("/sessions", SessionController.store)

export default routes;
