import { NewTodo } from './components/NewTodo'
import { TodoList } from './components/TodoList'

import './index.css'
import FooterList from './components/FooterList.jsx'
import Header from './components/Header.jsx'

export default function App() {
  return (
    <main>
      <div className="bg"></div>
      <div className="container">
        <div className="BG"></div>
        <Header />
        <div className="todos">
          <NewTodo />
          <TodoList />
          <FooterList />
        </div>
        <p className="dnd-text">Drag and drop to reorder list</p>
      </div>
    </main>
  )
}
