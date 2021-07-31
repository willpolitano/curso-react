import React from 'react'

const Numero = (props) => {
    return (
        <>
            <input type="text" value={props.num}/>
            <button onClick={() => props.setNum(props.num + 10)}>Incrementar</button>
        </>
    )
}

export default Numero