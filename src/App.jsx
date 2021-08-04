import React, {useState} from 'react'

import './index.css'

const App = () => {

const [nome, setNome] = useState('')
const [carro, setCarro] = useState('PORSHE')

const handleChangeCarro = (e) => {
    setNome(e.target.value)
}

return (
    <>
        <input 
            type="text"
            value={nome}
            onChange={(e) => handleChangeCarro(e)} 
        />

        <p><strong>Nome: </strong> {nome}</p>

        <br />
        <br />
        <br />

        <select value={carro} onChange={(e) => setCarro(e.target.value)}>
            <option value="HRV">HRV</option>
            <option value="PORSHE">PORSHE</option>
            <option value="CAMARO">CAMARO</option>
        </select>

        <p><strong>Carro: </strong> {carro}</p>

    </>
)

}

export default App;