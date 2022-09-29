const Router = require ("express")
const {getAllTasks, createTask, getById, updateOneTask, deleteOneTask, taskCheck} = require ("../controller/TaskController.js")

const router = Router();

router.get('/home', getAllTasks)
router.get('/home/getById/:id/:method', getById)
router.get('/home/deleteOneTask/:id/', deleteOneTask)
router.get('/home/check/:id/', taskCheck)
router.post('/home/create', createTask)
router.post('/home/updateOne/:id', updateOneTask)

module.exports = router