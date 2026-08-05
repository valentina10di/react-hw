
import { connect } from 'react-redux';
import UserItem from '../UserItem';
import styles from './UserList.module.css';

const UserList = ({ users, filter }) => {
  // Фильтрация без учета регистра (как на Скриншоте 1)
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.list}>
      {filteredUsers.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
  filter: state.filter,
});

export default connect(mapStateToProps)(UserList);