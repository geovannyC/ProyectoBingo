import Sequelize from 'sequelize';
import {sequelize} from '../database/database'
import Persona from './personas';

const Cartilla=  sequelize.define('cartilla',{
    idcartilla:{
        type:Sequelize.INTEGER,
    },
    numero:{
        type:Sequelize.TEXT,
    },
    codigo:{
        type:Sequelize.TEXT,
    }
});
Cartilla.hasMany(Persona,{foreingKey:'idcartilla',sourceKey:'id'});
Persona.belongsTo(Cartilla,{foreingKey:'idcartilla',sourceKey:'id'});
export default Cartilla;