import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Create } from "./pages/create/Create";
import { BlogPage } from "./pages/blogpage/BlogPage";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { checkedIsLoggedIn } from "./redux/actionCreators/authActionCreator";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkedIsLoggedIn());
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/create" element={<Create />} />

          <Route path="/blog/:blogId" element={<BlogPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
