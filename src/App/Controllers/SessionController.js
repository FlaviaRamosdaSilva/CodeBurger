import * as Yup from 'yup'
import User from "../models/User"

class SessionController{
    async store(request, response) {

        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required()
        })

        if (!(await schema.isValid(request.body))) {
            return response.status(400).json({ error: "Make sure your password or email are correct"})
        }

        const { email, password} = request.body

        const user = await User.findOne({  // procurar se o e-mail que tá ali já existe, para não cadastrar repetido
            where: { email}, //se ele não acha ele retorna com null e daí cai no if.
        })

        if (!user){
           return response.status(400).json({ error: "Make sure your password or email are correct"})
        }
    }
}

export default new SessionController()