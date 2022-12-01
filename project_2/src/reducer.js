export function reducer(state, {type, payload}) {
  switch (type) {

    case 'ADD_TO_CART': {
      const itemIndex = state.order.findIndex(orderItem => {
        return orderItem.offerId === payload.offerId;
      });
      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        }
        newOrder = [...state.order, newItem];
      } else {
        const newOrder = state.order.map((orderItem , index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        })
        return {
          ...state,
          order: newOrder,
          alertName: payload.displayName,
        }
      }
    }

    case 'INCREASE_QUANTITY':
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.offerId === payload.itemId) {
            const newQuantity = el.quantity + 1;
            return {
              ...el,
              quantity: newQuantity,
            }
          } else {
            return el;
          }
        })
      };

    case 'DECREASE_QUANTITY':
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.offerId === payload.itemId) {
            const newQuantity = el.quantity - 1;
            return {
              ...el,
              quantity: newQuantity >= 0 ? newQuantity : 0,
            }
          } else {
            return el;
          }
        })
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        order: state.order.filter((el) => el.offerId !== payload.offerId),
      };

    case 'TOGGLE_CART':
      return {
        ...state,
        cartShow: !state.cartShow,
      };

    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: '',
      };

    default:
      return state;
  }
}