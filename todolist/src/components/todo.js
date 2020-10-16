import React, { memo, useState } from 'react';

const Todo = memo(props => {
    const {todo, getTodoEditingId, todoEditingId, onEditTodo, index, checkedWork, removeTodo} = props;
    const [name, setName] = useState(todo.name); 
    const isEditing = todoEditingId === todo.id;
    const editTodo = () => {
        onEditTodo({
            ...todo,
            name
        }, index)
    }
    return (
        <li className={`${isEditing ? 'editing' : ''} ${todo.status?'completed':''}`}>
            {!isEditing?
                <div>
                    <input
                        type="checkbox"
                        className="toggle"
                        checked = {todo.status}
                        onChange={() => checkedWork(todo.id)}
                    >
                    </input>
                    <span onDoubleClick={()=> getTodoEditingId(todo.id)} className="span-work-name">{todo.name}</span>
                    <p className="del" onClick={() => removeTodo(todo.id)}>x</p>
                    <span className="check"><i className="fa fa-check" /></span>
                </div>:
                <input
                    className="edit"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    onBlur={editTodo}
                    onKeyPress={(e) => {
                        if(e.key === 'Enter'){
                            editTodo();
                        }
                    }}
                ></input>
            }
        </li>
    )
})

export default Todo