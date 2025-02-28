import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CvCard from './components/CvCard'
import Marquee from './components/Marquee'
import Topbar from './components/TopBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className= "bg-black w-full h-screen flex  flex-col  overflow-x-hidden">
        <div>
          <Topbar/>
        {/* <Marquee/> */}
        </div>
        </div>
    </>
  )
}

export default App
