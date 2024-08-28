import { useMemo } from "react"
import { partersData } from "./partner"
import { useIsMobile } from "@/hooks"

const PartnerItem = ({ item }: { item: any }) => {
  const mobile = useIsMobile();

  return (
    <div className="my-6 md:my-10">
      <div className="flex items-center">
        <div className="border-b-[1px] border-active flex-1 h-[0px]"></div>
        <div className="text-base md:text-xl font-Poppins-Medium mx-2 text-oscorActive">{item?.type}</div>
        <div className="border-b-[1px] border-active flex-1 h-[0px]"></div>
      </div>
      <div className={`flex flex-wrap justify-center items-center`}>
        {item?.list?.map((ite: any, i: number) => {
          return (
            <a key={i} className={`inline-block p-1 mb-1 sx:w-full`} style={mobile ? { height: ["Media Partners", "Community"].includes(item.type) ? 50 : 64, width: `${(1 / item.ratio) * 100}%` } : (item.style || {})} target="_blank" href={ite?.link} rel="noreferrer">
              <div className="overflow-hidden rounded-md  flex justify-center items-center bg-white w-full h-full" style={{ padding: 10, ...(mobile ? {} : item?.imgStyle || {}) }}>
                <img
                  src={ite?.logo}
                  style={{ ...((mobile ? ite.mobileStyle : ite?.style) || {}) }}
                  alt="" />
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}

const partnerObj = [
  {
    "ratio": 3,
    "type": "Diamond Sponsors",
    "style": {
      "width": "220px",
      "height": "110px"
    }
  },
  {
    "type": "Platinum Sponsors",
    "style": {
      "width": "220px",
      "height": "110px"
    },
    "ratio": 3
  },
  {
    "type": "Gold Sponsors",
    "style": {
      "width": "140px",
      "height": "70px"
    },
    "ratio": 3
  },
  {
    "type": "Silver Sponsors",
    "style": {
      "width": "140px",
      "height": "70px"
    },
    "imgStyle": {
      "padding": "20px"
    },
    "ratio": 3
  },
  {
    "type": "Media Partners",
    "style": {
      "width": "140px",
      "height": "70px"
    },
    "ratio": 4
  },
  {
    "type": "Community Partners",
    "style": {
      "width": "140px",
      "height": "70px"
    },
    "ratio": 4
  }
]

export const Partners = () => {
  const mobile = useIsMobile();

  const data: any[] = useMemo(() => {
    const list = partersData?.list as any[];
    if (!list?.length) return []
    const data: any[] = [];
    for (let i = 0; i < list?.length; i++) {
      const item = list[i];
      let mobileStyle;
      if (data[item.partnersType]) {
        try {
          mobileStyle = item?.mobileStyle ? JSON.parse(item?.mobileStyle) : {}
        } catch {
          mobileStyle = {}
        }
        data[item.partnersType].list?.push({
          ...item,
          mobileStyle,
          style: item?.style ? JSON.parse(item?.style) : {},
        });
      } else {
        data[item.partnersType] = {
          ...partnerObj[item.partnersType],
          list: [{
            ...item,
            mobileStyle: item?.mobileStyle ? JSON.parse(item?.mobileStyle) : {},
            style: item?.style ? JSON.parse(item?.style) : {},
          }]
        }
      }
    }
    return data
  }, []);

  return (
    <div className="px-6 md:px-0">
      <h2 className={`font-bold text-oscorActive font-['Inter'] text-[20px] md:text-[32px] text-center`}>Partners</h2>
      <div className="relative mt-4 w-full md:w-content">
        {data?.map((item: any, index: number) => {
          return (<div
            key={index}
            className="-mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
            <PartnerItem item={item} />
          </div>)
        })}
      </div>
    </div>
  );
};