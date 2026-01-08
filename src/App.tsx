import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ModelDetail from './pages/ModelDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/model/:id" element={<ModelDetail />} />
    </Routes>
  )
}

export default App
