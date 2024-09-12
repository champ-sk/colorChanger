import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>

    <div className='w-screen h-screen duration-200' style={{backgroundColor:color}}>
      <h1>Color Changer</h1>
     <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2
      rounded-3xl'>
<button className='outline-none px-4 py-1 rounded-full shadow-lg' onClick={()=>setColor("red")} style={{backgroundColor:"red"}}>Red</button>
<button className='outline-none px-4 py-1 rounded-full shadow-lg' onClick={()=>setColor("blue")} style={{backgroundColor:"blue"}}>Blue</button>
<button className='outline-none px-4 py-1 rounded-full shadow-lg' onClick={()=>setColor("green")} style={{backgroundColor:"green"}}>Green</button>
<button className='outline-none px-4 py-1 rounded-full shadow-lg' onClick={()=>setColor("yellow")} style={{backgroundColor:"yellow"}}>Yellow</button>
<button className='outline-none px-4 py-1 rounded-full shadow-lg' onClick={()=>setColor("pink")} style={{backgroundColor:"pink"}}>Pink</button>
<button className='outline-none px-4 py-1 rounded-full shadow-lg' onClick={()=>setColor("black")} style={{backgroundColor:"black"}}>Black</button>
<button className='outline-none px-4 py-1 rounded-full shadow-lg' onClick={()=>setColor("purple")} style={{backgroundColor:"purple"}}>Purple</button>
<button className='outline-none px-4 py-1 rounded-full shadow-lg' onClick={()=>setColor("grey")} style={{backgroundColor:"grey"}}>Grey</button>
<button className='outline-none px-4 py-1 rounded-full shadow-lg' onClick={()=>setColor("white")} style={{backgroundColor:"white"}}>White</button>
</div>
     </div>
     </div>       
    </>
  )
}

export default App
