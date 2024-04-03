import AUS from '../assets/partner/AUS Logo 1.png'
import DFINITY from '../assets/partner/DFINITY Logo.png'
import Harvard from '../assets/partner/Harvard Blockchain Logo.png'
import moledao from '../assets/partner/moledao Logo (H) 1.png'
import BybitWeb3 from '../assets/partner/Bybit Web3.png'
import CoinEasy from '../assets/partner/CoinEasy Logo 1.png'
import solanaVerticalLogo from '../assets/partner/solanaVerticalLogo.png'

export const Partner = () => {
    return (
        <div className="w-full px-[104px] py-6 bg-white shadow flex justify-center items-center">
            <div className="md:justify-between justify-center items-center inline-flex w-full md:w-content m-auto flex-wrap gap-6">
                <a href="https://moledao.io" target='_blank'><img className="w-[134px] h-[24px]" src={BybitWeb3} /></a>
                <a href="https://moledao.io" target='_blank'><img className="w-[128px] h-[26px]" src={moledao} /></a>
                <a href="https://moledao.io" target='_blank'><img className="w-[152px] h-[38px]" src={Harvard} /></a>
                <a href="https://moledao.io" target='_blank'><img className="w-[90px] h-[38px]" src={solanaVerticalLogo} /></a>
                <a href="https://moledao.io" target='_blank'><img className="w-[98.5px] h-[56px]" src={DFINITY} /></a>
                <a href="https://moledao.io" target='_blank'><img className="w-[193px] h-[22px]" src={AUS} /></a>
                <a href="https://moledao.io" target='_blank'><img className="w-[103.7px] h-[17px]" src={CoinEasy} /></a>
            </div>
        </div>
    )
}