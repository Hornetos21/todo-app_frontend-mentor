import { NewTodo } from './features/todos/NewTodo.jsx'
import { TodoList } from './features/todos/TodoList.jsx'

import './index.css'
import TodoFooterList from './features/todos/TodoFooterList.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <div className="bg"></div>
      <div className="container">
        <Header />
        <div className="todos">
          <NewTodo />
          <div className="todos-list">
            <TodoList />
            <TodoFooterList />
          </div>
        </div>
        <p className="dnd-text">Drag and drop to reorder list</p>
      </div>
      <Footer />
    </>
  )
}
