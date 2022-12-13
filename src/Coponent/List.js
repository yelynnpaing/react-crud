import React, {useContext} from 'react'
import ListemItems from './ListemItems'
import { DataContext } from './DataProvider'

const List = () => {
    const [todos , setTodos] = useContext(DataContext);
    console.log(todos);

    const switchComplete = id => {
      // alert(id)
      const newTodos = [...todos]
      newTodos.forEach((todo, index) => {
        if(index === id){
          todo.complete = !todo.complete
        }
      })
      setTodos(newTodos)
    }

    const handleEditTodos = (editValue, id) => {
      const newTodos = [...todos]
      newTodos.forEach((todo , index) => {
        if(index === id) {
          todo.name = editValue
        }
      })
      setTodos(newTodos)
    }

  return (
    <ul>
        {
            todos.map((todo, index) => (
                <ListemItems todo={todo} key={index} id={index} 
                checkComplete = {switchComplete} handleEditTodos = {handleEditTodos}
                />
            ))
        }
    </ul>
  )
}

export default List