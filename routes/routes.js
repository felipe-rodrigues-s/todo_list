const Router = require ("express")
const {getAllTasks, createTask} = require ("../controller/TaskController.js")

const router = Router();

router.get('/home', getAllTasks)
router.post('/home/create', createTask)

module.exports = router