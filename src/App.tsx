import { Analytics } from "@vercel/analytics/react"
import { AppRouter } from './routes'
import { Header } from "./components/Header"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    const reload = (event: any) => {
      if (event.data === 'reload') {
        window.location.reload();
      }
    }

    window.addEventListener('message', reload, false);

    return () => {
      window.removeEventListener('message', reload, false);
    }
  }, [])

  return (<div className='min-h-screen flex justify-center relative'>
    <div className='h-10 w-full absolute bg-main' style={{ filter: "blur(80px)" }}></div>
    {window?.location?.href?.includes("https://blockchainforgood.xyz/") && <Analytics />}
    <Header />
    <AppRouter />
  </div>)
}

export default App