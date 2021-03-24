export const initialState = {
    basket: []
};

// always listening for action
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state, // whatever the state originally was
                basket: [...state.basket, action.item] // what ever it was plus the new item
            };
        default:
            return state;
    }
};

export default reducer;
