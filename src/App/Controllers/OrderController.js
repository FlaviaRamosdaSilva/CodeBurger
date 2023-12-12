import * as Yup from 'yup'

class OrderController{
    async store(request, response){

        const schema = Yup.object().shape({ // estou dizendo que o yup vai receber um objeto que é o request.body
            products: Yup.array().required().of(Yup.object().shape({   // o primeiro item que ele recebe é um produto do tipo array e colocamos o of pra dizer como tem que ser dentro do array:
                id: Yup.number().required(),  // vai ter um id que é number e é obrigatório
                quantity: Yup.number().required(), // vai ter uma quantidade que é number e é obrigatório
            })),   
        }) // no of informamos que o array é um objeto e shape é pra dizer como é esse objeto.

    try { //itens abaixo copiamos do UserControllers
        await schema.validateSync(request.body, {abortEarly:false})
    } catch (err) {
        return response.status(400).json({error: err.errors})
    }

      return response.status(201).json(request.body)
    }
}

export default new OrderController()
