import Sequelize from 'sequelize';
import {sequelize} from '../database/database'
import Administrador from './administrador';
const Persona=  sequelize.define('persona',{
    idpersona:{
        type:Sequelize.INTEGER,
    },
    nombre:{
        type:Sequelize.TEXT,
    },
    idcartilla:{
        type:Sequelize.INTEGER,
    }
});
Persona.hasMany(Administrador,{foreingKey:'idpersona',sourceKey:'id'});
Administrador.belongsTo(Persona,{foreingKey:'idpersona',sourceKey:'id'});
export default Persona;