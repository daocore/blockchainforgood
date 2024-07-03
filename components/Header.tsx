"use client";
import { cn } from "@/lib";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTER_PATH } from "@/constants";
import { useRouter } from "next-nprogress-bar";
import { LogoSvg } from "./LogoSvg";

const menuNavs = [
  {
    name: "Home",
    route: ROUTER_PATH.HOME,
  },
  {
    name: "News",
    route: ROUTER_PATH.NEWS.ROOT,
  },
  // {
  //   name: "Incubation",
  //   route: ROUTER_PATH.INCUBATION,
  // },
];

export const Header = () => {
  // const [top, setTop] = useState<number>(0);
  const pathname = usePathname();
  const router = useRouter();

  const isHomePage = pathname === ROUTER_PATH.HOME;

  const isIncubationPage = pathname === ROUTER_PATH.INCUBATION;

  // useEffect(() => {
  //   if (!document?.getElementById) return;
  //   document?.addEventListener("scroll", () => {
  //     if (window?.scrollY <= 500) {
  //       setTop(window?.scrollY > 200 ? 200 : window?.scrollY);
  //     }
  //   });

  //   return () => {
  //     document?.removeEventListener("scroll", () => {});
  //   };
  // }, []);

  const iconSvgFillColor = isIncubationPage ? "white" : "black";

  return (
    <header
      className={cn(
        "w-full h-12 md:h-[64px] box-border px-4 md:px-0 z-40 sticky top-0 bg-white border-b border-black",
        isIncubationPage && "bg-incubation"
      )}
    >
      <div className="py-3 justify-between items-center flex w-full md:w-content m-auto">
        <Link
          href={ROUTER_PATH.HOME}
          className="flex items-center gap-2 cursor-pointer"
        >
          <LogoSvg fill={iconSvgFillColor} />
        </Link>
        <div>
          <div
            className={cn(
              isHomePage || isIncubationPage ? "flex" : "hidden md:flex",
              "justify-end items-start gap-2 md:gap-1"
            )}
          >
            {menuNavs?.map((nav) => (
              <div
                key={nav.name}
                className={cn(
                  "justify-center items-center gap-2.5 flex hover:text-main py-2 px-2 md:px-6",
                  isIncubationPage && "text-halfWhite",
                  (nav.route === ROUTER_PATH.HOME
                    ? pathname === nav.route
                    : pathname!.startsWith(nav.route)) && "text-main"
                )}
              >
                <nav
                  className="text-center text-text text-xs md:text-sm font-medium font-['Inter'] leading-[14px] cursor-pointer"
                  onClick={() => {
                    router.push(nav.route);
                  }}
                >
                  {nav.name}
                </nav>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
