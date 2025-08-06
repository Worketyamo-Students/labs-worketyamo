import '../App.css'
import Entete from '../sous_composants/entete.tsx'
import Btn from '../sous_composants/btnconnexion.tsx'
import Terms from '../sous_composants/terms.tsx'
import Timeline from '../sous_composants/barre_de_navigation.tsx'

function Verification() {

  return (
    <>
        <section className="flex flex-col items-center w-full justify-center gap-8  ">
            <div className='w-full bg-white'>
                <Entete label="Verification OTP" paragraph="Rentrez vos infos pour vous connecter." />
            </div>
            <div className=' w-full flex items-center justify-center bg-white gap-2 '>
                <div className='bg-border rounded-lg flex-1 w-16 h-16 border border-text'></div>
                <div className='bg-border rounded-lg flex-1 w-16 h-16 border border-text'></div>
                <div className='bg-border rounded-lg flex-1 w-16 h-16 border border-text'></div>
                <div className='bg-border rounded-lg flex-1 w-16 h-16 border border-text'></div>

            </div>
            <div className='w-full flex flex-col items-center  bg-white gap-6 pt-5'>
                <Btn />
            </div>
            <Terms />
        </section>
        <div className='flex gap-4 justify-between w-full h-full items-center mt-25  text-white '>
            <Timeline  color='bg-[#FFA273] opacity-56' />
            <Timeline  color='bg-[#FFA273]'/>
            <Timeline  color='bg-[#D9D9D9]'/>
            <Timeline  color='bg-[#D9D9D9]'/>
        </div>

    </>
  )
}

export default Verification
