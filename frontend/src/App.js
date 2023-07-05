import './app.css';
import Home from "./component/home";
import Expense from "./component/expense";
import Edit from "./component/edit";
import {BrowserRouter as Router, Navigate, Route, Routes, useNavigate} from "react-router-dom";
import Details from "./component/details";

import Income from "./component/income";
function App() {
    const Navigate = useNavigate();
  return (
      <>
      <div className="navbar">
          <div className="Home"  onClick={()=>Navigate('/')}> Money Manager </div>
          <div className="category"> Category <i className="fa-sharp fa-solid fa-bars"></i></div>
          <div className="signin">Yashasvi<i className="fa-solid fa-user"></i> </div>



      </div>
              <Routes>
                  <Route path='/' element={<Home/>}></Route>
                  <Route path='/details' element={<Details/>}></Route>
                  <Route path='/expense' element={<Expense/>}></Route>
                  <Route path='/income' element={<Income/>}></Route>
                  <Route path='/edit' element={<Edit/>}></Route>
              </Routes>
      </>
  );
}

export default App;
