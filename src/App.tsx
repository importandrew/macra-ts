import './App.css'
import MainPage from './components/Main/Main';
import LoginPage from './components/Login/Login';
import TestPage from './components/Test/Test';
import Now from './components/Now/Now';
import {NextUIProvider} from "@nextui-org/react";
import {Route, Routes, useNavigate} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
})

function App() {
  const navigate = useNavigate();

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider navigate={navigate}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/now" element={<Now />} />
        </Routes>
      </NextUIProvider>
    </QueryClientProvider>
  )
}

export default App
