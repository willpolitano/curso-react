import React, {useState} from 'react'

import './index.css'

const App = () => {

const [form, setForm] = useState({'nome' : '', 'curso' : '', 'ano' : ''})

const handleChangeForm = (e) => {
    if(e.target.getAttribute('name') == 'fnome') {
        setForm({'nome' : e.target.value, 'curso' : form.curso, 'ano' : form.ano})
    } else if(e.target.getAttribute('name') == 'fcurso') {
        setForm({'nome' : form.nome, 'curso' : e.target.value, 'ano' : form.ano})
    } else {
        setForm({'nome' : form.nome, 'curso' : form.curso, 'ano' : e.target.value})
    }
}

return (
    <>
        <input type="text" name="fnome" value={form.nome} onChange={(e) => handleChangeForm(e)} /><br/>
        <input type="text" name="fcurso" value={form.curso} onChange={(e) => handleChangeForm(e)} /><br/>
        <input type="text" name="fano" value={form.ano} onChange={(e) => handleChangeForm(e)} /><br/>


        <p><strong>Nome: </strong> {form.nome}</p>
        <p><strong>Curso: </strong> {form.curso}</p>
        <p><strong>Ano: </strong> {form.ano}</p>
    </>
)

}

export default App;