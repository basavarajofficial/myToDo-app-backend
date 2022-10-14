const ToDoModel = require('../models/ToDOModel')

module.exports.getToDO = async (req, res) => {
    const toDo = await ToDoModel.find()
    res.send(toDo)
}

module.exports.saveToDo = async (req, res) => {

    const { text } = req.body

    ToDoModel
    .create({text})
    .then((data) => {
        console.log("Addes successfully..");
        console.log(data);
        res.send(data)
    })
  
}

module.exports.updateToDO = async (req, res) => {
    const {_id, text } = req.body

    ToDoModel
    .findByIdAndUpdate(_id, {text})
    .then(() => res.set(201).send("Updated successfully"))
    .catch((err) => console.log(err))
}


module.exports.deleteToDO = async (req, res) => {
    const {_id } = req.body

    ToDoModel
    .findByIdAndDelete(_id)
    .then(() => res.set(201).send("Deleted successfully"))
    .catch((err) => console.log(err))
}