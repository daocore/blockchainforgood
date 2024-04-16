import { DetailedHTMLProps, useEffect, useRef, useState } from "react"

export const LoadImage = ({ defaultUrl, ...props }: { defaultUrl?: string } & DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isLoad, setIsLoad] = useState(false);
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const dom = ref.current;
    if (!dom) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach(item => {
        setIsVisible(item.isIntersecting);
      })
    }, {
      root: null,
      threshold: 0.3,
    })

    io.observe(dom)
  }, [props.src, ref])

  useEffect(() => {
    if (!(props.src && isVisible && !isLoad)) return
    const img = new Image();
    img.onload = () => {
      setIsLoad(true);
    }
    img.src = props.src;
  }, [isVisible, props.src, isLoad])

  return (
    isLoad
      ? <img alt="img" {...props} style={props.style || {}} />
      : <div className={`animate-pulse bg-white ${props.className || ""}`} ref={ref} style={props.style || {}} onClick={props?.onClick}>
      </div>
  )
}