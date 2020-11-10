import React from 'react'
import Head from './commponents/Head/Head'
import ListTodo from './commponents/ListTodo'
import Serch from './commponents/Serch'
import ItemStatusFilter from './commponents/ItemStatusFilter'

class App extends React.Component {
  state = {
    todoData: [
      { label: 'Buy coffee', important: false, id: 1 },
      { label: 'Complete the repair', important: true, id: 2 },
      { label: 'To wash a car', important: false, id: 3 },
    ],
  }
  deleteTodoIteme = (id) => {
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

  render() {
    return (
      <div className="todo-app">
        <Head toDo={1} done={3} />
        <div className="top-panel d-flex">
          <Serch />
          <ItemStatusFilter />
        </div>
        <ListTodo
          todos={this.state.todoData}
          onDeleted={this.deleteTodoIteme}
        />
      </div>
    )
  }
}

export default App
