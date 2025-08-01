import '/src/App.css'
import Aside from '../sous_composants/utilsprops'

function Leftpart() {

  return (
    <>
    
            <Aside icon="Person" label="Inscription" paragraph="Entrez vos informations personnelles." link="/inscription" />
            <Aside icon="Mail" label="Vérification" paragraph="Vérifiez votre adresse e-mail." link="/verification" />
            <Aside icon="Check" label="Finalisation" paragraph="Complétez votre inscription." link="/finalisation" />
            <Aside icon="Home" label="Bienvenue" paragraph="Bienvenue dans votre espace personnel." link="/bienvenue" />
    </>
  )
}

export default Leftpart
