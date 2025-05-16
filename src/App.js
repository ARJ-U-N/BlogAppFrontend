import logo from "./logo.svg";
import "./App.css";
import Signup1 from "./comp/Signup1";
import Signin from "./comp/Signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePost from "./comp/CreatePost";
import ViewAll from "./comp/ViewAll";
import Viewmypost from "./comp/Viewmp"; // Updated import name
import PostDetail from "./comp/PostDetail"; // Import new component
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup1 />} />
        <Route path="/" element={<Signin />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/viewall" element={<ViewAll />} />
        <Route path="/viewmypost" element={<Viewmypost />} /> {/* Updated path */}
        <Route path="/posts/:id" element={<PostDetail />} /> {/* New route */}
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;