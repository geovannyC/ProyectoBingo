import Cartilla from '../models/cartilla'

const catilla=async(req,res)=>{
    const {numero,codigo}=req.body;
 try{
    await  Cartilla.create({
        numero,
        codigo 
    },{
       fields: ['numero','codigo']
    });
if(catilla){
return res.json({
    massage:'cartilla Creada',
    data:catilla
});
}

 }catch(e){
     console.log(e)
    res.status(500).json({
        message:'no se pudo guardar la cartilla',
        data:{}
    });
 }
}
module.exports={
    catilla
}