import React from 'react'
import Head from './commponents/Head/Head'
import ListTodo from './commponents/ListTodo'
import Serch from './commponents/Serch'
import ItemStatusFilter from './commponents/ItemStatusFilter'
import TodoAddForm from './commponents/TodoAddForm'

const onToggle = () => {}
class App extends React.Component {
  maxId = 100
  state = {
    todoData: [
      this.createTodo('Buy coffee'),
      this.createTodo('Complete the repair', true),
      this.createTodo('To wash a car'),
    ],
    filter: 'All',
    term: '',
  }
  createTodo(label, important = false) {
    return {
      label,
      important: important,
      done: false,
      id: this.maxId++,
    }
  }
  onToggle = (prevState, name, id) => {
    const idx = prevState.findIndex((todo) => todo.id === id)
    const updateItem = {
      ...prevState[idx],
      [name]: !prevState[idx][name],
    }
    return [...prevState.slice(0, idx), updateItem, ...prevState.slice(idx + 1)]
  }

  deleteTodoIteme = (id) => {
    onToggle()
    this.setState(({ todoData }) => {
      //const idx = todoData.findIndex((el) => el.id === id)
      // return {
      //   todoData: [
      //     ...this.state.todoData.slice(0, idx),
      //     ...this.state.todoData.slice(idx + 1),
      //   ],
      // }
      return {
        todoData: [...todoData.filter((el) => el.id !== id)],
      }
    })
  }
  addTodoItem = (text) => {
    this.setState(({ todoData }) => {
      const newArr = [...todoData, this.createTodo(text)]
      return {
        todoData: newArr,
      }
    })
  }
  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.onToggle(todoData, 'done', id),
      }
    })
  }
  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.onToggle(todoData, 'important', id),
      }
    })
  }
  onStatusFilter = (type) => {
    this.setState((state) => {
      return {
        ...state,
        filter: type,
      }
    })
  }
  sortedTodo = (todoData) => {
    switch (this.state.filter) {
      case 'Active':
        return todoData.filter((el) => {
          return el.done !== true
        })
      case 'Done':
        return todoData.filter((el) => {
          return el.done === true
        })
      default:
        return todoData
    }
  }
  serch = (term) => {
    this.setState((state) => ({ ...state, term: term }))
  }
  serchItems = (todos, term) => {
    if (term) {
      return todos.filter(({ label }) => {
        return label.toLowerCase().indexOf(term.toLowerCase()) > -1
      })
    }
    return todos
  }

  render() {
    const { todoData, term } = this.state
    const doneCount = todoData.filter((el) => el.done === true).length
    const toDoCount = todoData.length - doneCount
    const visibleItem = this.sortedTodo(this.serchItems(todoData, term))
    return (
      <div className="todo-app">
        <Head toDo={toDoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <Serch serchItem={this.serch} />
          <ItemStatusFilter statusFilter={this.onStatusFilter} />
        </div>
        <ListTodo
          todos={visibleItem}
          onDeleted={this.deleteTodoIteme}
          onImportant={this.onToggleImportant}
          onDone={this.onToggleDone}
        />
        <TodoAddForm addItem={this.addTodoItem} />
      </div>
    )
  }
}

export default App
