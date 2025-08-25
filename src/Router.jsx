
import Home from './pages/Home/Home'
import About from './pages/About/About'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Flat from './pages/Flat/Flat'
import { Routes, Route } from 'react-router-dom'


function AppRouter() {
  // state(etat, donnees, data)

  // comportement

  // affichage (render)

  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/appartement/:id' element={<Flat />}/>
        <Route path='*' element ={<ErrorPage />}/>
    </Routes>
  )
}

export default AppRouter