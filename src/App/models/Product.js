import Sequelize, { Model } from "sequelize";

class Product extends Model {
    static init(sequelize){
        super.init({  //campo Id é gerado automaticamente por isso não está aqui
            name: Sequelize.STRING,
            price: Sequelize.DECIMAL(10, 2), // Defina a precisão e escala conforme necessário
            // category: Sequelize.STRING, // excluímos este item e para fazer o relacionamento desse item com outra tabela 
            path: Sequelize.STRING,
            offer: Sequelize.BOOLEAN,
            url: {
                type: Sequelize.VIRTUAL, //campo virtual não será gravado
                get(){ //mas quando der um get ele vai trazer a url e mostrar a imagem
                    return `postgresql://postgres:Ea*F5feD643E-4B2BfB6F5G6ad1eGG4d@monorail.proxy.rlwy.net:25535/railway/category-file/${this.path}` //gera pegando esse endereço mais o nome do arquivo path    
                }
            }
        },
        {
            sequelize,
        })
        return this
    }

    static associate(models){ // reacionamento, 1 produto para 1 categoria
        this.belongsTo(models.Category, { foreignKey: 'category_id', as: 'category'}) // belongsto=pertence  // pertence ao model de category,
        // a chave estrangeira (coluna) que no caso tem na minha tabela se chama "category_id" mas vamos chama-la de 'category'
        //além disso precisamos avisar o index.js (database) sobre o relacionamento
    }
}

export default Product