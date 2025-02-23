import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

function App() {  
  const [activeSec, setActive] = useState(0);

  return (
    <div className='app'>
      <Sidebar active={activeSec} secAct={(i) => {setActive(i)}}></Sidebar>
      <Content setActive={(i) => {setActive(i)}}></Content>
    </div>
  )
}

export default App
