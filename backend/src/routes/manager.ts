import express, {request,  response} from "express";
import {Manager} from "../models/manager";

const router =express.Router();
router.get('/', [], async (req:any,res:any  )=>{
    const data = await Manager.find();
    res.send(data);
});
router.post('/adddetails',async (req:any,res:any)=>{
    const{date,amount,description,fa_code,category,name} =req.body;
    console.log(req.body);
    const data = await  Manager.create({
        date: date,
        amount: amount,
        description: description,
        fa_code: fa_code,
        category:category,
        name:name,
    })
    const expense =  await  data.save()
    res.send(expense)

});

router.put('/categories/:id', (req:any,res:any)=>{
    const nid = Manager.findByIdAndUpdate(req.params.id, req.body, (err : any, nid :any)=>{

        if (err){
            res.send(err)
        }else{
            res.sendStatus(201);
        }
    });
})
router.delete('/catagories/:id',async (req:any,res:any)=>{
    const nid = Manager.deleteOne({_id:req.params.id},(err:any)=>{
        if(err){
            res.send(err)
        }else{
            res.sendStatus(201);
        }
    });

})

export{router as managerRouter}