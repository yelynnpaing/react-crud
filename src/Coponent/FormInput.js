import React , {useState, useContext, useRef, useEffect} from 'react'
import { DataContext } from './DataProvider'

const FormInput = () => {
  const [todos , setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState('');
  const todoInput = useRef();
  
  const addTodo = e => {
    e.preventDefault();
    setTodos([...todos, {name:todoName , complete:false}])
    setTodoName ('')
    todoInput.current.focus()
  }
  useEffect(() => {
    todoInput.current.focus()
  })
  return (
    <form onSubmit={addTodo}>
        <input type="text" required placeholder='where needs to be done ?' name='todos' id='todos'
        ref={todoInput} value={todoName} onChange={e => setTodoName(e.target.value.toLowerCase())}
        />
        <button type='submit'>Create</button>
    </form>
  )
}

export default FormInput