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
        <div className="w-full">
            {/* <div className="w-[1325px] h-[434px] left-[27px] top-[530px] absolute">
                <div className="w-[19px] h-[19px] left-[77px] top-[214px] absolute opacity-50 bg-white" />
                <div className="w-[19px] h-[19px] left-[557px] top-[204px] absolute opacity-50 bg-white" />
                <div className="w-[11px] h-[11px] left-[153px] top-[78px] absolute opacity-50 bg-white" />
                <div className="w-[5px] h-[5px] left-[20px] top-[163px] absolute opacity-50 bg-white" />
                <div className="w-[17px] h-[17px] left-0 top-[371px] absolute opacity-50 bg-white" />
                <div className="w-[17px] h-[17px] left-[1300px] top-[187px] absolute opacity-50 bg-white" />
                <div className="w-2 h-2 left-[1317px] top-[204px] absolute opacity-50 bg-white" />
                <div className="w-[7px] h-[7px] left-[17px] top-[364px] absolute opacity-50 bg-white" />
                <div className="w-2 h-2 left-[50px] top-[426px] absolute opacity-50 bg-white" />
                <div className="w-3 h-3 left-[9px] top-0 absolute opacity-50 bg-white" />
            </div>
            <div className="w-[1489px] h-[26px] left-[-107px] top-0 absolute bg-cyan-500 rounded-full blur-[160px]" /> */}
            <Header />
            <Hero />
            <div className="flex-col justify-start items-center gap-24 inline-flex w-full">
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