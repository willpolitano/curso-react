import React, { useState } from 'react'
import Numero from './Componentes/Numero'

const App = () => {

    const [num, setNum] = useState(10);
    
    return  (
        <Numero num={num} setNum={setNum} />
    )
}

export default App;