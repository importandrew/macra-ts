import './App.css'
import MainPage from './components/Main/Main.tsx';
import {NextUIProvider} from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <MainPage />
    </NextUIProvider>
  )
}

export default App
