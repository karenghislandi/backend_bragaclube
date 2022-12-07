require("dotenv").config({path:"variaveis.env"});
const express=require("express");
const cors= require("cors");
const bodyParser=require("body-parser");
//const auth=require("../../auth/middleware/auth");
const auth= require("../middleware/auth");
//const multer=require("multer");
const router=require("./router");

const server=express();
server.use(cors());
server.use(bodyParser.urlencoded({extended:false}));
server.use(bodyParser.json());

server.use("/api", router);

server.listen(process.env.PORT,()=>{
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`)
})