"use client";
import { cn } from "@/lib";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTER_PATH } from "@/constants";
import { useRouter } from "next-nprogress-bar";
import { LogoSvg } from "./LogoSvg";
import { useEffect, useState } from "react";
import { Equal, X } from "lucide-react";

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
  {
    name: "Square",
    route: ROUTER_PATH.SQUARE,
  },
];

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isHomePage = pathname === ROUTER_PATH.HOME;

  const isIncubationPage = pathname === ROUTER_PATH.INCUBATION;

  const isSquarePage = pathname === ROUTER_PATH.SQUARE;

  const iconSvgFillColor = isIncubationPage ? "white" : "black";

  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const onHiddenMobileMenuWhenClickOutside = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (e.target === e.currentTarget) {
      onHiddenMobileMenu();
    }
  };

  const onHiddenMobileMenu = () => {
    setShowMobileMenu(false);
  };

  const onMobileTopicClick = (route: string) => {
    router.push(route);
    setShowMobileMenu(false);
  };

  const [showHeaderBlur, setShowHeaderBlur] = useState<boolean>(true);
  useEffect(() => {
    if (!document?.getElementById) return;
    document?.addEventListener("scroll", () => {
      if (window?.scrollY <= 500) {
        setShowHeaderBlur(window?.scrollY > 200 ? false : true);
      } else {
        setShowHeaderBlur(false);
      }
    });

    return () => {
      document?.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <header
      className={cn(
        showHeaderBlur && (isSquarePage || isHomePage) && "layout-header",
        "w-full h-12 md:h-[64px] box-border px-4 md:px-0 sticky top-0",
        isIncubationPage && "bg-incubation",
        showMobileMenu && "relative"
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
          {/* Desktop */}
          <div
            className={cn(
              "hidden md:flex",
              "justify-end items-center gap-2 md:gap-1"
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
                  <div className="flex items-center gap-1">{nav.name}</div>
                </nav>
              </div>
            ))}
          </div>
          {/* Mobile */}
          {!showMobileMenu && (
            <div>
              <Equal
                size={18}
                className="md:hidden cursor-pointer fixed z-30 top-3 right-2"
                onClick={() => setShowMobileMenu(true)}
              />
            </div>
          )}
          {showMobileMenu && (
            <div
              className="fixed z-40 inset-0 w-screen h-screen bg-black/80"
              onClick={onHiddenMobileMenuWhenClickOutside}
            >
              {/* <div className="absolute inset-0 z-auto bg-black/80 blur-sm"></div> */}
              <div className="bg-white px-4 absolute top-0 left-0 w-full">
                <X
                  size={16}
                  className="cursor-pointer absolute top-4 right-4 md:relative md:top-0 md:right-0"
                  onClick={onHiddenMobileMenu}
                />
                <div className="my-8">
                  {menuNavs?.map((nav) => (
                    <div
                      key={nav.name}
                      className={cn(
                        "hover:text-main py-2 px-2 text-active",
                        isIncubationPage && "text-halfWhite",
                        (nav.route === ROUTER_PATH.HOME
                          ? pathname === nav.route
                          : pathname!.startsWith(nav.route)) && "text-main"
                      )}
                    >
                      <nav
                        className="text-lg font-bold font-['Inter'] cursor-pointer"
                        onClick={() => onMobileTopicClick(nav.route)}
                      >
                        {nav.name}
                      </nav>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
