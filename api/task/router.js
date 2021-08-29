// build your `/api/tasks` router here
const router = require("express").Router();
const Tasks = require("./model");

router.get("/", (req, res, next) => {
    Tasks.get()
        .then(tasks => res.json(tasks))
        .catch(next)
})

router.post("/", (req, res, next) => {
    const body = req.body
    Tasks.create(body)
        .then(task => res.status(201).json(task))
        .catch(next)
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
      message: "There was an error",
      error: err.message
    });
  });

module.exports = router;