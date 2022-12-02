import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
  items: [],
  loading: true,
  order: [],
  cartShow: false,
  alertName: '',
};

export const ContextProvider = ({ children}) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispatch({type: 'CLOSE_ALERT'});
  };

  value.addToCart = (item) => {
    dispatch({type: 'ADD_TO_CART', payload: item});
  };

  value.increaseQuantity = (itemId) => {
    dispatch({type: 'INCREASE_QUANTITY', payload: {offerId: itemId}});
  }

  value.decreaseQuantity = (itemId) => {
    dispatch({type: 'DECREASE_QUANTITY', payload: {offerId: itemId}});
  }

  value.handleCartShow = () => {
    dispatch({type: 'TOGGLE_CART'});
  }

  value.removeFromCart = (itemId) => {
    dispatch({type: 'REMOVE_FROM_CART', payload: {offerId: itemId}});
  };

  value.setShopItems = (data) => {
    dispatch({type: 'SET_SHOP_ITEMS', payload: data});
  };

  return (
    <ShopContext.Provider
      value={value}
    >
      {children}
    </ShopContext.Provider>
  );
};