import Task from "../models/task.js"

const getSpecificTask = async (req, res) => {
    try {
        const { userID, dateID } = req.query;
        if (userID) {
            const tasks = await Task.find({ userID, dateID });
            res.status(200).json({ tasks });
        }

    } catch (error) {
        res.status(500).json({ error: error });
    }
}

const getAllTask = async (req, res) => {
    try {
        const { userID } = req.query;
        const tasks = await Task.find({ userID });
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task });
        // res.json("task ok")
    } catch (error) {
        res.status(500).json({ msg: error });
    }

}
const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true })

        if (!task) { return res.status(404).json({ msg: `No task with id:${taskID}` }) }

        res.status(200).json({ task });


    } catch (error) {
        res.status(500).json({ msg: error });
    }
    // res.send("update task");
}
const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndDelete(taskID);
        if (!task) {
            return res.status(404).json({ msg: `No task with id:${taskID}` })
        }
        res.status(200).send(`Task with id:${taskID} deleted`)
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}


export {
    getSpecificTask,
    createTask,
    updateTask,
    deleteTask,
    getAllTask
}
