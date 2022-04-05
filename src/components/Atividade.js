import React, {useState} from 'react'
import AtividadesForm from './AtividadesForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

function Atividade( {atv, completeAtvs, removeAtvs, updateAtv}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value =>{
        updateAtv(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }
  
  
    if (edit.id){
        return <AtividadesForm edit={edit} onSubmit={submitUpdate}/>
    }

  return atv.map((atvs, index)=>(
      <div 

      className={atvs.isComplete ? 'atvs-row complete' : 'atvs-row'} key={index}>
          <div key={atvs.id} onClick={() => completeAtvs(atvs.id)}

        >
              {atvs.text}
          </div>

          <div className='icons'>
            <RiCloseCircleLine onClick = {() => removeAtvs(atvs.id)}
            className = 'delete-icon' />
            
            <TiEdit onClick = {() => setEdit({id: atvs.id, value: atvs.text})}
            className = 'edit-icon' />
          </div>
      </div>
  ))
}

export default Atividade