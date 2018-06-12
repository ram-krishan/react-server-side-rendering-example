import React from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';
import { Table } from 'reactstrap';

const TodoRow = ({ todo }) => (
  <tr>
    <th scope="row">{todo.id}</th>
    <td>{todo.task}</td>
    <td>{todo.complete ? 'True' : 'False' }</td>
  </tr>
)

const TODO = ({todos}) => (
  <div>

    <div> TODO page.... </div>
    <Table>
      <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          { map(todos, todo => <TodoRow todo={todo} /> )}
        </tbody>
    </Table>
  </div>
);

const mapStateToProps = state => ({
  todos: state.todosState.todos,
});

export default  connect(mapStateToProps, null)(TODO)

