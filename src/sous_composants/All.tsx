import '../App.css'
import Leftpart from '../composants/leftpart'
import { Outlet } from 'react-router-dom'
function All() {

  return (
    <>
        <div className='flex'>
            <div className='flex flex-col flex-1 h-screen justify-between  bg-border p-4'>
                <Leftpart />
            </div>
            <div className='flex-1 bg-white p-4'>
                <Outlet />
            </div>

        </div>
    </>
  )
}
export default All
