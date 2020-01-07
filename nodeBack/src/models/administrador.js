import Sequelize from 'sequelize';
import {sequelize} from '../database/database'

const Administrador=  sequelize.define('administrador',{
    idadministrador:{
        type:Sequelize.INTEGER,
    },
    noclavembre:{
        type:Sequelize.TEXT,
    },
    idpersona:{
        type:Sequelize.INTEGER,
    }
});

export default Administrador;