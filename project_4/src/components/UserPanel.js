import { UserContext } from './UserContext';
import { UserTitle } from './UserTitle';
import { UserAvatar } from './UserAvatar';


const style = {
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 20,
  borderWidth: 2,
  border: '2px dashed #DDD',
};

const user = {
  firstName: 'Jack',
  middleName: 'the',
  lastName: 'Cat',
  avatarUrl: 'https://cataas.com/cat',
};

export function UserPanel() {
  return (
    <div style={style}>
      <UserContext.Provider value={user}>
        <UserAvatar />
        <br />
        <UserTitle />
      </UserContext.Provider>
    </div>
  );
}