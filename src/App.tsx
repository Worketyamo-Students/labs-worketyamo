import './App.css'
import {Routes , Route, BrowserRouter as Router} from 'react-router-dom'
import Connexion from './composants/createcompte.tsx'
import Verification from './composants/verification.tsx'
import Finalisation from './composants/finalisation.tsx'
import Welcome from './composants/bienvenue.tsx'
import All from './sous_composants/All.tsx'
function App() {

  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<All />} />

            <Route path="/inscription" element={<Connexion />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/finalisation" element={<Finalisation />} />
            <Route path="/welcome" element={<Welcome />} />

          </Routes>
        </Router>
    </>
  )
}
export default App
