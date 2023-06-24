import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants/cartConstants"

const initialData ={
    cartItems: [],
    shippingInfo : {}
}

const cartReducer = (state=initialData, action) => {
    switch(action.type){
        case ADD_TO_CART:
              const item = action.payload
           const itemExists = state.cartItems.find(i=>i.product === item.product)
           if(itemExists){
                return{
                    ...state,
                    cartItems: state.cartItems.map(i=>i.product===itemExists.product?item:i)
                }
           }
           else{
            return{
                ...state,
                cartItems: [...state.cartItems, item]
            }
           }

           case REMOVE_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter(i=>i.product!==action.payload)
            }

            case CLEAR_CART:
                return{
                    ...state,
                    cartItems : []
                }
        
            default:
                return state
    }
 
}