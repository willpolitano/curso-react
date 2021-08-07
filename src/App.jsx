import React, {useState, useEffect} from 'react'

import './index.css'

const App = () => {

    const[contagem, setContagem] = useState(0)

    useEffect(
        () => {document.title = contagem}
    )


    return (
            <>
                <p>Contagem : {contagem}</p>
                <button onClick={() => setContagem(contagem + 1)}>Incrementar</button>
                
            </>
    )
}

export default App;