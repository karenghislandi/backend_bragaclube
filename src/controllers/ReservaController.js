const ReservaService=require("../services/ReservaService");

module.exports={
    buscarTodos: async(req,res)=>{
        let json={error:"",result:[]};
        let reserva=await ReservaService.buscarTodos();

        for(let i in reserva){
            json.result.push({
                nomeArea:reserva[i].nomeArea,
                horaEntrada: reserva[i].horaEntrada,
                horaSaida: reserva[i].horaSaida,
                DiaEntrada: reserva[i].DiaEntrada,
                DiaSaida: reserva[i].DiaSaida,
                
            });
        }
        res.json(json)
    },

    buscarUm: async(req,res)=>{
        let json={error:"",result:{}};

        let nomeArea=req.params.nomeArea;
        let reserva=await ReservaService.buscarUm(nomeArea);

        if(reserva){
            json.result=reserva;
        }
        res.json(json);
    },

    inserir: async(req,res)=>{
        let json={error:"",result:{}};

        let nomeArea=req.body.nomeArea;
        let horaEntrada= req.body.horaEntrada;
        let horaSaida= req.body.horaSaida;
        let DiaEntrada= req.body.DiaEntrada;
        let DiaSaida= req.body.DiaSaida
        
        
        
        if(nomeArea && horaEntrada && horaSaida && DiaEntrada && DiaSaida){
            let reservacodigo=await ReservaService.inserir(nomeArea,horaEntrada,horaSaida,DiaEntrada,DiaSaida);

            json.result={
                codReserva:reservacodigo,
                nomeArea,
                horaEntrada,
                horaSaida,
                DiaEntrada,
                DiaSaida
            };
        }else{
            json.error="campos não enviados";
        }
        res.json(json)
    
            
    },

    alterar: async(req,res)=>{
        let json={error:"",result:{}};

        let nomeArea=req.params.nomeArea;
        let horaEntrada= req.body.horaEntrada;
        let horaSaida= req.body.horaSaida;
        let DiaEntrada=req.body.DiaEntrada;
        let DiaSaida= req.body.DiaSaida;
        

        if( nomeArea && horaEntrada && horaSaida && DiaEntrada && DiaSaida){
           await ReservaService.alterar(nomeArea,horaEntrada,horaSaida,DiaEntrada,DiaSaida);
            json.result={
                nomeArea,
                horaEntrada,
                horaSaida,
                DiaEntrada,
                DiaSaida
            };
        }else{
            json.error="campos não enviados";
        }
        res.json(json);
        
    },

    excluir: async(req,res)=>{
        let json={error:"",result:{}};

        await ReservaService.excluir(req.params.nomeArea);

        res.json(json);

    }
       

}