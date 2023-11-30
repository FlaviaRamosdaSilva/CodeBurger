import Sequelize, { Model } from "sequelize";

class Product extends Model {
    static init(sequelize){
        super.init({  //campo Id é gerado automaticamente por isso não está aqui
            name: Sequelize.STRING,
            price: Sequelize.INTEGER,
            category: Sequelize.STRING,
            path: Sequelize.STRING,
            url: {
                type: Sequelize.VIRTUAL, //campo virtual não será gravado
                get(){ //mas quando der um get ele vai trazer a url e mostrar a imagem
                    return `http://localhost:3000/product-file/${this.path}` //gera pegando esse endereço mais o nome do arquivo path    
                }
            }
        },
        {
            sequelize,
        })
    }
}

export default Product