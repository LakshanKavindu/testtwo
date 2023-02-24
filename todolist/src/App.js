
import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

// pages importing
import Home from './pages/Home';
import Addtodo from './pages/Addtodo';
import Inventory from './pages/Inventory';
import Addnew from './pages/Addnew';
import Adminsignin from './pages/Adminsignin';
import Admindashboard from './pages/Admindashboard';
import Pharmacydash from './pages/Pharmacydash';
import Pharmacydashprofile from './pages/Pharmacydashprofile'
import Userfront from './pages/Userfront'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/add" element={<Addtodo/>}/> */}
          <Route path="/inventory" element={<Inventory/>}/>
          <Route path='/addnew' element={<Addnew/>}/>
          <Route path='/pharmacydash' element={<Pharmacydash/>}/>
          <Route path='/pharmacydashprofile' element={<Addnew/>}/>
          <Route path='/userfront' element={<Userfront/>}/>
          <Route path='/adminsignin' element={<Adminsignin/>}/>
          <Route path='/admindashboard' element={<Admindashboard/>}/>
          <Route path='/Pharmacydashprofile' element={<Pharmacydashprofile/>}/>
        </Routes>

      </BrowserRouter>
     
    </div>
  );
}

export default App;
