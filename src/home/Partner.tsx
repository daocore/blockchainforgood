import AUS from '../assets/partner/AUS Logo 1.png'
import DFINITY from '../assets/partner/DFINITY Logo.png'
import Harvard from '../assets/partner/Harvard Blockchain Logo.png'
import moledao from '../assets/partner/moledao Logo (H) 1.png'

export const Partner = () => {
    return (
        <div className="w-full px-[104px] py-6 bg-white shadow flex justify-center items-center">
            <div className="md:justify-between justify-center items-center inline-flex w-full md:w-content m-auto flex-wrap gap-6">
                <a href="https://moledao.io" target='_blank'><img className="w-[195.98px] h-10" src={moledao} /></a>
                <a href="https://moledao.io" target='_blank'><img className="w-48 h-12" src={Harvard} /></a>
                <a href="https://moledao.io" target='_blank'><img className="w-[139.29px] h-20" src={DFINITY} /></a>
                <a href="https://moledao.io" target='_blank'><img className="w-[255.50px] h-7" src={AUS} /></a>
            </div>
        </div>
    )
}