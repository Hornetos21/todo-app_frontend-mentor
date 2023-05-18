import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
// import { removeTodo, toggleTodo } from '../store/todos/todos-actions'
// import { selectVisibleTodos } from '../store/todos/todos-selectors'
import { DragDropContext, Draggable } from 'react-beautiful-dnd'
import { StrictModeDroppable as Droppable } from '../helpers/StrictModeDroppable.jsx'
import { useEffect, useState } from 'react'
import { loadState, saveState } from '../store/local-storage.js'
import { Reorder } from 'framer-motion'
import {
  removeTodo,
  selectVisibleTodos,
  toggleTodo,
} from '../features/todos/todo-slice.js'

export const TodoList = () => {
  const dispatch = useDispatch()
  const { filter } = useParams()
  // const data = useSelector((state) => selectVisibleTodos(state, filter))
  const data = useSelector((state) => selectVisibleTodos(state, filter))
  // console.log('store:', data)
  /*  const [todos, setTodos] = useState(data)
        useEffect(() => {
          loadState()
          saveState(data)
      
          setTodos(data)
        }, [data])*/

  /*  const handleOnDragEnd = (result) => {
          if (!result.destination) return
      
          const tasks = [...todos]
          const [reorderItem] = tasks.splice(result.source.index, 1)
      
          tasks.splice(result.destination.index, 0, reorderItem)
      
          setTodos(tasks)
        }*/

  /*  return (
          <ul className="list">
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="todos">
                {(provided) => (
                  <section {...provided.droppableProps} ref={provided.innerRef}>
                    {todos.map((todo, index) => (
                      <Draggable
                        key={todo.id}
                        draggableId={todo.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <li
                            className="todo"
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <input
                              className="checker"
                              id={`task-${todo.id}`}
                              type="checkbox"
                              checked={todo.completed}
                              onChange={() => dispatch(toggleTodo(todo.id))}
                            />
                            <label htmlFor={`task-${todo.id}`}>{todo.title}</label>
                            <button
                              className="delete-btn"
                              onClick={() => dispatch(removeTodo(todo.id))}
                            ></button>
                          </li>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </section>
                )}
              </Droppable>
            </DragDropContext>
          </ul>
        )*/

  // const [todos, setTodos] = useState(data)
  // useEffect(() => {
  //   // console.log('effect:', todos)
  //   saveState({ todos })
  // }, [todos])

  return (
    <ul className="list">
      <Reorder.Group values={data} onReorder={() => {}} axis="y">
        {data.map((todo) => (
          <Reorder.Item
            className="todo"
            key={todo.id}
            value={todo}
            id={todo.id}
            as="li"
          >
            {/*<li className="todo">*/}
            <input
              className="checker"
              id={`task-${todo.id}`}
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <label htmlFor={`task-${todo.id}`}>{todo.title}</label>
            <button
              className="delete-btn"
              onClick={() => dispatch(removeTodo(todo.id))}
            ></button>
            {/*</li>*/}
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </ul>
  )
}
