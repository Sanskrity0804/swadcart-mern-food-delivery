import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/assets";
import axios from "axios"

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:4000"
    const [token, setToken] = useState("");
    // const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [food_list, setFoodList] = useState([])

    // const addToCart = async (itemId) => {
    //     if(!cartItems[itemId]) {
    //         setCartItems((prev)=>({...prev,[itemId]:1}))
    //     }
    //     else {
    //         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    //     }
    //     if (token) {
    //         await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    //     }

    // }

    const addToCart = async (itemId) => {
  if (getTotalCartAmount() === 0) {
    setCartItems({});
  }
  let cartData = structuredClone(cartItems);
  cartData[itemId] = (cartData[itemId] || 0) + 1;
  setCartItems(cartData);
  if (token) {
    await axios.post(url+"/api/cart/add", {itemId, userId}, {headers:{token}});
  }
};


    // const removeFromCart = async (itemId) => {
    //     setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    //     if (token) {
    //         await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
    //     }
    // }   
    
    const removeFromCart = async (itemId) => {
  let cartData = structuredClone(cartItems);
  cartData[itemId] -= 1;
  if (cartData[itemId] <= 0) {
    delete cartData[itemId];
  }
  setCartItems(cartData);
  if (token) {
    await axios.post(url+"/api/cart/remove", {itemId, userId}, {headers:{token}});
  }
};

    // const getTotalCartAmount = () => {
    //     let totalAmount = 0;
    //     for(const item in cartItems)
    //     {
    //         if (cartItems[item]>0) {
    //             let itemInfo = food_list.find((product) => product._id === item);
    //             totalAmount += itemInfo.price* cartItems[item];
    //     }
    // }
    // return totalAmount;
    // }

    const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {

        if (cartItems[item] > 0) {

            let itemInfo = food_list.find((product) => product._id === item);

            if (itemInfo) {   // ✅ important safety check
                totalAmount += itemInfo.price * cartItems[item];
            }

        }
    }

    return totalAmount;
}

    const fetchFoodList = async () => {
        const response = await axios.get(url+"/api/food/list");
        setFoodList(response.data.data)
    }

    const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/get",{},{headers:{ token } });
        setCartItems(response.data.cartData);
    }    

//     const loadCartData = async (token) => {

//     const response = await axios.post(url + "/api/cart/get",{},{ headers: { token }} );

//     setCartItems(response.data.cartData || {});
// }

    useEffect(()=> {
        async function loadData() {
            await fetchFoodList();
            if(localStorage.getItem("token")) {
           setToken(localStorage.getItem("token"));
           await loadCartData(localStorage.getItem("token"))
        }
    }
    loadData();
    },[])


    // useEffect(()=>{
    //     console.log(cartItems);
    // },[cartItems])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider