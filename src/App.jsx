
// import data from './data/appartements.json'

import './App.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AppRouter from './Router'


function App() {
  // state(etat, donnees, data)

  // comportement

  // affichage (render)

  return (
    <div className="App">
      <div className="App_container">
        <Header/>
        <AppRouter/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
