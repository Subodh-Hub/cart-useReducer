const initialState = {
  dummyData: [],
  totalCount: 0,
  totalPrice: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "increase": {
      const updatedData = state.dummyData.map((el, index) =>
        index === action.ind ? { ...el, itemCount: el.itemCount + 1 } : el
      );
      return {
        ...state,
        dummyData: updatedData,
        totalCount: getTotalCount(updatedData),
        totalPrice: getTotalPrice(updatedData),
      };
    }

    case "decrease": {
      const updatedData = state.dummyData.map((el, index) =>
        index === action.ind
          ? { ...el, itemCount: Math.max(0, el.itemCount - 1) }
          : el
      );
      return {
        ...state,
        dummyData: updatedData,
        totalCount: getTotalCount(updatedData),
        totalPrice: getTotalPrice(updatedData),
      };
    }

    case "append":
      return {
        ...state,
        dummyData: action.payload,
        totalCount: getTotalCount(action.payload),
        totalPrice: getTotalPrice(action.payload),
      };

    case "remove": {
      const updatedData = state.dummyData.filter(
        (_, index) => index !== action.ind
      );
      return {
        ...state,
        dummyData: updatedData,
        totalCount: getTotalCount(updatedData),
        totalPrice: getTotalPrice(updatedData),
      };
    }

    default:
      throw new Error("Unhandled action type");
  }
};

const getTotalCount = (data) => {
  return data.reduce((acc, item) => acc + item.itemCount, 0);
};

const getTotalPrice = (data) => {
  return data.reduce((acc, item) => acc + item.price * item.itemCount, 0);
};

export default reducer;
