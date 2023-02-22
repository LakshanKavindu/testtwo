
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

// pages importing
import Home from './pages/Home';
import Addtodo from './pages/Addtodo';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add" element={<Addtodo/>}/>
        </Routes>

      </BrowserRouter>
     
    </div>
  );
}

export default App;
