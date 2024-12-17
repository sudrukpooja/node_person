const express = require('express');
const router = express.Router();
const menuItem = require('../model/menu')

router.post('/', async(req,res)=>{
    try{

        const data = req.body;
        const newMenu = new menuItem(data);

        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);


    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});
    }
})

router.get('/', async(req,res)=>{
    try{

            const data = await menuItem.find();
            console.log("data fatched");
             res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'})
    }
});

router.get('/:tasteType', async (req, res) => {
    try {
        const tasteType = req.params.tasteType;
        if(tasteType=='spicy' || tasteType=='sweet' || tasteType=='sour'){
            const response = await menuItem.find({ taste:tasteType});
            console.log('data fatched');
            res.status(200).json(response)
        }else{
           res.status(404).json({error:"invalid test type"});
        }
    }catch(err){
        res.status(500).json("internal server error");
    }

})

router.put('/:id', async (req,res)=>{
    try{
        const menuID = req.params.id;
        const updateMenu = req.body;

        const response = await menuItem.findByIdAndUpdate(menuID,updateMenu,{
            new : true,
            runValidators: true,
        })
        if(!response){
            res.status(404).json({error:'person not foundt'});
        }
        console.log('menu updated');
        res.status(200).json(response)

    }catch(err){
        console.log(err);
        res.status(500).json('internal server error')
    }
})

//comment added for testing
module.exports = router;
