const { Router } = require("express");
const UsersController = require("../controllers/UsersController");
const UsersValidateController = require("../controllers/UsersValidateController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();

const usersController = new UsersController();
const usersValidateController = new UsersValidateController();

usersRoutes.post("/", usersController.create);
usersRoutes.get("/validated", ensureAuthenticated, usersValidateController.index);

module.exports = usersRoutes;
