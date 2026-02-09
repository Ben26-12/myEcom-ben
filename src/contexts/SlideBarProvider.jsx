import { MOCK_USER_ID } from "@/components/ProductCard/constants";
import { createContext, useEffect, useState } from "react";
export const slideBarContext = createContext();
import { getCart } from "@/apiServices/cartService";

function SlideBarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("cart");
  const [listProductCart, setListProductCart] = useState([]);
  const handleGetListProductsCart = (userId, type) => {
    if (userId && type === "cart") {
      getCart(userId)
        .then((res) => {
          setListProductCart(res.data.data);
        })
        .catch((err) => {
          setListProductCart([]);
        });
    }
  };
  const value = {
    isOpen,
    setIsOpen,
    type,
    setType,
    listProductCart,
    setListProductCart,
    handleGetListProductsCart,
  };
  return (
    <slideBarContext.Provider value={value}>
      {children}
    </slideBarContext.Provider>
  );
}

export default SlideBarProvider;
