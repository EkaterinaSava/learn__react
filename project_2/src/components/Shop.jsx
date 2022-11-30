import { useState, useEffect } from 'react';
import { Preloader } from '../components/Preloader';
import { ItemsList } from '../components/ItemsList';
import { Cart } from '../components/Cart';
import { API_KEY, API_URL } from '../config';

function Shop() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);

  useEffect(function getItems() {
    fetch(API_URL, {
      headers: {
        'Authorization':  API_KEY,
      }
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setItems(data.shop);
        setLoading(false);
      })
  }, []);

  return (
    <main className="page-main">
      <div className="container">
        <Cart quantity={order.length} />
        {loading ? <Preloader /> : <ItemsList items={items} />}
      </div>
    </main>
  )
}

export { Shop }