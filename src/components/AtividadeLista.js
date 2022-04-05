import React, {useState} from 'react'
import AtividadesForm from './AtividadesForm'
import Atividade from './Atividade';

function AtividadeLista() {
  const [atv, setAtv] = useState([]);

  const addAtv = atvs =>{
      if (!atvs.text || /^\s*$/.test(atvs.text)){
          return; 
      }
      const newAtv = [atvs, ...atv]; 

      setAtv (newAtv);
      //console.log(...atv); 
  }; 

  const updateAtv = (atvsId, newValue) => {
      if (!newValue.text || /^\s*$/.test(newValue.text)){
          return
      }
      setAtv(prev => prev.map(item => (item.id === atvsId ? newValue : item)))
  }

  const removeAtvs = id => {
      const removeArr = [...atv].filter(atvs => atvs.id !== id);

      setAtv(removeArr)
  }

  const completeAtvs = id => {
      let updatedAtv = atv.map( atvs => {
          if (atvs.id === id){
              atvs.isComplete = !atvs.isComplete;
          };
          return atvs;
      })
      setAtv(updatedAtv); 
  }


  return (
    <div>

        <h1>Quais são seus planos para hoje?</h1>
        <AtividadesForm onSubmit={addAtv}/>
        <Atividade atv={atv} completeAtvs={completeAtvs} removeAtvs={removeAtvs} updateAtv={updateAtv} />
        
    </div>
  )
}

export default AtividadeLista