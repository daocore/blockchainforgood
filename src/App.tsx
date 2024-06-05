import { Analytics } from "@vercel/analytics/react";
import { AppRouter } from "./routes";
import { Header } from "./components/Header";
import { useEffect } from "react";
import { Footer } from "./components/Footer";

function App() {
  useEffect(() => {
    const reload = (event: any) => {
      if (event.data === "reload") {
        window.location.reload();
      }
    };

    window.addEventListener("message", reload, false);

    return () => {
      window.removeEventListener("message", reload, false);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      <div
        className="h-10 w-full absolute bg-main"
        style={{ filter: "blur(80px)" }}
      ></div>
      {window?.location?.href?.includes("https://blockchainforgood.xyz/") && (
        <Analytics />
      )}
      <Header />
      <div
        className="flex justify-center items-center"
        style={{
          // 减去header：72px和footer的高度:197px和1rem的margin
          minHeight: "calc(100vh - 72px - 197px - 1rem)",
        }}
      >
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
