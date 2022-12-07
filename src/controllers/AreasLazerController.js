const AreasLazerService = require("../services/AreasLazerService");
const fs = require("fs");
//const multer = require("multer");
const { escape } = require("mysql");

module.exports = {
    buscarTodos: async (req, res) => {
        let json = { error: "", result: [] };
        let AreasLazer = await AreasLazerService.buscarTodos();

        for (let i in AreasLazer) {
            json.result.push({
                nomeAreas:AreasLazer[i].nomeAreas,
                diasFuncionamento:AreasLazer[i].diasFuncionamento,
                horasFuncionamento:AreasLazer[i].horasFuncionamento
            });
        }
        res.json(json)
    },

    buscarUm: async (req, res) => {
        let json = { error: "", result: {} };

        let nomeAreas = req.params.nomeAreas;
        let AreasLazer = await AreasLazerService.buscarUm(nomeAreas);
        if (AreasLazer) {
            json.result = AreasLazer;
        }
        res.json(json);
    },

    inserir: async (req, res) => {
        console.log(req.body);
        let json = { error: "", result: {} };

        let nomeAreas=req.body.nomeAreas;
        let diasFuncionamento= req.body.diasFuncionamento;
        let horasFuncionamento= req.body.horasFuncionamento;
        

        if (nomeAreas && diasFuncionamento && horasFuncionamento) {
            let Areacodigo = await AreasLazerService.inserir(nomeAreas,diasFuncionamento,horasFuncionamento);

            json.result = {
                codArea: Areacodigo,
                nomeAreas,
                diasFuncionamento,
                horasFuncionamento
            };
        } else {
            json.error = "campos não enviados";
        }
        res.json(json)
     





    },

    alterar: async (req, res) => {
        let json = { error: "", result: {} };

        let nomeAreas=req.params.nomeAreas;
        let diasFuncionamento= req.body.diasFuncionamento;
        let horasFuncionamento= req.body.horasFuncionamento;
        

        if (nomeAreas && diasFuncionamento && horasFuncionamento) {
            await AreasLazerService.alterar(nomeAreas,diasFuncionamento,horasFuncionamento);
            json.result = {
                nomeAreas,
                diasFuncionamento,
                horasFuncionamento
            };

        } else {
            json.error = "campos não enviados";
        }
        res.json(json);
    },

    excluir: async (req, res) => {
        let json = { error: "", result: {} };

        await AreasLazerService.excluir(req.params.nomeAreas);

        res.json(json);

    }


}