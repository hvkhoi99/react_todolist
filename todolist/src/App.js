import React, {PureComponent} from 'react';
import './App.css';
import Header from './components/header';
import TodoList from './components/todolist';
import './index.css'


const rmTodo = (todo = [], id = '') => {
  return todo.filter(todo => todo.id !== id);
}
class App extends PureComponent{
  state = {
    todoList: [{
        id: 1,
        name: 'lấy N1',
        status: true
    }, {
        id: 2,
        name: 'mua súng',
        status: false 
    }],
    todoEditingId: ''
  }

  addTodo = (todo = {}) =>{
    this.setState(preState => ({
      todoList: [...preState.todoList, todo]
    }))
  }

  checkedWork = (id = '') =>{
    this.setState(preState =>({
      todoList: preState.todoList.map(todo => todo.id === id ? ({ ...todo, status: !todo.status}) : todo)
    }))
  }

  getTodoEditingId = (id = '') => {
    this.setState({todoEditingId: id})
  }

  onEditTodo = (todo = {}, index = -1) => {
    if(index>=0){
      const {todoList: list} = this.state;
      list.splice(index, 1, todo);
      this.setState({
        todoList: list,
        todoEditingId: ''
      })
    }
  }

  removeTodo = (id = '') => {
    const { todoList} = this.state;
    this.setState({
      todoList: rmTodo(todoList, id)
    })
  }

  render(){
    const {todoList, todoEditingId} = this.state;
    return (
      <div className="App">
        <main>
          <Header addTodo={this.addTodo}/>
          <TodoList 
            todoList={todoList}
            getTodoEditingId={this.getTodoEditingId}
            todoEditingId={todoEditingId}
            onEditTodo={this.onEditTodo}
            checkedWork={this.checkedWork}
            removeTodo={this.removeTodo}
            />
        </main>
      </div>
    );
  }
  
}

export default App;
