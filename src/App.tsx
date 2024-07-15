import './App.css'
import MainPage from './components/Main/Main';
import LoginPage from './components/Login/Login';
import {NextUIProvider} from "@nextui-org/react";
import {Route, Routes, useNavigate} from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </NextUIProvider>
  )
}

export default App
