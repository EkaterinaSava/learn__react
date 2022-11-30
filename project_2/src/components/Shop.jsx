import { useState, useEffect } from 'react';
import { Preloader } from '../components/Preloader';
import { ItemsList } from '../components/ItemsList';
import { Cart } from '../components/Cart';
import { CartList } from '../components/CartList';
import { API_KEY, API_URL } from '../config';

function Shop() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [cartShow, setCartShow] = useState(false); 
 
  const addToCart = (item) => {
    const itemIndex = order.findIndex(orderItem => {
      return orderItem.offerId === item.offerId;
    });

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      }
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem , index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      })
      setOrder(newOrder);
    }
  };

  const removeFromCart = (itemId) => {
    const newOrder = order.filter((el) => el.offerId !== itemId);
    setOrder(newOrder);
  };

  const increaseQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.offerId === itemId) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        }
      } else {
        return el;
      }
    })
    setOrder(newOrder);
  };

  const decreaseQuantity = (itemId) => {
    const newOrder = order.map((el) => {
      if (el.offerId === itemId) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        }
      } else {
        return el;
      }
    })
    setOrder(newOrder);
  };

  const handleCartShow = () => {
    setCartShow(!cartShow);
  }

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
        <Cart quantity={order.length} handleCartShow={handleCartShow} />
        {loading ? <Preloader /> : <ItemsList items={items} addToCart={addToCart} />}
        {cartShow &&
          <CartList
            order={order}
            handleCartShow={handleCartShow}
            removeFromCart={removeFromCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />}
      </div>
    </main>
  )
}

export { Shop }