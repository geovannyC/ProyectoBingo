import Persona from '../models/personas'

const personas=async(req,res)=>{
    const {nombre,idcartilla}=req.body;
 try{
    await  Persona.create({
        nombre,
        idcartilla 
    },{
       fields: ['nombre','idcartilla']
    });
if(personas){
return res.json({
    massage:'persona Creada',
    data:personas
});
}

 }catch(e){
     console.log(e)
    res.status(500).json({
        message:'no se pudo guardar la persona',
        data:{}
    });
 }
}
module.exports={
    personas
}