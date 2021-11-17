import './App.css';

import {
  BrowserRouter as Router,
  Routes, 
  Route
} from "react-router-dom";

import {Header} from './components/header/index';
import {Footer} from './components/footer/index';
import {HomePage} from "./components/pages/home/index";
import {Rooms} from './components/pages/rooms/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
         <Routes>
          <Route exact path="/" element={<HomePage/>}></Route>
          <Route path="/rooms" element={<Rooms/>}></Route>
        </Routes> 
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
