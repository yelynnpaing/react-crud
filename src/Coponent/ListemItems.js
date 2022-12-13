import React, {useState} from 'react';

const ListemItems = ({todo, id, checkComplete, handleEditTodos}) => {
  const [onEdit , SetOnEdit] = useState(false)
  const [editValue, setEditValue] = useState(todo.name)

  const handleOnEdit = () => {
    SetOnEdit(true)
  }
  const handleSave = id => {
    SetOnEdit(false)
    if(editValue){
      handleEditTodos(editValue, id)
    }else{
      setEditValue(todo.name)
    }
  }
  if(onEdit){
    return (
      <li>
        <input type="text" id="editValue" value={editValue} name="editValue" 
        onChange={e => setEditValue(e.target.value.toLowerCase())}
        />
        <button onClick={() => handleSave(id)}>Save</button>
      </li>
    )
  }else{
      return (
        <li>
          <label htmlFor={id} className={todo.complete ? "active": ''}>
            <input type="checkbox" id={id} checked={todo.complete}
              onChange={() => checkComplete(id)}
            />
            {todo.name}
          </label>
            <button disabled={todo.complete} onClick={handleOnEdit}>Edit</button>
        </li>
      )
  }
}

export default ListemItems