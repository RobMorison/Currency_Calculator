import { Routes, Route } from "react-router-dom";
import './App.css';
import EuroPage from './pages/EuroPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/euro" element={<EuroPage/>}/>
      </Routes>
    </div>
  );
}

export default App;