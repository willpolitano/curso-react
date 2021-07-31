import React from 'react';

const Dados = (props) => {
    return (
        <>
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade}</p>
            <p>Objetivo: {props.objetivo}</p>
        </>
    )
}

export default Dados