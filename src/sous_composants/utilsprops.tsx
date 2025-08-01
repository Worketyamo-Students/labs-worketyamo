import { Link } from 'react-router-dom'
import '/src/App.css'

type LeftpartProps = {
    icon: string
    label : string
    paragraph: string
    link: string

};
const Aside: React.FC<LeftpartProps> = ({ icon, label , paragraph , link}) => {

  return (

    <>

            <Link to={link} className="flex gap-8 ">

                <div className="flex items-center  flex-col ">

                    <div className="rounded-xl border border-black w-14 h-12 flex items-center justify-center "> 
                        <img src={`/${icon}.png`} alt="icon" />
                    </div>

                </div>
                <div className=" flex flex-col items-start justify-center gap-2">
                    <h1 className="font-bold"> {label}</h1>
                    <p>{paragraph}</p>
                </div>
            </Link>

    </>
  )
}       

export default Aside;