import React, { useState } from "react";
import "./Tarefa.css";

function Tarefa (props) {

    const [tarefaFeita, setTarefaFeita] = useState(props.feito);

    const clickHandler = (e) => {
        props.pedidoDeDelecaoHandler(props.id);
    }

    const feitoHandler = (e) => {
        props.pedidoDeFeitoHandler(props.id);
        setTarefaFeita(true);
    }

    

    return (
        <div className={`casca-tarefa  ${tarefaFeita ? 'feito' : 'não-feito'} ms-4 my-2 py-2 col-5`}>
            <h4>{props.titulo}</h4>
            <p>{props.descricao}</p>
            <h5>{props.prazo}</h5>
            <h5>{props.categoria}</h5>
            <button onClick={feitoHandler} className="btn btn-primary">Feito!</button>
            <button onClick={clickHandler} className="btn btn-danger">Apagar!</button>
        </div>
    )
}

export default Tarefa;