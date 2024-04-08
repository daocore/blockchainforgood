import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Hero } from './Hero'
import { Partner } from './Partner'
import { Intro } from './Intro'
import { Journey } from './Journey'
import { HowJoin } from './HowJoin'
import { Contact } from './Contact'
import { FAQ } from './FAQ'
import { Videos } from './Video'

export const RowSpace = ()=> <div className='h-3 w-full'></div>

export const Home = () => {
    return (
        <div className="w-full z-10 border">
            <Header />
            <Hero />
            <Videos />
            <div className="flex-col justify-start items-center gap-8 xs:gap-12 md:gap-24 inline-flex w-full">
                <Partner />
                <Intro />
                <Journey />
                <HowJoin />
                <FAQ />
                <Contact />
            </div>
            <Footer />
        </div>
    )
}