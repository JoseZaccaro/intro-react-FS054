import Footer from '../components/Footer'
import Header from '../components/Header'

const MainLayout = (props) => {
    // console.log(props.children);
    return (
        <div className='flex flex-col w-full min-h-screen'>
            <Header />
            <main className='flex flex-1'>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout