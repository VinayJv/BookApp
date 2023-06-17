import './App.css';
import { Home } from './pages/Home';
import {Routes, Route} from "react-router-dom";
import { Search } from './component/Search';
import { useNavigate } from 'react-router-dom';
import { useDataContext } from './context/dataContext';

function App() {
  const {input,setInput} = useDataContext();
  const navigate = useNavigate();

  const searchHandler = (event) => {
    navigate("/search");
    setInput(event.target.value);
  };

  return (
    <div className="App">
      <input type="search" placeholder="Enter Book Title" onChange={searchHandler}></input>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/search' element={<Search />}></Route>
      </Routes>
    </div>
  );
}

export default App;
