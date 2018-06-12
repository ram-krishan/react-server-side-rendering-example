import React from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';
import { Table } from 'reactstrap';


const UserRow = ({ user }) => (
  <tr>
    <th scope="row">{user.id}</th>
    <td>{user.name}</td>
  </tr>
);

const User = ({users}) => (
  <div>
    <div> User page.... </div>
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        { map(users, user => <UserRow user={user} /> )}
      </tbody>
    </Table>
  </div>
);

const mapStateToProps = state => ({
  users: state.usersState.users,
});

export default  connect(mapStateToProps, null)(User)

