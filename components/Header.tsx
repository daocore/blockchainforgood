"use client";
import { cn } from "@/lib";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTER_PATH } from "@/constants";
import { useRouter } from "next-nprogress-bar";
import { LogoSvg } from "./LogoSvg";
import { useEffect, useState } from "react";
import { ChevronUp, Equal, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const menuNavs = [
  {
    name: "Progarmm",
    children: [
      {
        name: "Hackathon",
        route: ROUTER_PATH.HACKATHON,
      },
      {
        name: "Incubation",
        route: ROUTER_PATH.INCUBATION,
      },
    ],
  },
  {
    name: "News",
    route: ROUTER_PATH.NEWS.ROOT,
  },
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
        isHomePage && "earth-bg",
        "w-full h-12 md:h-20 box-border px-4 md:px-0 sticky top-0 z-50",
        isIncubationPage && "bg-incubation",
        "relative"
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
          <NavigationMenu
            delayDuration={100}
            className={cn(
              "hidden md:flex",
              "justify-end items-center gap-2 md:gap-1"
            )}
          >
            <NavigationMenuList>
              {menuNavs?.map((nav) => {
                if (nav.children?.length) {
                  return (
                    <NavigationMenuItem className="py-2 px-2 md:px-6">
                      <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent p-0 hover:text-main">
                        <div
                          className={cn(
                            "justify-center items-center gap-2.5 flex",
                            isIncubationPage && "text-halfWhite",
                            (nav.route === ROUTER_PATH.HOME
                              ? pathname === nav.route
                              : pathname!.startsWith(nav.route)) && "text-main"
                          )}
                        >
                          <nav className="flex items-center text-text text-xs md:text-sm font-medium font-['Inter'] leading-[14px] cursor-pointer">
                            {nav.name}
                          </nav>
                        </div>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="rounded-none">
                        <div className="flex gap-3 flex-col py-2 px-4 w-48 rounded-none">
                          {nav.children.map((child) => (
                            <NavigationMenuLink
                              key={child.name}
                              onSelect={() => router.push(child.route)}
                              className={cn(
                                "hover:text-main cursor-pointer",
                                pathname.startsWith(child.route) && "text-main"
                              )}
                            >
                              {child.name}
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                }

                return (
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      key={nav.name}
                      onSelect={() => router.push(nav.route)}
                    >
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
                        <nav className="text-center text-text text-xs md:text-sm font-medium font-['Inter'] leading-[14px] cursor-pointer">
                          <div className="flex items-center gap-1">
                            {nav.name}
                          </div>
                        </nav>
                      </div>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
          {/* Mobile */}
          {!showMobileMenu && (
            <Equal
              size={18}
              className="md:hidden cursor-pointer absoluted z-30 top-3 right-2"
              onClick={() => setShowMobileMenu(true)}
            />
          )}
          {showMobileMenu && (
            <div
              className="fixed z-40 inset-0 w-screen h-screen bg-black/80"
              onClick={onHiddenMobileMenuWhenClickOutside}
            >
              <div className="bg-white px-4 absolute top-0 left-0 w-full">
                <X
                  size={16}
                  className="cursor-pointer absolute top-4 right-4 md:relative md:top-0 md:right-0"
                  onClick={onHiddenMobileMenu}
                />
                <div className="my-8">
                  <div
                    className={cn(
                      "py-2 px-2 text-active",
                      isIncubationPage && "text-halfWhite",
                      pathname === ROUTER_PATH.HOME && "text-main"
                    )}
                  >
                    <nav
                      className="text-xl font-bold font-['Inter'] cursor-pointer"
                      onClick={() => onMobileTopicClick(ROUTER_PATH.HOME)}
                    >
                      Home
                    </nav>
                  </div>
                  {menuNavs?.map((nav) => {
                    const hasChildren = nav.children?.length;
                    return (
                      <div
                        key={nav.name}
                        className={cn(
                          "hover:text-main py-2 px-2 text-active",
                          isIncubationPage && "text-halfWhite",
                          (nav.route === ROUTER_PATH.HOME
                            ? pathname === nav.route
                            : nav.route && pathname.startsWith(nav.route)) &&
                            "text-main"
                        )}
                      >
                        <nav
                          className="font-['Inter'] cursor-pointer"
                          onClick={() =>
                            nav.route && onMobileTopicClick(nav.route)
                          }
                        >
                          <div className="text-xl font-bold flex justify-between items-center">
                            {nav.name}
                            {hasChildren && <ChevronUp size={16} />}
                          </div>
                          {hasChildren && (
                            <ul className="pl-2 space-y-1">
                              {nav.children.map((child) => (
                                <li
                                  key={child.name}
                                  className={cn(
                                    "text-base",
                                    pathname.startsWith(child.route) &&
                                      "text-main"
                                  )}
                                  onClick={() =>
                                    onMobileTopicClick(child.route)
                                  }
                                >
                                  {child.name}
                                </li>
                              ))}
                            </ul>
                          )}
                        </nav>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
