import * as Yup from 'yup'
import User from "../models/User"

class SessionController{
    async store(request, response) {

        const schema = Yup.object().shape({ //formato do objeto abaixo
            email: Yup.string().email().required(),
            password: Yup.string().required()
        })

        // pra entrar no if os dados precisam estar true, porém eu preciso usar  if se os docs estiverem false, então colocamos o ponto de exclamação antes da função:
        if (!(await schema.isValid(request.body))) { //aqui eu aviso apenas que ele errou mas não posso dizer se foi  e-mail ou senha pra ficar mais seguro
            return response.status(400).json({ error: "Make sure your password or email are correct"})
        }

        const { email, password} = request.body

        const user = await User.findOne({  // procurar se o e-mail que tá ali já existe, para não cadastrar repetido
            where: { email}, //se ele não acha ele retorna com null e daí cai no if.
        })
        //caso o usuário de false (denovo usamos o ponto de exclamação pq o if aceita só o true e com o ! ele inverte para false)
        if (!user){
           return response.status(400).json({ error: "Make sure your password or email are correct"})
        }
        // caso o usuário tenha inserido a senha incorreta, entra neste if (novamente o ! pq tem que ser false pra entrar aqui)
        if(!(await user.checkPassword(password))){ //o checkPassoword vem do model User onde ele compara a senha digitada com a criptografada
            return response.status(401).json({ error: "Make sure your password or email are correct"})
        }
        
        return response.json({ //aqui será a resposta que eu vou receber depois de todas as confirmações que foram feitas acima, caso estja tudo correto.
            id: user.id,
            email,
            name: user.name,
            admin: user.admin,
        })
    }
}

export default new SessionController()