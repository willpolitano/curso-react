import React from 'react'
import Dados from './Componentes/Dados'

const App = () => {

    const nm = () => {
        return 'Willian Politano Fernandes'
    } 

    const idd = '22'
    const obj = 'Dominar React'

    const soma = (v1, v2) => {
        return v1 + v2
    }

    return  (
        <Dados 
            nome = {nm} 
            idade = {idd}
            objetivo = {obj}
            sm = {soma}
        />
    )
}

export default App;