const express = require("express");
const routes = express.Router();

const examenController = require("../controllers/examenController");

module.exports = function (){  
    routes.get("/", examenController.home); //la funcion que va a responder

    return routes;
}
