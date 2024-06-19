import { useEffect, useState } from "react";

export const Loading = ({ size = 20, color = "#00d5bf" }: { size?: number; color?: string; }) => {

  return (
    <div
      className="small-loading inline-block"
      style={{
        width: size,
        height: size,
        background: `conic-gradient(from 114.04deg at 50% 50%, ${color} -3.75deg, rgba(22, 93, 255, 0) 331.83deg, ${color} 339.88deg, ${color} 356.25deg, rgba(22, 93, 255, 0) 691.83deg)`,
      }}
    ></div>
  );
};

export const IFrameLoading = (props: {
  size?: number;
  color?: string;
  id: string;
}) => {
  const { id } = props;
  const [isLoading, setIsOpen] = useState(true);
  useEffect(() => {
    const iframe = document.getElementById(id);
    if (!iframe) return;

    iframe.onload = function () {
      console.log("Iframe has loaded");
      setIsOpen(false);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="absolute z-10 bg-black opacity-20 w-screen h-screen flex justify-center items-center">
      <Loading {...props} />
    </div>
  );
};

export function LoadingMore() {
  return <div className="text-center my-2">Loading...</div>;
}
