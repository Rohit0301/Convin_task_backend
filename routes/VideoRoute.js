const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

//data
let videos = [];


 //Buckets routes 
router.get("/",  (req, res) => {
   res.send(videos)
});

router.post("/add",  (req, res) => {
   let newVideo = req.body;
   videos.push(newVideo);
   res.send("Video Created successfully")
});

router.put("/edit",  (req, res) => {
    let editVideo = req.body;
    let index = videos.findIndex((data)=>data.id==editVideo.id);
    videos[index] = editVideo;
    res.send("Video edited successfully")
 });
 

router.delete("/delete",(req,res)=>{
    const ids = req.query.ids.split(',');
    videos = videos.filter((item)=>!ids.includes(item.id));
    res.send("Deleted successfully");
})

router.put("/move",  (req, res) => {
    let moveVideo = req.body;
    let index = videos.findIndex((data)=>data.id==moveVideo.videoId);
    const video = {
        ...videos[index],
        bucketId:moveVideo.bucketId
    }
    videos[index] = video
    res.send("Video moved successfully")
 });

module.exports = router;
