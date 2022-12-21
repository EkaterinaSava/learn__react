import { useContacts, Types } from './ContactsProvider';

export function ContactsToolbar() {
  const [state, dispatch] = useContacts();
  const { selectedId } = state;

  const removeSelected = () => {
    dispatch({
      type: Types.REMOVE,
      payload: { id: selectedId },
    });
  };

  const rollbackChanges = () => {
    dispatch({
      type: Types.ROLLBACK,
    });
  };

  const buttonStyle = {
    marginRight: 10,
    padding: 10,
    backgroundColor: 'white',
    border: '1px solid cadetblue',
    borderRadius: 6,
  };

  return (
    <div>
      {selectedId ? (
        <button style={buttonStyle} onClick={removeSelected}>
          Remove Selected
        </button>
      ) : null}
      <button style={buttonStyle} onClick={rollbackChanges}>
        Rollback Changes
      </button>
    </div>
  );
}