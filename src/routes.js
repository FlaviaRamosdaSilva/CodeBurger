import { Router } from "express";

const routes = new Router(); // importado conforme a documentação do Express

routes.get("/", (_, response) => {
  return response.json({ message: "Hello Word" }); // primeira rota para dar uma mensagem de sucesso na tela
});

export default routes;
