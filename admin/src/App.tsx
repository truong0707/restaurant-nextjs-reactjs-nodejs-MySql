import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import DoashBoard from './pages/DoashBoard';
import UserManage from "./pages/UserManage";
import ProductManage from "./pages/ProductManage";
import BlogManage from "./pages/BlogManage";

function App() {
  return (
    <div className="App">
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
