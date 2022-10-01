const Router = require("express");

const getAllTasks = require("../controller/GetTask");
const createTask = require("../controller/CreateTask");
const updateOneTask = require("../controller/UpdateTask");
const taskCheck = require("../controller/TaskCheck");
const deleteTask = require("../controller/DeleteTask");

// const {
//   getById,
// } = require("../controller/TaskController.js");

const router = Router();

router.get("/", (request, response) => {
  return response.json({
    connection: `Conectado com sucesso`,
    taskRoutes: {
      all: "/tasks",
      create: "/task/create",
      update: "/task/update/:id",
      check: "/task/check/:id/",
      delete: "/task/delete/:id/",
    },
  });
});

router.get("/tasks", getAllTasks);
router.post("/task/create", createTask);
router.put("/task/update/:id", updateOneTask);
router.put("/task/check/:id/", taskCheck);
router.delete("/task/delete/:id/", deleteTask);

// router.get("/home/getById/:id/:method", getById);

module.exports = router;
