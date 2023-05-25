import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { StrictModeDroppable as Droppable } from '../../helpers/StrictModeDroppable'
import { reorderTodos, selectVisibleTodos } from './todo-slice'
import { DragDropContext } from 'react-beautiful-dnd'
import Todo from './Todo'

const TodoList = () => {
  const dispatch = useDispatch()
  const { filter } = useParams()
  const data = useSelector((state) => selectVisibleTodos(state, filter))

  const handleOnDragEnd = (result) => {
    return dispatch(reorderTodos(result))
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
            {data.map((todo, index) => (
              <Todo key={todo.id} todo={todo} index={index} />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}
export default TodoList
