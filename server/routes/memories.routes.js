const MemoryController = require("../controllers/memories.controller");


module.exports = (app) => {

    //create memory
    app.post("/api/memories", MemoryController.createMemory);

    //show all memories
    app.get("/api/memories", MemoryController.findAllMemories);

    //find one memory
    app.get("/api/memories/:id", MemoryController.findOneMemory);

    //delete a memory
    app.delete("/api/memories/:id", MemoryController.deleteMemory);

    //Edit memory
    app.put("/api/memories/:id", MemoryController.updateMemory);
}