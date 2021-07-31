import React from 'react'

const Led = (props) => {

    const cancelar = (obj) => {
        obj.preventDefault();
        return alert()
    }

    return  (
        <>
            <span className={props.ligado ? 'ligado' : 'desligado'}>0</span><br/>
            <button onClick={() => props.setLigado(!props.ligado)}>{!props.ligado ? 'Ligar' : 'Desligar'}</button>

            <a 
                href="http://Teste" 
                target="_blank"
                onClick={(e) => cancelar(e)}
            >
                Cancelar
            </a>
        </>
    )
}

export default Led
