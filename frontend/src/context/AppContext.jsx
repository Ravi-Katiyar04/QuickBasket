import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

// Create a context for the app
// This context will be used to share state and functions across the application
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const currency= import.meta.env.VITE_CURRENCY;
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isSellar, setIsSellar] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [products, setProducts] = useState([])

    const [cartItems, setCartItems] = useState({})
    const [searchQuery, setSearchQuery] = useState({})

    const fetchProducts = async () => {
        setProducts(dummyProducts);
    }

    const addToCard= (itemId) => {
        let cardData= structuredClone(cartItems);

        if(cardData[itemId]){
            cardData[itemId] +=1;
        }else{
            cardData[itemId]=1;
        }
        setCartItems(cardData);
        toast.success("added to cart");
    }

    const updateCardItems = () => {
        let cardData= structuredClone(cartItems);
        cardData[itemId] = quantity;
        setCartItems(cardData);
        toast.success("cart updated");
    }

    const removeFromCart = (itemId) => {
        let cardData= structuredClone(cartItems);

        if(cardData[itemId]){
            cardData[itemId] -=1;

            if(cardData[itemId]===0){
                delete cardData[itemId];
            }
        }
        toast.success("removed from cart");
        setCartItems(cardData);
        
    }

    useEffect(() => {
        fetchProducts();
    }, [])
    
    const value = {
        navigate,
        user,
        setUser,
        isSellar,
        setIsSellar,
        showUserLogin,
        setShowUserLogin,
        products,
        currency,
        addToCard,
        updateCardItems,
        removeFromCart,
        cartItems,
        searchQuery,
        setSearchQuery,
    };

    return (
        <AppContext.Provider
            value={value}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppCOntext = () => {
    return useContext(AppContext);
};