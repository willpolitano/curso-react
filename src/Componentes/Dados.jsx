import React from 'react';
import './Dados.css'

const Dados = (props) => {
    const n1 = 10
    const n2 = 20

    const cssInterno = {
        color: 'blue',
        fontSize: '20px'
    }

    return (
        <>
            <p style={{color: 'red'}}>Nome: {props.nome()}</p>
            <p style={cssInterno}>Idade: {props.idade}</p>
            <p className="css-externo">Objetivo: {props.objetivo}</p>
            <p>A soma de {n1} com {n2} é igual a {props.sm(n1, n2)}</p>
        </>

    )
}

export default Dados