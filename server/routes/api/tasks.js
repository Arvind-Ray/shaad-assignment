const express = require("express");
const router = express.Router();
// Load post model
const Tasks = require("../../models/Tasks");


//adding post
router.post("/newtask", async (req, res, next) => {
	
	if (req.body.task === null) {
		return res.status(400).json({ msg: 'No task uploaded' });
	}
	await Tasks.insertMany(req.body);
	try {
		const dbResponse = await Tasks.find();
		res.status(200).json(dbResponse);
	} catch (err) {
		res.status(404).json({ err: "Something went wrong" });
	}
});

//Show all Tasks
router.get("/task",(req,res)=>{
    Tasks.find({}).then((data,err) =>{
        if(err){
            console.log(err);
			res.status(404).json({ err: "Something went wrong" });
		} else{
			res.status(200).json(data);
		}
    })
});

//Delete all Tasks

router.delete("/delete", async (req, res) => {

	await Tasks.deleteMany({})
	try {
		return res.status(200).json({msg: "Tasks deleted Successfully"});
	} catch (error) {
		return res.status(404).json({err: "Something went wrong"});
	}
})

module.exports = router;