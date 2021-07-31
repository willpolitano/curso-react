import React from 'react';

const Dados = (props) => {
    const n1 = 10
    const n2 = 20

    return (
        <>
            <p>Nome: {props.nome()}</p>
            <p>Idade: {props.idade}</p>
            <p>Objetivo: {props.objetivo}</p>
            <p>A soma de {n1} com {n2} é igual a {props.sm(n1, n2)}</p>
        </>
    )
}

export default Dados