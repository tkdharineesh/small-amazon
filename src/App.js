import './App.css';
import {Routes,Route} from "react-router-dom";
import HomePage from './Components/HomePage/HomePage';
import Loginpage from './Components/Loginpage/Loginpage';
import Layout from './Components/Common Component/Layout/Layout';
import Cartpage from './Components/Cartpage/Cartpage';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Loginpage/>}/>
        <Route element={<Layout/>}>
          <Route path='/HomePage' element={<HomePage/>}/>
          <Route path='/Cart' element={<Cartpage/>}/>

          </Route>
      </Routes>
    </div>
  );
}

export default App;
