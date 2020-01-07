import {Router} from 'express';
const router = new Router();
const { catilla }= require ('../controllers/cartillaController');
// /bingo/cartilla
router.post('/',catilla)

export default router;