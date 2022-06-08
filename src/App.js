import React, {useState, useEffect} from 'react'
import Header from './component/Header'
import './App.css'
import Form from './component/Form'
import styled from 'styled-components'
import TodoList from './component/TodoList'

const ContainerStyled = styled.div`
*{
  ::-webkit-scrollbar{
      width: 8px;
      border-radius: 20px;
  }
  ::-webkit-scrollbar-track{
      background: rgb(10, 52, 59, 1);
      border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb{
    background: linear-gradient(to right bottom, rgb(18, 52, 59, 0.45), rgb(18, 52, 59, 0.95));
      border-radius: 34px;
  }
}

`;

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <ContainerStyled>
    <div className='container'>
      <div className='app-wrapper'>
        <div>
        <Header/>  
        </div>
        <div>
        <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        />
        </div>
        <div>
          <TodoList todos={todos} setTodos={setTodos}  setEditTodo={setEditTodo}/>
        </div>
      </div>
    </div>
    </ContainerStyled>
  )
}

export default App