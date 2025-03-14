import React, {useState} from "react";
import "./NovaTarefa.css";


function NovaTarefa (props) {

    const [inputUsuario, setInputUsuario] = useState({
        titulo: "",
        descricao: "",
        prazo: "",
        categoria: "Doméstico"
    })

    const tituloHandler = (event) => {
        setInputUsuario((prevState) => {
            return {
                ...prevState,
                titulo: event.target.value
            }
        });
    }

    const descricaoHandler = (event) => {
        setInputUsuario((prevState) => {
            return {...prevState, descricao: event.target.value
            }
        })
    }

    const prazoHandler = (event) => {
        setInputUsuario((prevState) => {
            return {...prevState, prazo: event.target.value}
        })
    }

    const categoriaHandler = (event) => {
        setInputUsuario((prevState) => {
            return {...prevState, categoria: event.target.value}
        })
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const dadosInseridos = inputUsuario;
        
        props.adicionarTarefaHandler(dadosInseridos);

        setInputUsuario({
            titulo: "",
            descricao: "",
            prazo: "",
            categoria: "Domestico"
        })

    }

    const cancelarAdTarefaHandler = (e) => {
        setInputUsuario({
            titulo: "",
            descricao: "",
            prazo: "",
            categoria: "Domestico"
        })

        props.cancelarHandler();
    }

    return (
        <div className="container_nova_tarefa p-4">
            <h3>Adicionar Nova Tarefa</h3>
            <form onSubmit = {submitHandler}>
                <div>
                    <label>Nome da Tarefa</label>
                    <input value={inputUsuario.titulo} onChange={tituloHandler} type="text" />
                </div>
                <div>
                    <label>Descrição</label>
                    <textarea value={inputUsuario.descricao} onChange = {descricaoHandler}></textarea>
                </div>
                <div>
                    <label>Prazo</label>
                    <input value={inputUsuario.prazo} onChange={prazoHandler} type="date" />
                </div>
                <div>
                    <label>Categoria</label>
                        <div>
                            <input type="radio" checked={inputUsuario.categoria === "Doméstico"} onChange={categoriaHandler} id="domestico" name="categoria" value="Doméstico" />
                            <label htmlFor="domestico">Doméstico</label><br />
                            <input type="radio" checked={inputUsuario.categoria === "Trabalho"} onChange={categoriaHandler} id="trabalho" name="categoria" value="Trabalho"/>
                            <label htmlFor="trabalho">Trabalho</label><br/>
                            <input type="radio" checked={inputUsuario.categoria === "Estudo"} onChange={categoriaHandler} id="estudo" name="categoria" value="Estudo" />
                            <label htmlFor="estudo">Estudo</label>
                        </div>
                        
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Adicionar!</button>
                </div>
                <div>
                    <button onClick={cancelarAdTarefaHandler} className="btn btn-primary">Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default NovaTarefa;