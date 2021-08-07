import React, {useState} from 'react'

import './index.css'

const App = () => {

    const[nome, setNome] = useState()

    const armazenar = (chave, valor) => {
        localStorage.setItem(chave, valor)
    }

    const consultar = (chave) => {
        alert(localStorage.getItem(chave))
    }

    const deletar = (chave) => {
        localStorage.removeItem(chave)
    }


    return (
            <>
                <input type="text" value={nome} onChange={(e) => {setNome(e.target.value)}}/><br/>
                <button onClick={() => armazenar('ls_nome', nome)}>Armazenar</button>
                <button onClick={() => consultar('ls_nome')}>Consultar</button>
                <button onClick={() => deletar('ls_nome')}>Deletar</button>
            </>
    )
}

export default App;