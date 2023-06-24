import axios from 'axios'
import { ADD_TO_CART } from '../constants/cartConstants'


export const addItemToCart = (id,quantity) => async(dispatch, getState)=>{
    const {data} = await axios.get(`${API}/productdetails/${id}`)
    dispatch({
        type: ADD_TO_CART,
        payload: {
            product : data._id,
            name: data.product_name,
            price: data.product_price,
            image: data.product_image,
            stock: data.count_in_stock,
            quantity
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

