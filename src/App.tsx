import { Home } from './home'

function App() {
  return ( <div className='min-h-screen flex justify-center relative'>
    <div className='h-10 w-full  absolute bg-main' style={{ filter: "blur(80px)" }}></div>
    <Home />
  </div> )
}

export default App
