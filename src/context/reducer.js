export const initialState = {
  user: null,
  foodItems : [],
  cartItems : [],
  cartShow : false,
  cartTotal : 0,
};

export const actionType = {
  SET_USER: "SET_USER",
  SET_FOOD_ITEMS: "SET_FOOD_ITEMS",
  SET_CART_SHOW: "SET_CART_SHOW",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  INCREASE_QUANTITY: "INCREASE_QUANTITY",
  DECREASE_QUANTITY: "DECREASE_QUANTITY",
  CALCULATE_TOTAL: "CALCULATE_TOTAL",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return { ...state, user: action.user };
    case actionType.SET_FOOD_ITEMS:
      return { ...state, foodItems: action.foodItems };
    case actionType.SET_CART_SHOW:
      return { ...state, cartShow: action.cartShow };
    case actionType.SET_CART_ITEMS:
      return { ...state, cartItems: action.cartItems };
    case actionType.INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.id ? { ...item, quantity: item.quantity++ } : item
        ),
      };
    case actionType.DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.id
            ? { ...item, quantity: item.quantity > 1 ? item.quantity-- : 1 }
            : item
        )};
    case actionType.CALCULATE_TOTAL: 
        const totalPrice = state.cartItems.reduce((total, current) => {
          return total + (current.price * current.quantity)
        }, 0)
        return { ...state, cartTotal: Number(totalPrice).toFixed(2) };
    default:
      return state;
  }
};
