import Card from "../UI/Card";

import styles from './UserList.module.css';

const UserList = (props) => {

  console.log(props.users.length);

  return (
    <Card>
      {props.users.length ? (
        <ul className={styles.users}>
          {props.users.map(user => (
            <li key={user.id} className={styles.user}>
              {user.name} - {user.age}
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.empty}>
          <span>No Users here</span>
          <span>Add new Users via Form</span>
        </p>
      )}
    </Card>
  );
};

export default UserList;