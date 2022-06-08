import React from 'react'

const TodoList = ({todos, setTodos, setEditTodo}) => {
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id){
                    return {...item, completed: !item.completed};
                }
                return item;
            })
        )
    }
    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }
    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
  return (
    <div>
        {todos.map((todo) => (
                <div className='list-item' key={todo.id}>
                <div className='inputContainer'>
                <textarea type='text' value={todo.title} 
                className={`list ${todo.completed ? "complete" : ''}`} 
                onChange={(event) => event.preventDefault()}/>
                </div>
                <span className='button-container'>
                <button className='button-complete task-button' onClick={()=> handleComplete(todo)}>
                    {
                       todo.completed 
                       ? (<i className='fa fa-check-circle success'></i>)
                       : (<i className='fa fa-times-circle'></i>)
                    }
                    
                </button>
                <button className='button-edit task-button' onClick={()=> handleEdit(todo)}>
                    <i className='fa fa-edit'></i>
                </button>
                <button className='button-delete task-button' onClick={()=> handleDelete(todo)}>
                    <i className='fa fa-trash'></i>
                </button>
                </span>
                </div>
            ))
            }
    </div>
  )
}

export default TodoList