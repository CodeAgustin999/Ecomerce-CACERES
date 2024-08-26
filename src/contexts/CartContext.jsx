import { createContext, useContext, useState } from "react";
export const CartContext = createContext({items:[]}
);

export const Provider = ({ children }) => {
const [items, setItems] = useState([]);

const addItem = (item, cantidad)=>{
    const itemIndex = items.findIndex(prod => prod.id === item.id);
    if (itemIndex!== -1){
        setItems(prevItems=>{
            const updateItems = [...prevItems];
            updateItems[itemIndex]={...updateItems[itemIndex], cantidad:updateItems[itemIndex].cantidad + cantidad};
            return updateItems;
        });

    }else{
        setItems(prevItems =>[...prevItems, {...item,cantidad}])
    }
    
}

const removeList = () => {
    setItem([]);
};

const deleteItem = (Itemid) => {
    const cartUpdate = Cart.filter((prod) => prod.id !== itemId);
    setItem(ItemtUpdate);
};
const isIncart = (itemId)=>{
    return items.some(prod=> prod.id === itemId)
}
return (
    <CartContext.Provider value={{ items, removeList, addItem, deleteItem, }}>
    {children}
    </CartContext.Provider>
);
};

