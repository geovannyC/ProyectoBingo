import express, {json}from 'express'
import morgan from 'morgan'

//importar Routes
import personas from './routes/persona';
import cartilla from './routes/cartilla';
import administrador from './routes/administrador';
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/bingo/personas',personas);
app.use('/bingo/cartilla',cartilla);
app.use('/bingo/administrador',administrador);
module.exports =app;