import './App.css'
import MainPage from './components/Main/Main.tsx';
import {NextUIProvider} from "@nextui-org/react";
import {Route, Routes, useNavigate} from 'react-router-dom';


function App() {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </NextUIProvider>
  )
}

export default App
