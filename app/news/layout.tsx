import { Header } from "./header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full mx-auto">
      <Header />
      <main className="p-4">{children}</main>
    </div>
  );
}
