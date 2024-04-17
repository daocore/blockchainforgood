import { Home } from './home'
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (<div className='min-h-screen flex justify-center relative'>
    <div className='h-10 w-full absolute bg-main' style={{ filter: "blur(80px)" }}></div>
    {window?.location?.href?.includes("https://blockchainforgood.xyz/") && <Analytics />}
    <Home />
  </div>)
}

export default App
