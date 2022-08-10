const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

//data
let buckets = [
    { id: 1, name: "Sample Bucket 1" },
    { id: 2, name: "Sample Bucket 2" },
    { id: 3, name: "Sample Bucket 3" },
    { id: 4, name: "Sample Bucket 4" },
    { id: 5, name: "Sample Bucket 5" },
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
