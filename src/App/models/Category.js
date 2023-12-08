import Sequelize, { Model } from "sequelize";

class Category extends Model {
    static init(sequelize){
        super.init({  //campo Id é gerado automaticamente por isso não está aqui
            name: Sequelize.STRING,
            
        },
        {
            sequelize,
        })
    }
}

export default Category