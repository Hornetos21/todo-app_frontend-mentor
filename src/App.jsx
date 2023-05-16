import { NewTodo } from './components/NewTodo'
import { TodoList } from './components/TodoList'

import './index.css'
import FooterList from './components/FooterList.jsx'
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
            <FooterList />
          </div>
        </div>
        <p className="dnd-text">Drag and drop to reorder list</p>
      </div>
      <Footer />
    </>
  )
}
