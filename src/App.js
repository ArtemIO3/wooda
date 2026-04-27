import logo from './logo.svg';
import './App.css';
import { MainPage } from './components/MainPage/MainPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductPage } from './components/ProductPage/ProductPage';
import { CommentPage } from './components/CommentPage/CommentPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path="/" element={<MainPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/comment" element={<CommentPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
