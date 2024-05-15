import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col justify-between w-full min-h-screen">
            <Header />
            <div className='flex-1 bg-[#272b33]'>
                <Outlet/>
                {/* {children} */}
            </div>
        </div>
    )
}

export default MainLayout