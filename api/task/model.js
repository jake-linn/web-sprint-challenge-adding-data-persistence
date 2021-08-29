// build your `Task` model here
const db = require("../../data/dbConfig");

const get = async () => {
    const tasks = await db("tasks as t")
    .join("projects as p", "t.project_id", "p.project_id")
    .select(
        "t.task_id",
        "t.task_description",
        "t.task_notes",
        "t.task_completed",
        "p.project_name",
        "p.project_description"
    )

    return tasks.map(task => {
        return {
            ...task,
            task_completed: task.task_completed === 0 ? false : true
        }
    })
}

const getById = async (task_id) => {
    const taskId = await db("tasks").where({ task_id}).first()

    return {
        ...taskId,
        task_completed: taskId.task_completed === 0 ? false : true
    }
}

const create = async (body) => {
    const [task_id] = await db("tasks").insert(body)
    return getById(task_id)
}

module.exports = {
    get,
    create
}