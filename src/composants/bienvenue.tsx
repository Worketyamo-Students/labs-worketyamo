import '../App.css'
import Entete from '../sous_composants/entete.tsx'
import Timeline from '../sous_composants/barre_de_navigation.tsx'
import Btn from '../sous_composants/btnconnexion.tsx'
import photo from '/public/images 2.png'
import Terms from '../sous_composants/terms.tsx'
function Welcome() {

  return (
    <>
        <section className="flex flex-col items-center w-full justify-center gap-6  ">
            <div className='w-full bg-white'>
                <Entete label="Bienvenue" paragraph="Plus que 3 petites minutes ........" />
            </div>
            <div className='w-full flex  justify-center bg-white '>
                <img src={photo} alt="" className='w-full' />
            </div>
            <div className='w-full flex flex-col items-center  bg-white gap-6 pt-5'>
                <Btn />
            </div>
            <Terms />
        </section>
        <div className='flex gap-4 justify-between w-full h-full items-center mt-25  text-white '>
            <Timeline  color='bg-[#FFA273] opacity-56' />
            <Timeline  color='bg-[#FFA273]'/>
            <Timeline  color='bg-gradient-to-r from-[#FFA273]  to-[#00539C]'/>
            <Timeline  color='bg-[#00539C]'/>
        </div>

    </>
  )
}

export default Welcome
