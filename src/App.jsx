import React from 'react'

import './index.css'

const App = () => {

const carros = ['Argo', 'Fiat', 'Megane']
const listaCarros = carros.map((c,i) => <li key={i}>{i} - {c}</li>)

    return (
        <>
            {listaCarros}
        </>
    )

}

export default App;