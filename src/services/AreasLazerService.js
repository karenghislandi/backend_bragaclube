const bd=require("../bd");
const { inserir } = require("../controllers/AreasLazerController");




module.exports={
    buscarTodos:()=>{
        return new Promise((aceito,rejeitado)=>{
            bd.query("SELECT * FROM  areas",(error,results)=>{
                if (error){rejeitado(error);return;}
                aceito(results);

            });  

        });
    },

    buscarUm:(nomeAreas)=>{
        return new Promise((aceito,rejeitado)=>{

            bd.query("SELECT * FROM areas WHERE nomeAreas=? ",[nomeAreas],(error,results)=>{
                if (error){rejeitado(error);return;}
                if (results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }

            });
           
        });
    },

    inserir:(nomeAreas, diasFuncionamento,horasFuncionamento)=>{
                return new Promise((aceito,rejeitado)=>{

            bd.query("INSERT INTO areas (nomeAreas, diasFuncionamento,horasFuncionamento) VALUES (?,?,?) ",
                [nomeAreas, diasFuncionamento,horasFuncionamento],
                (error,results)=>{
                    if (error){rejeitado(error);return;}
                    aceito(results.insertcodigo);
                   
                },
               
            );
        });
    

    },
        

    alterar:(nomeAreas,diasFuncionamento,horasFuncionamento)=>{
        return new Promise((aceito,rejeitado)=>{

            bd.query("UPDATE areas SET diasFuncionamento=?, horasFuncionamento=?   WHERE nomeAreas=?",
                [nomeAreas,diasFuncionamento,horasFuncionamento],
                (error,results)=>{
                    if (error){rejeitado(error);return;}
                    aceito(results);
                }
               
            );
        });
           

    },

    excluir:(nomeAreas)=>{
        return new Promise((aceito,rejeitado)=>{
            bd.query("DELETE  FROM  areas WHERE nomeAreas=?",[nomeAreas] ,(error,results)=>{
                if (error){rejeitado(error);return;}
                aceito(results);

            });  

        });
    },



   
};
    
        