import { useEffect  } from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context';

function Alert(props) {
  const {
    alertName = '',
    closeAlert = Function.prototype
  } = useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 30000);

    return () => {
      clearTimeout(timerId);
    }
  }, [alertName, closeAlert])

  return (
    <div id="toast-container">
      <div className="toast">{alertName} added to cart.</div>
    </div>
  );
}

export { Alert };