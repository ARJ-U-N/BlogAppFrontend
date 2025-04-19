import logo from './logo.svg';
import './App.css';
import Signup1 from './comp/Signup1';
import Signin from './comp/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreatePost from './comp/CreatePost';
import ViewAll from './comp/ViewAll';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signup'element={<Signup1 />}/>
      <Route path='/'element={<Signin />}/>
      <Route path='/create'element={<CreatePost />}/>
      <Route path='/viewall'element={<ViewAll />}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
