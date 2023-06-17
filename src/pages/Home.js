import { BookCard } from "../component/BookCard";
import { useDataContext } from "../context/dataContext";
import { useNavigate } from "react-router";

export function Home(){
    const {productsData,setProductsData} = useDataContext();
    
    const navigate = useNavigate();

    const categories = productsData.map((book)=>book.category);

    const FilteredCategories = categories.filter((category,index)=>index === categories.indexOf(category));

    const filterData = (category) => {
        return productsData.filter((book)=>book.category === category);
    };

    return(<div>
        {FilteredCategories.map((category,index)=><div key={index}>
            <h1>{category}</h1>
            <div className="container">
                {filterData(category).map((book)=><BookCard props={book} key={book.id}/>)}
            </div>
        </div>)}
    </div>);
}