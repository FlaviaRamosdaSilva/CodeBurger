import * as Yup from 'yup'
import Category from '../models/Category'
//validação dos dados que vão chegar
class CategoryController {
    async store (request, response){
        const schema = Yup.object().shape({ //formato do objeto abaixo:
            name: Yup.string().required(),
        })
        

        // caso ele não atenda ao formato exigido acima ele vai dar erro conforme no UserControllers, dizendo o que está de errado
        try {
                await schema.validateSync(request.body, {abortEarly:false})
        } catch (err) {
                    return response.status(400).json({error: err.errors})
        }
        //arquivos validados, vamos pegalos:
        // O nosso arquivo está no body, então:       
        const {name} = request.body

        const categoryExists = await Category.findOne({  // procurar se a categoria que tá ali já existe, para não cadastrar repetido
            where: { name }, //se ele não acha ele retorna com null e daí cai no if.
        })
        if (categoryExists){
           return response.status(400).json({ error: 'Category already exists'}) // erro avisando que já existe
        }

        const { id } = await Category.create({ name });
        
        return response.status(201).json({ id, name })
    }

    async index (request, response){
        const categories = await Category.findAll() //procure todos as categorias dentro dessa variavel

        return response.json(categories)  // retorna todos as categorias
    }

}

export default new CategoryController()