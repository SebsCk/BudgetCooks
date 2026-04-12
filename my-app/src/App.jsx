import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/layout/Navbar'
import Home   from './pages/Home'
import Login  from './pages/Login'
import Signup from './pages/Signup'
import './index.css'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"       element={<Home />}   />
          <Route path="/login"  element={<Login />}  />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
