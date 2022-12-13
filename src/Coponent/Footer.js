import React, {useContext, useState} from 'react'
import { DataContext } from './DataProvider'

const Footer = () => { 
  const [checkAll , setCheckAll] = useState(false)
  const [todos, setTodos] = useContext(DataContext)

  const handleCheckAll = () => {
    const newTodos = [...todos]
    newTodos.forEach((todo) => {
      todo.complete = !checkAll
    })
    setTodos(newTodos)
    setCheckAll(!checkAll)
  }
  
  const completNewTodos = () => {
    return todos.filter(todo => todo.complete === false)
  }

  const deleteTodos = () => {
    setTodos(completNewTodos())
    setCheckAll(false)
  }

  return (
    <>
      {
        todos.length === 0 ? <h3>Congratularions ! Nothing to do</h3>
        : <div className='row'>
              <label htmlFor='all'>
                <input type="checkbox" name='all' id='all' 
                  onChange={handleCheckAll} checked= {checkAll}
                />
                All
              </label>
              <p>You have {completNewTodos().length} to do</p>
              <button id='delete' onClick={deleteTodos}>Delete</button>
          </div>
      }
    </>
    
  )
}

export default Footer