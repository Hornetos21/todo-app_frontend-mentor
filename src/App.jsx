import NewTodo from './features/todos/NewTodo'
import TodoList from './features/todos/TodoList'

import TodoFooterList from './features/todos/TodoFooterList'
import Header from './components/Header'
import Footer from './components/Footer'

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
