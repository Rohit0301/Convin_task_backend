const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

//data
let buckets = [
  ];


 //Buckets routes 
router.get("/",  (req, res) => {
   res.send(buckets)
});

router.post("/add",  (req, res) => {
   let newBucket = req.body;
   buckets.push(newBucket);
   res.send("Bucket Created successfully")
});

router.put("/edit",  (req, res) => {
    let editBucket = req.body;
    let index = buckets.findIndex((data)=>data.id==editBucket.id);
    buckets[index] = editBucket;
    res.send("Bucket edited successfully")
 });
 

router.delete("/delete",(req,res)=>{
    const id = req.query.id;
    buckets = buckets.filter((item)=>item.id!=id);
    res.send("Deleted successfully");
})

module.exports = router;
