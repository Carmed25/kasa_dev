
// import data from './data/appartements.json'

import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'
import Flat from './pages/Flat'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  // state(etat, donnees, data)

  // comportement

  // affichage (render)

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/appartement/:id' element={<Flat />}/>
        <Route path='*' element ={<ErrorPage />}/>
      </Routes>
  <Footer/>
    </div>
  )
}

export default App
