import { Router } from "express";
import UserController from "./App/Controllers/UserController";

const routes = new Router(); // importado conforme a documentação do Express

routes.post("/users", UserController.store)

export default routes;
