import './App.css'
import Apresentation from './pages/Apresentation/Apresentation'
import Login from './pages/Login/Login'
import EscolhasUnidades from './pages/EscolhasUnidades/EscolhasUnidades'
import Register from './pages/Register/Register'
import ResultCongratulation from './pages/ResultCongratulations/ResultCongratulation'
import ApresentationATV from './pages/ApresentationATV/ApresentationATV'
import ResultInsufficient from './pages/ResultInsufficient/ResultInsufficient'
import Home from './pages/Home/home'
import HomeII from './pages/HomeII/HomeII'
import HomeIII from './pages/HomeIII/HomeIII'
import Quiz from './pages/Quiz/Quiz'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import { PhaseProvider } from './contexts/PhaseContext.jsx'

function App() {

  return (
    <PhaseProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/apresentation" element={<Apresentation />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/homeii" element={<HomeII />} />
          <Route path="/homeiii" element={<HomeIII />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/escolhasunidades" element={<EscolhasUnidades />} />
          <Route path="/apresentationatv" element={<ApresentationATV />} />
          <Route path="/resultcongratulation" element={<ResultCongratulation />} />
          <Route path="/resultinsufficient" element={<ResultInsufficient />} />
        </Routes>
      </Router>
    </PhaseProvider>
  )
}

export default App
