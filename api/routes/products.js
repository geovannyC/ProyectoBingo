const express = require('express');
const router = express.Router();
const rec = require('../js/bingo')
rec.exportar();
let mitabla=rec.tabla();
router.get('/', (req, res, next) =>{
    rec.exportar();
    res.status(200).json(JSON.stringify(mitabla))
    
    
});
router.post('/', (req, res, next) =>{
    res.status(200).json({
        message: 'HOLA USO POST'
    })
});
router.get('/:productID', (req, res, next) =>{
    const id = req.params.productID;
    if (id === 'special'){
        res.status(200).json({
            message: 'acabas de descubrir e id especial'
        });
    }else{
        res.status(200).json({
            message: 'no soy el ID'
        })
    }
})
module.exports = router;