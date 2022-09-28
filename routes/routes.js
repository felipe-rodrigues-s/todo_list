const Router = require ("express")
const {getAllTasks, createTask, getById, updateOneTask} = require ("../controller/TaskController.js")

const router = Router();

router.get('/home', getAllTasks)
router.get('/home/getById/:id/:method', getById)
router.post('/home/create', createTask)
router.post('/home/updateOne/:id', updateOneTask)

module.exports = router