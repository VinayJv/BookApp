import { createContext,useState,useContext } from "react";
import { products } from "../database/books"; 

const DataContext = createContext(null);

export function ContextWrapper({ children }) {
    const [productsData, setProductsData] = useState(products);
    const [input,setInput] = useState("");
    
    return (
        <DataContext.Provider value={{productsData, setProductsData, input, setInput}}>
          {children}
        </DataContext.Provider>
      );
}

export const useDataContext = () => useContext(DataContext);