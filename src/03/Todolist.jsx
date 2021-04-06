import React from 'react';

class TodoList extends React.Component {
  render() {
    const todoList = [
      { taskName: '빨래하기', finished: false },
      { taskName: '공부하기', finished: true },
    ];
    return (
      // key값은 고유한 값으로 지정해야한다.
      <div>
        {todoList.map((todo) => (
          <div key={todo.taskName}>{todo.taskname}</div>
        ))}
      </div>
    );
  }
}

export default TodoList;
