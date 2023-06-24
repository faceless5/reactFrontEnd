import { composeWithDevTools } from "redux-devtools-extension"



const reducer = combineReducers({
    cart: cartReducer,
    newOrder : orderReducer,
    
})

let initialState={
    cartItems: localStorage.getItems('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[],
    shippingInfo: localStorage.getItem('shippingInfo')?JSON.parse(localStorage.getItem('shippingInfo')): {}
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
export default store