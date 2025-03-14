import React, {useState} from "react";
import "./Quadro.css";
import Lista from "./Lista";
import NovaTarefa from "./NovaTarefa";

function Quadro () {

    const [tarefas, setTarefas] = useState([]);
    const [adicionandoNovaTarefa, setAdicionandoNovaTarefa] = useState(false);
    const [tarefasFeitas, setTarefasFeitas] = useState([]);

    const adicionarTarefaHandler = (tarefaInserida) => {
        const dadosTarefa = {
            ...tarefaInserida,
            id: Math.random().toString()
        };

        
        setTarefas(prevTarefas => {
            return [dadosTarefa, ...prevTarefas]
        });

        setAdicionandoNovaTarefa(false)
    }

    const deletarTarefa = (idDaTarefa) => {
        setTarefas(prevTarefas => {
            return prevTarefas.filter(function(tarefaAnt) {
                return tarefaAnt.id !== idDaTarefa;
            } )
        })
    }

    const clickAdicionarHandler = (e) => {
        setAdicionandoNovaTarefa(true);
    }

    const cancelarHandler = (e) => {
        setAdicionandoNovaTarefa(false);

    }

    const marcarFeito = (id) => {
        let tFeitas = tarefasFeitas;
        tFeitas.push(id);
        setTarefasFeitas(tFeitas);
    }


    return (
        <div className="quadro text-center my-5 mx-5 py-5">
            <h1>Lista de Tarefas</h1>
            <button onClick={clickAdicionarHandler} className="btn btn-primary">Adicionar Nova Tarefa</button>
            {adicionandoNovaTarefa && <NovaTarefa cancelarHandler={cancelarHandler} adicionarTarefaHandler = {adicionarTarefaHandler} />}
            {adicionandoNovaTarefa && <div className="backdrop"></div>}
            <Lista marcarFeito={marcarFeito} tarefasFeitas={tarefasFeitas} deletarTarefa = {deletarTarefa} tarefas={tarefas}/>
        </div>
    )
}

export default Quadro;