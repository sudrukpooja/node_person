const express = require('express');
const router = express.Router();
const Person =require('../model/person');

router.post('/', async(req, res) => {
    try{
     const data = req.body;
     const newPerson = new Person(data); //create  a new person document using the  mongoose model//
     
     //save the  new person to the database//
     const response = await newPerson.save();
     console.log('data saved');
     res.status(200).json(response);
    
    }catch(err){
     console.log(err);
     res.status(500).json({error:'Internal server error'});
    }
 });

 router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
       console.log("data fatched");
       res.status(200).json(data)
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});



router.get('/getbytype/:workType',async(req,res)=>{
    try{
        const workType = req.params.workType;
        if(workType=='chef' || workType=='manager' || workType=='waiter'){
            const response = await Person.find({work:workType});
            console.log("data fatched");
            res.status(200).json(response);
        }else{
            res.status(404).json({error:'invalid work type'})
        }

    }catch(err){
        console.log(err);
        res.status(500).json("internal server error")
    }
})


router.get('/getbyid/:id', async (req, res) => {
    try {
      const person = await Person.findById(req.params.id);
      if (!person) {
        return res.status(404).json({ message: 'Person not found' });
      }
      res.json(person);
    } catch (error) {
      console.error('Error fetching person:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

 router.get('/getbyname/:name', async (req, res)=>{
    try {
        const personname = await Person.findOne({name: req.params.name});
        if (!personname) {
          return res.status(404).json({ message: 'Person not found' });
        }
        res.json(personname);
       
    }catch(err){
        console.log(err);
        res.status(500).json('internal server error')
    }
  })

 router.put('/:id', async (req, res)=>{
    try{
        const personId = req.params.id;
        const updatePerson = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatePerson,{
            new : true,
            runValidators : true,
        })
        if(!response){
            return res.status(404).json({error:'person not found'})
        }
        console.log(' data update ');
        res.status(200).json(response)
    }catch(err){
        console.log(err);
        res.status(500).json('internal server error');
    }
 })

 router.delete('/:id', async (req, res)=>{
    try{
         const personId = req.params.id;
         const response = await Person.findByIdAndDelete(personId);
         
         if(!response){
            return res.status(404).json({error:'person not found'})
         }
         console.log('data deleted');
         res.status(200).json({response:'person deleted succesfully'})
    }catch(err){
        console.log(err);
        res.status(500).json('internal serve error')
    }
 })

 module.exports = router;