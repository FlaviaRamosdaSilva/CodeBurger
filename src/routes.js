import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import UserController from "./App/Controllers/UserController";
import SessionController from "./App/Controllers/SessionController";
import ProductController from "./App/Controllers/ProductController";

const upload = multer(multerConfig) // criamos a variável com o Multer + config que criamos ao usar o Multer e vamos usa-la na rota dos produtos

const routes = new Router(); // importado conforme a documentação do Express

routes.post("/users", UserController.store)
routes.post("/sessions", SessionController.store)
routes.post("/products", upload.single("file"), ProductController.store) //single por que vamos deixar fazer upload de apenas um arquivo / single pede um nome em string
//nesta rota vamos juntar o multer e o Productcontroller para que no insomnia nós adicionarmos
//um arquivo [upload.single] + as informações do arquivo[ProductController] e todos chegarem junto no banco de dados
routes.get('/products', ProductController.index) // rota de get para mostrar todos o nossos produtos

export default routes;
