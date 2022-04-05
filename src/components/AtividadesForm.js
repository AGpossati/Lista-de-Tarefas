import React, {useState, useEffect, useRef} from 'react'

function AtividadesForm(props) {

    const [input, setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e =>{
        setInput(e.target.value);
    }

    const handleSubmit = e =>{
        e.preventDefault(); 

          props.onSubmit({
          id: Math.floor(Math.random()*10000),
          text: input
        })
    }; 

    
  return (
    <form className='atividade-form' onSubmit={handleSubmit}>

        <input type="text" placeholder="Add Atividade" value={input} name='text' className='lista-input' onChange={handleChange} ref={inputRef}/>

        <button className='lista-button'>Adicionar Atividade</button>

    </form>
    
  )
}

export default AtividadesForm