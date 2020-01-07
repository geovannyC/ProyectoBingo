const Sequelize = require('sequelize')

export const sequelize = new Sequelize (
    'Bingo1',
    'postgres',
    'roger130296',
    {
        host:'localhost',
        dialect:'postgres',
        pool:{
            max:5,
            min:0,
            require:30000,
            idle:10000,
        },
        logging:false,
    }
)