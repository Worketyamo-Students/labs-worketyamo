import './App.css'
import {Routes , Route, BrowserRouter as Router , } from 'react-router-dom'
import Connexion from './composants/createcompte.tsx'
import Connexion1 from './composants/encours.tsx'
import Verification from './composants/verification.tsx'
import Finalisation from './composants/finalisation.tsx'
import Welcome from './composants/bienvenue.tsx'
import All from './sous_composants/All.tsx'
function App() {

  return (
    <>
        <Router>
          <Routes>
            <Route path="/inscription" element={
              <All>
                <Connexion />
              </All>
            } />
            <Route path="/encours" element={
              <All>
                <Connexion1 />
              </All>
            } />

            <Route path="/verification" element={
              <All>
                <Verification />
              </All>
            } />
            <Route path="/finalisation" element={
              <All>
                <Finalisation />
              </All>
            } />
            <Route path="/welcome" element={
              <All>
                <Welcome />
              </All>
            } />

          </Routes>
        </Router>
    </>
  )
}
export default App
