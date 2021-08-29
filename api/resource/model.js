// build your `Resource` model here
const db = require("../../data/dbConfig");

const get = () => {
    return db("resources")
}

const create = async (body) => {
    const [resource_id] = await db("resources").insert(body)
    return db("resources").where({ resource_id }).first()
}

module.exports = {
    get,
    create
}