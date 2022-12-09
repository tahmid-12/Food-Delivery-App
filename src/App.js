import Home from './components/home/Home';
import Login from './components/auth/Login';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Restaurant /> */}
      <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
