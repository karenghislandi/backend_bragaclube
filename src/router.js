const express = require("express");
const router=express.Router();
const bodyParser = require('body-parser')

const ReservaController = require("./controllers/ReservaController");
const AreasLazerController = require("./controllers/AreasLazerController");

//rotas reserva

router.get("/reservas", ReservaController.buscarTodos);
router.get("/reserva/:nomeArea",ReservaController.buscarUm);
router.post("/reserva",ReservaController.inserir);
router.put("/reserva/:nomeArea", ReservaController.alterar);
router.delete("/reserva/:nomeArea",ReservaController.excluir);

//rotas area de lazer

router.get("/areaslazer", AreasLazerController.buscarTodos);
router.get("/areaslazer/:nomeAreas",AreasLazerController.buscarUm);
router.post("/areaslazer",AreasLazerController.inserir);
router.put("/areaslazer/:nomeAreas", AreasLazerController.alterar);
router.delete("/areaslazer/:nomeAreas",AreasLazerController.excluir);


module.exports=router;
