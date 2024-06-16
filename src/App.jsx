import "./App.css";
// import Header from "./Components/Header";
import Home from "./Components/Home";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
      <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
