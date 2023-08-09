import './styles/App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import His from "./components/hsdkjf"
import Home from "./components/home"
import Navigation from "./components/navigation"
import Masthead from "./components/masthead"

// <Navigation> needs to be a direct child of BrowerRouter
function App() {
  return (<>
    <div className='viewport'>
      <Masthead />
      <BrowserRouter>
        <Navigation />
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="/projects" element={<His />} />
            <Route path="/his" element={<His />} />
        </Routes>
      </BrowserRouter>
    </div></>
  );
}

export default App;
