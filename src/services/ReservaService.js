const bd=require("../bd");
const { inserir } = require("../controllers/ReservaController");


module.exports={
    buscarTodos:()=>{
        return new Promise((aceito,rejeitado)=>{
            bd.query("SELECT * FROM  reserva",(error,results)=>{
                if (error){rejeitado(error);return;}
                aceito(results);

            });  

        });
    },

    buscarUm:(nomeArea)=>{
        return new Promise((aceito,rejeitado)=>{

            bd.query("SELECT * FROM reserva WHERE nomeArea=? ",[nomeArea],(error,results)=>{
                if (error){rejeitado(error);return;}
                if (results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }

            });
           
        });
    },

    inserir:(nomeArea,horaEntrada,horaSaida,DiaEntrada,DiaSaida)=>{
        return new Promise((aceito,rejeitado)=>{
            
            bd.query("INSERT INTO reserva (nomeArea,horaEntrada,horaSaida,DiaEntrada,DiaSaida) VALUES (?,?,?,?,?) ",
                [nomeArea,horaEntrada,horaSaida,DiaEntrada,DiaSaida],
                (error,results)=>{
                    if (error){rejeitado(error);return;}
                    aceito(results.inserirID);
                }
               
            );
        });
    },

      alterar:(nomeArea,horaEntrada,horaSaida,DiaEntrada,DiaSaida)=>{
        return new Promise((aceito,rejeitado)=>{

            bd.query("UPDATE reserva SET  horaEntrada=?, horaSaida=?, DiaEntrada=?, DiaSaida=? WHERE nomeArea=?",
                [nomeArea,horaEntrada,horaSaida,DiaEntrada,DiaSaida],
                (error,results)=>{
                    if (error){rejeitado(error);return;}
                    aceito(results);
                }
               
            );
        });
           

    },

    excluir:(nomeArea)=>{
        return new Promise((aceito,rejeitado)=>{
            bd.query("DELETE * FROM  reserva WHERE nomeArea=?",[nomeArea] ,(error,results)=>{
                if (error){rejeitado(error);return;}
                aceito(results);

            });  

        });
    },



 
};
    
        