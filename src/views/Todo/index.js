import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { map } from 'lodash';
import { Table } from 'reactstrap';
import { getTodos } from '../../state/ducks/todo/actions';

const TodoRow = ({ todo }) => (
  <tr>
    <th scope="row">{todo.id}</th>
    <td>{todo.task}</td>
    <td>{todo.complete ? 'True' : 'False' }</td>
  </tr>
)


class TODO extends Component {

  componentDidMount(){
    this.props.actions.getTodos();
  }

  render() {
    const { todos } = this.props;
    return (
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
  }
}

const mapDispachToProps = (dispatch) => {
  return (
    { actions:
      bindActionCreators({
        getTodos,
      }, dispatch) }
)}

const mapStateToProps = state => ({
  todos: state.todosState.todos,
});

export default  connect(mapStateToProps, mapDispachToProps)(TODO)

