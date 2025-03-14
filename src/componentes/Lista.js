import React, {useState} from "react";
import "./Lista.css"
import Tarefa from "./Tarefa";

function Lista (props) {
   
    const [seletor, setSeletor] = useState("X");
    
    
    const pedidoDeDelecaoHandler = (idDaTarefa) => {
        props.deletarTarefa(idDaTarefa);

    }

    const pedidoDeFeitoHandler = (idDaTarefa) => {
        props.marcarFeito(idDaTarefa);
    }

    const filtroHandler = (e) => {
        if(e.target.value === "Todas"){
            setSeletor("X");
        }else if(e.target.value === "Feitas"){
            setSeletor(true);
        } else {
            setSeletor(false)
        }
        
        
    }

    

    return(
        <div className="px-4">
            <form>
                <select onChange={filtroHandler} name="estado">
                    <option value="Todas">Todas</option>
                    <option value="Feitas">Feitas</option>
                    <option value="N-feitas">Não Feitas</option>
                </select>
            </form>
            <div className="row">
                {props.tarefas.filter((e,i)=>((props.tarefasFeitas.includes(e.id) === seletor) || seletor === "X")).map((tarefa) => (
                    <Tarefa key={tarefa.id} pedidoDeFeitoHandler={pedidoDeFeitoHandler} pedidoDeDelecaoHandler = {pedidoDeDelecaoHandler} feito={props.tarefasFeitas.includes(tarefa.id)} id = {tarefa.id} titulo={tarefa.titulo} descricao={tarefa.descricao} prazo={tarefa.prazo} categoria={tarefa.categoria}/>
                ))}
            </div>
            
        </div>
    );
}

export default Lista;