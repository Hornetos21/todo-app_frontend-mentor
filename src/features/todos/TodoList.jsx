import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { StrictModeDroppable as Droppable } from '../../helpers/StrictModeDroppable.jsx'
import {
  removeTodo,
  reorder,
  selectVisibleTodos,
  toggleTodo,
} from './todo-slice.js'
import { DragDropContext, Draggable } from 'react-beautiful-dnd'

export const TodoList = () => {
  console.log('RENDER: LIST')
  const dispatch = useDispatch()
  const { filter } = useParams()
  const data = useSelector((state) => selectVisibleTodos(state, filter))

  // const [todos, setTodos] = useState(data)
  // const setState = () => dispatch(reorder(todos))
  // useEffect(() => {
  //   console.log('effect:', todos)
  //   dispatch(reorder(todos))
  // }, [dispatch, todos])

  /*  return (
        <Reorder.Group
          className="list"
          values={data}
          onReorder={dispatch(reorder)}
          axis="y"
        >
          {data.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </Reorder.Group>
      )
    }  */
  //   Sortable JS
  /*  return (
          <ReactSortable
            animation={200}
            delay={2}
            list={todos}
            setList={setTodos}
            className="list"
          >
            {todos.map((todo) => (
              <Todo key={todo.id} todo={todo} />
            ))}
          </ReactSortable>
        )*/

  // Beautiful DND

  const handleOnDragEnd = (result) => {
    return dispatch(reorder(result))
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="todos">
        {(provided) => (
          <ul
            className="list"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {data.map((todo, index) => {
              return (
                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                  {(provided) => (
                    <li
                      className="todo"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
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
              )
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}
