// build your `/api/projects` router here

const router = require("express").Router();
const Projects = require("./model");

router.get("/", (req, res, next) => {
    Projects.get()
        .then(projects => res.json(projects))
        .catch(next)
})

router.post("/", (req, res, next) => {
    const body = req.body
    Projects.create(body)
        .then(project => res.status(201).json(project))
        .catch(next)
})

// router.use((err, req, res, next) => {
//     res.status(500).json({
//         message: "There was an error",
//         error: err.message
//     });
// }); 

module.exports = router; 

