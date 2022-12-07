const INIT_STATE = {
  carts: [],
};
// console.log(INIT_STATE);

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      //if the item is already present in cart than increase only the quantity else add the item
      const itemIndex = state.carts.findIndex(
        (item) => item.id == action.payload.id
      );

      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "RMV_CART":
      const data = state.carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: data,
      };

    case "RMV_ONE":
      const itemIndexDec = state.carts.findIndex(
        (item) => item.id == action.payload.id
      );
      if (state.carts[itemIndexDec].qnty > 1) {
        const dltItem = (state.carts[itemIndexDec].qnty -= 1);
        console.log([...state.carts, dltItem]);
        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[itemIndexDec].qnty === 1) {
        const data = state.carts.filter((el) => el.id !== action.payload.id);
        return {
          ...state,
          carts: data,
        };
      }

    default:
      return state;
  }
};
