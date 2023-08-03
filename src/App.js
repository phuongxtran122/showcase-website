import logo from './logo.svg';
import './styles/App.css';
import ReactDOM from 'react-dom';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import His from "./components/hsdkjf"
import Home from "./components/home"
import Navigation from "./components/navigation"

function App() {
  return (
    <div className='viewport'>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navigation />} />
            <Route path="/home" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="/projects" element={<His />} />
            <Route path="/contacts" element={<His />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
