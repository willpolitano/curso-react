import React, { useState } from 'react'

import Led from './Componentes/Led'

import './index.css'

const App = () => {

    const [ligado, setLigado] = useState(false)

    return  (
        <>
            <Led ligado={ligado} setLigado={setLigado}/>
        </>
    )
}

export default App;