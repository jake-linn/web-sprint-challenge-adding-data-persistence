// build your `Project` model here
const db = require("../../data/dbConfig")

const get = async() => {
    const projects = await db("projects")

    return projects.map(project => {
        return{
            ...project,
            project_completed: project.project_completed === 0 ? false:true
        }
    })
}

const getById = async (project_id) => {
    const projectID = await db("projects").where({project_id}).first()

    return{
        ...projectID,
        project_completed: project_id.project_completed === 0 ? false: true 
    }
}

const create = async (body) => {
    const [project_id] = await db("projects").insert(body)
    return getById(project_id)
}

module.exports = {
    get,
    getById,
    create
}