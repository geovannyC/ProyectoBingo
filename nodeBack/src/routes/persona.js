const {Router}=require ('express');
const router =Router();
const { personas }= require ('../controllers/personaController');
// /bingo/personas
router.post('/',personas)
module.exports =router;