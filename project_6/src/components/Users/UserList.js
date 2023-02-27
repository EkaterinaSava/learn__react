import Card from "../UI/Card";

import styles from './UserList.module.css';

const UserList = (props) => {

  return (
    <Card>
      <ul className={styles.users}>
        {props.users.map(user => (
          <li key={user.id} className={styles.user}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;