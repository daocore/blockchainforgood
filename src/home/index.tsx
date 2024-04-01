import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Hero } from './Hero'
import { Partner } from './Partner'
import { Intro } from './Intro'
import { Journey } from './Journey'
import { HowJoin } from './HowJoin'
import { Contact } from './Contact'
import { FAQ } from './FAQ'

export const Home = () => {
    return (
        <div className="w-full z-10 border border-red-500">
            <Header />
            {/* <Hero /> */}
            <div className="flex-col justify-start items-center gap-24 inline-flex w-full">
                {/* <Partner /> */}
                {/* <Intro /> */}
                <Journey />
                {/* <HowJoin /> */}
                {/* <FAQ /> */}
                {/* <Contact /> */}
            </div>
            {/* <Footer /> */}
        </div>
    )
}