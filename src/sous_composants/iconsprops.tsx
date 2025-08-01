import { Link } from 'react-router-dom'
import '/src/App.css'
import person from '/public/Person.svg'


type IconsProps = {
    label : string
    paragraph: string
    link: string
};
const Icons: React.FC<IconsProps> = ({ label , paragraph , link}) => {

  return (

    <>

            <div className="flex    gap-8 ">
                
                <div className="flex items-center  flex-col ">

                    <Link to={link} className="rounded-xl border border-black w-14 h-12 flex items-center justify-center "> 
                        <img src={person} alt="oceane" />
                    </Link>

                </div>
                <div className="">
                    <h1 className=''><Link to={link} className="font-bold"> {label}</Link></h1>
                    <p>{paragraph}</p>
                </div>
            </div>

    </>
  )
}       

export default Icons;