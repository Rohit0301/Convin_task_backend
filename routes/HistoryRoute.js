const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

//data
let history = [
  ];


 //history routes 
router.get("/",  (req, res) => {
   res.send(history)
});

router.post("/add",  (req, res) => {
   const data = req.body;
   const index = history.findIndex((item)=>item.videoId==data.videoId);
   history = history.filter((item,ind)=>index!=ind);
   history.push(data);
   res.send("Added to histroy")
});


module.exports = router;
