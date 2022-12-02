import { useEffect, useContext } from 'react';

import { Preloader } from '../components/Preloader';
import { ItemsList } from '../components/ItemsList';
import { Cart } from '../components/Cart';
import { CartList } from '../components/CartList';
import { Alert } from '../components/Alert';

import { ShopContext } from '../context';

import { API_KEY, API_URL } from '../config';

function Shop() {
  const {
    setShopItems,
    loading,
    order,
    cartShow,
    alertName,
  } = useContext(ShopContext);

  useEffect(function getItems() {
    fetch(API_URL, {
      headers: {
        'Authorization':  API_KEY,
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setShopItems(data.shop);
      })
  }, [setShopItems]);

  return (
    <main className="page-main">
      <div className="container">
        <Cart quantity={order.length} />
        {loading ? <Preloader /> : <ItemsList />}
        {cartShow && <CartList/>}
      </div>
      {alertName && <Alert />}
    </main>
  )
}

export { Shop }