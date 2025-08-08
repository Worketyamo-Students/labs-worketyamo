import '/src/App.css'
import Aside from '../sous_composants/utilsprops.tsx'
// interface Tabsteps {
//   path : string
//   title : string
//   subtitle : string
//   icon : string
// }
// const tabs: Tabsteps[] = [  
//     {
//       path: '/inscription',
//       title: 'Inscription',
//       subtitle: 'Entrez vos informations personnelles.',
//       icon: 'Person'
//     },
//         {
//       path: '/verification',
//       title: 'Vérification',
//       subtitle: 'Vérifiez votre adresse e-mail.',
//       icon: 'Mail'
//     },
//         {
//       path: '/finalisation',
//       title: 'Finalisation',
//       subtitle: 'Complétez votre inscription.',
//       icon: 'Check'
//     },
//         {
//       path: '/welcome',
//       title: 'Bienvenue',
//       subtitle: 'Bienvenue dans votre espace personnel.',
//       icon: 'Home'
//     }


// ]
// const Aside = () => {
//   const location = useLocation()
//     return (
//       <div>
//         {
//           tabs.map((step , index) => {
//             const isActive =  !!matchPath(step.path, location.pathname)
//               return (
              
//                 <div className="flex gap-8 active-link" key = {index}>

//                     <div className="flex items-center  flex-col ">

//                         <div className="rounded-xl border border-black w-14 h-12 flex items-center justify-center "> 
//                             <img src={step.icon} alt="icon" />
//                         </div>

//                     </div>
//                     <div className=" flex flex-col items-start justify-center gap-2">
//                         <h1 className={` text-gray-500 text-xl first-line ${isActive ? "text-black font-bold" : " "}`}> {step.title}</h1>
//                         <p>{step.subtitle}</p>
//                     </div>
//                 </div>
//               )
//           })
//         }
//       </div>
//     )
// }
// export default Aside;
function Leftpart() {

  return (
    <>
        <div className='flex flex-col justify-between  bg-bg p-4 h-auto '>
            <Aside icon="Person" label="Inscription" paragraph="Entrez vos informations personnelles." link="/inscription" />
            <Aside icon="Mail" label="Vérification" paragraph="Vérifiez votre adresse e-mail." link="/verification" />
            <Aside icon="Check" label="Finalisation" paragraph="Complétez votre inscription." link="/finalisation" />
            <Aside icon="Home" label="Bienvenue" paragraph="Bienvenue dans votre espace personnel." link="/welcome" />
        </div>
    </>
  )
}

export default Leftpart
