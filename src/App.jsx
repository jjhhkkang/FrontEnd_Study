import { useState, useRef } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import TodoEditor from './components/TodoEditor.jsx'
import TodoList from './components/TodoList.jsx'

function App() {

  const mockTodo = [
    {
      id: 0,
      isDone: false,
      content: "React 공부하기",
      createdDate: new Date().getTime(),
    },
    {
      id: 1,
      isDone: true,
      content: "빨래하기",
      createdDate: new Date().getTime(),
    },
    {
      id: 2,
      isDone: false,
      content: "React 복습하기",
      createdDate: new Date().getTime(),
    },
    // {
    //   id: 3,
    //   isDone: true,
    //   content: "장보기",
    //   createdDate: new Date().getTime(),
    // },
  ];
  const [todo, setTodo] = useState(mockTodo)

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current++;
  }

  const idRef = useRef(3);


  return (
    <div className='App'>
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList />
    </div>
  )
}

export default App
