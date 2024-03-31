import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

const Root = () => {
  return (
    <div>
      <Header></Header>
      <div className='container mx-auto px-2 mt-3'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Root
