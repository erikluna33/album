// const { deleteOne } = require("../models/memories.model");
const MemoryModel = require(`../models/memories.model`);

module.exports = {
    
    createMemory:(req, res)=>{
        MemoryModel.create(req.body)
            .then((newMemory)=>{
                return res.json(newMemory)
            })
            .catch((err)=>{
                res.status(400).json(err)
            })
    },
    findAllMemories:(req, res)=>{
        MemoryModel.find({})
            .then((showAllMemories)=>{
                console.log("Inside find all memories")
                res.json(showAllMemories);
            })
            .catch((err)=>{
                console.log(err);
                res.json(err);
            })
    },
    findOneMemory: (req, res)=>{
        MemoryModel.findById({_id:req.params.id})
            .then((memoryObject)=>{
                console.log("Found memory id was a success")
                return res.json(memoryObject)
            })
            .catch((err)=>{
                console.log(err);
                return res.json(err);
            })

    },
    deleteMemory: (req, res)=>{
        MemoryModel.deleteOne({_id:req.params.id})
            .then((deleteMemory)=>{
                console.log("Success in deleting memory")
                return res.json(deleteMemory)
            })
            .catch((err)=>{
                return res.json(err)
            })
    },
    updateMemory: (req, res)=>{
        MemoryModel.findOneAndUpdate({_id:req.params.id},
            req.body,
            {new:true, runValidators: true})
            .then((updatedMemory)=>{
                console.log("Success in updating memory")
                res.json(updatedMemory)
            })
            .catch((err)=>{
                console.log(`There was an error in updating memory. The error is ${err}`)
            })
            
    }
}