import { useDataContext } from "../context/dataContext";
import { BookCard } from "./BookCard";
import { NavLink } from "react-router-dom";


export function Search(){
    const {productsData, input} = useDataContext();
    
    const filterData = () => {
        let temp = [];
        temp = input === "" ? productsData : productsData.filter((book)=>book.name.toUpperCase().includes(input.toUpperCase()));
        return temp;
    };
    
    return (<div>
        <NavLink to="/">Home</NavLink>
        <h1>This is Search</h1>
        {filterData().map((book)=><BookCard props={book} key={book.id}/>)}
    </div>)
}