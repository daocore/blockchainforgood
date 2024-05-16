import { Analytics } from "@vercel/analytics/react"
import { AppRouter } from './routes'

function App() {

  return (<div className='min-h-screen flex justify-center relative'>
    <div className='h-10 w-full absolute bg-main' style={{ filter: "blur(80px)" }}></div>
    {window?.location?.href?.includes("https://blockchainforgood.xyz/") && <Analytics />}
    <AppRouter />
    
  </div>)
}

export default App