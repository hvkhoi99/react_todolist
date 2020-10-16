import React, {memo} from 'react';
import Todo from './todo'

const TodoList = memo(props =>{
    const {todoList} = props;
    return(
        <div className="list" id="list">
            <ul id="list-work">
                {
                    todoList.map((todo, index) => <Todo key={`todo${todo.id}`} {...{todo}} {...props} index={index}/>)
                }
            </ul>
        </div>
    )
})

export default TodoList