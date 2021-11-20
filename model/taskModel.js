const mongoose = require('mongoose')

const {Schema,model} = mongoose
const schemaTask=new Schema ({
    name: {type: String},
    age: {Number},
    phone: {Number}
})
const tasks=model("tasks", schemaTask)

module.exports =tasks