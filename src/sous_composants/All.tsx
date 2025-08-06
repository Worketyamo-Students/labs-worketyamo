import '../App.css'
import Aside from '../composants/leftpart.tsx'
// import Leftpart from '../composants/leftpart.tsx'
// import { Outlet } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';
const All = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return isDesktop ? (
    <div className="flex h-screen gap-8 p-4  justify-center">
      <div className=''>
         <Aside />
         
      </div>
     
      <div className="w-full lg:w-[70%]  flex-1 lg:p-10">{children}</div>
    </div>
  ) : (
    <>{children}</>
  );
};

export default All;
