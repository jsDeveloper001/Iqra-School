import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Common/Footer/Footer'
import Header from './Components/Common/Header/Header'

function App() {

  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
