import * as Yup from 'yup'
import Product from '../models/Product'
import Category from '../models/Category'
//validação dos dados que vão chegar
class ProductController {
    async store (request, response){
        const schema = Yup.object().shape({ //formato do objeto abaixo:
            name: Yup.string().required(),
            price: Yup.number().required(),
            category_id: Yup.number().required(), //após criar o relacionamento, alteramos o "category: Yup.string()" para "category_id: YUP.number"
        })
        

        // caso ele não atenda ao formato exigido acima ele vai dar erro conforme no UserControllers, dizendo o que está de errado
        try {
                await schema.validateSync(request.body, {abortEarly:false})
        } catch (err) {
                    return response.status(400).json({error: err.errors})
        }
        //arquivos validados, vamos pegalos:
        // O nosso arquivo não está no body, está dentro de um file, então temos que busca-lo no request.file
        const {filename: path} = request.file //estou pegando só o filename de dentro do file; utilizamos os ":" para dar um novo nome ao filename
        const {name, price, category_id} = request.body //após criar o relacionamento, alteramos o "category" para "category_id"

        const product = await Product.create({
            name,
            price,
            category_id, //após criar o relacionamento, alteramos o "category" para "category_id"
            path,
        });
        
        return response.json( product )
    }

    async index (request, response){
        const products = await Product.findAll({ //procure todos os produtos dentro dessa variavel //após criar o relacionamento, dentro dos parênteses vamos adicionar:
            include: [ //vamos incluir os itens abaixo:
                {
                    model: Category, //vamos pegar do model Category
                    as: 'category', // vamos chama-lo de category
                    attributes: ['id', 'name'] // e vamos pegar os itens id e name apenas
                }
            ]
        }) 

        //console.log(request.userId)

        return response.json(products)  // retorna todos os produtos
    }

}

export default new ProductController()