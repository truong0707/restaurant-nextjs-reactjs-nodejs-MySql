import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import DoashBoard from './pages/DoashBoard';
import UserManage from "./pages/userManager/UserManage";
import ProductManage from "./pages/productManager/ProductManage";
import BlogManage from "./pages/BlogManage";

function App() {
  return (
    <div style={{ background: '#F2F1F6', minHeight: '1000px', }} className="App">
      <Router>
        <Routes>
          <Route path='/admin' element={<DoashBoard />} />
          <Route path='/admin/users' element={<UserManage />} />
          <Route path='/admin/products' element={<ProductManage />} />
          <Route path='/admin/blogs' element={<BlogManage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
