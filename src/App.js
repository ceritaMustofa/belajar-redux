import logo from './logo.svg';
import './App.css';
import Loginpage from './component/Loginpage';
import InputNilaiForm from './component/InputNilaiForm';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Dashboard from './UI/Dashboard';
import NilaiSiswa from './component/NilaiSiswa';


function App() {
  const {token} =useSelector(state=>state.auth)
  return (
    <div className="App flex flex-col justify-center gap-2">
      <Routes>
        <Route path='/' element={token?<Navigate to="/dashboard" replace /> :<Loginpage />} />
        <Route path='/dashboard' element={token?<Dashboard/>:<Navigate to="/" replace />} />
      </Routes>

      {/* <Loginpage />
      <InputNilaiForm /> */}
    </div>
  );
}

export default App;
