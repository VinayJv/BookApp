import {useState} from "react";
import { useDataContext } from "../context/dataContext";

export function BookCard({props}){
    const {productsData, setProductsData } = useDataContext();
    const [bookState, setBookState] = useState(props.category);

    const categories = productsData.map((book)=>book.category);

    const FilteredCategories = categories.filter((category,index)=>index === categories.indexOf(category));
    
    const selectedBookId = productsData.find((book)=>book.name === props.name).id;

    const changeCategory = (event) => {
        // setProductsData([[...productsData], (productsData[selectedBookId].category = event.target.value)]);
        console.log(productsData);
    };

    return (<div className="book-card">
        <img src={props.img}></img>
        <p>{bookState}</p>
        <select onChange={changeCategory}>
            {FilteredCategories.map((category)=>
             bookState === category ? <option value={category} selected key={category}>{category}</option>  : <option value={category} key={category}>{category}</option> 
            )}
        </select>
        <p>{props.name}</p>
    </div>);
}