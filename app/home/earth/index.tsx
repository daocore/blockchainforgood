"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import * as topojson from "topojson-client";
import landTopo from "./earth.json";
import data from "./data.json";
import { type GlobeMethods } from "react-globe.gl";
import { useIsMobile } from "@/hooks";
import Image from "next/image";
import styles from "./earth.module.css";
import { cn } from "@/lib";
import dynamic from "next/dynamic";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { createRoot } from "react-dom/client";
import { Impact } from "../impact";

const Globe = dynamic(() => import("./globe-wrapper"), {
  ssr: false,
});

const DEFAULT_WIDTH = 750;

const polygonsMaterial = new THREE.MeshLambertMaterial({
  color: "#00d5bf",
  side: THREE.DoubleSide,
});

const landPolygons = (
  topojson.feature(landTopo as any, (landTopo as any).objects.land) as any
).features;

const GLOBE_RADIUS = 100; // 地球半径
const LINE_RADIUS = 0.15; // 线条半径

// 生成经纬度线数据
const generateGridLines = () => {
  const lines = [];
  for (let lat = -80; lat <= 80; lat += 20) {
    lines.push({ type: "latitude", value: lat });
  }
  for (let lng = -180; lng < 180; lng += 20) {
    lines.push({ type: "longitude", value: lng });
  }
  return lines;
};

// 创建经纬度线对象
const createGridLineObject = (line: any) => {
  const material = new THREE.LineBasicMaterial({
    color: "0xffffff",
    opacity: 0.6,
  });

  const points = [];

  if (line.type === "latitude") {
    const lat = (line.value * Math.PI) / 180;
    for (let lng = 0; lng <= 360; lng += 5) {
      const phi = ((90 - lng) * Math.PI) / 180;
      const x = GLOBE_RADIUS * Math.cos(lat) * Math.cos(phi);
      const y = GLOBE_RADIUS * Math.sin(lat);
      const z = GLOBE_RADIUS * Math.cos(lat) * Math.sin(phi);
      points.push(new THREE.Vector3(x, y, z));
    }
  } else {
    const lng = (line.value * Math.PI) / 180;
    for (let lat = -90; lat <= 90; lat += 5) {
      const phi = (lat * Math.PI) / 180;
      const x = GLOBE_RADIUS * Math.cos(phi) * Math.cos(lng);
      const y = GLOBE_RADIUS * Math.sin(phi);
      const z = GLOBE_RADIUS * Math.cos(phi) * Math.sin(lng);
      points.push(new THREE.Vector3(x, y, z));
    }
  }

  const curve = new THREE.CatmullRomCurve3(points);
  const geometry = new THREE.TubeGeometry(curve, 64, LINE_RADIUS, 8, false);
  return new THREE.Line(geometry, material);
};

export function Earth({ children }: { children: React.ReactNode }) {
  const globeEl = useRef<GlobeMethods>();

  const earthRef = useRef<HTMLDivElement>(null);
  const lefthandRef = useRef<HTMLDivElement>(null);
  const righthandRef = useRef<HTMLDivElement>(null);

  const [isControled, setIsControled] = useState(false);
  const initialGlobe = () => {
    const globe = globeEl.current;
    if (!globe || isControled) return;
    setIsControled(true);
    console.log("start initialGlobe");
    /** 如何让球体的半径更大 */
    /** 方式一 */
    const camera = globe.camera(); // 访问相机
    camera.position.z = 250; // 调整相机位置来"放大"球体
    /** 方式二 */
    // globe.pointOfView({ lat: 0, lng: 0, altitude: 1.5 }); // 调整视角

    // Disable zooming
    const controls = globe.controls();
    controls.enableZoom = false;
  };
  useEffect(() => {
    initialGlobe();
  }, []);

  const isMobile = useIsMobile();

  const [globeWidth, setGlobeWidth] = useState<number>(DEFAULT_WIDTH);

  useEffect(() => {
    if (isMobile) {
      const fullWidth = window.outerWidth;
      setGlobeWidth(
        fullWidth < DEFAULT_WIDTH ? fullWidth * 0.8 : DEFAULT_WIDTH
      );
    }
  }, [isMobile]);

  const [earthIsReady, setEarthIsReady] = useState(false);
  const onAddClassName = () => {
    earthRef.current.classList.add(styles["earth"]);
    lefthandRef.current.classList.add(styles["left-hand"]);
    righthandRef.current.classList.add(styles["right-hand"]);
    setEarthIsReady(true);
  };

  const onGlobeReady = () => {
    initialGlobe();
    onAddClassName();
  };

  return (
    <div className={cn("w-full", styles.container)}>
      <div className="w-full md:w-content mx-auto flex justify-center relative">
        <div
          ref={lefthandRef}
          className={cn("w-2/5 absolute left-[30%] top-[30%] opacity-0")}
        >
          <Image
            src="/left-hand.webp"
            alt="left-hand"
            width={4000}
            height={3000}
          />
        </div>
        <div
          ref={righthandRef}
          className={cn("w-2/5 absolute right-[30%] top-[30%] opacity-0")}
        >
          <Image
            src="/right-hand.webp"
            alt="right-hand"
            width={4000}
            height={3000}
          />
        </div>
        <div style={{ width: globeWidth, minHeight: globeWidth }}>
          <div ref={earthRef}>
            <Globe
              globeRef={globeEl}
              width={globeWidth}
              height={globeWidth}
              backgroundColor="rgba(0,0,0,0)"
              showGlobe={false}
              showAtmosphere={false}
              polygonsData={landPolygons}
              polygonCapMaterial={polygonsMaterial}
              polygonSideColor={() => "rgba(0, 0, 0, 0)"}
              // custom
              customLayerData={generateGridLines()}
              customThreeObject={createGridLineObject}
              // // HTML marks
              htmlElementsData={data}
              htmlAltitude={0}
              htmlElement={(d: any) => {
                const wrapper = document.createElement("div");

                const root = createRoot(wrapper);
                root.render(<Marker />);

                return wrapper;
              }}
              onGlobeReady={onGlobeReady}
            />
            {earthIsReady && children}
          </div>
        </div>
      </div>
      <Impact />
    </div>
  );
}

function Marker() {
  const [open, setOpen] = useState(false);
  return (
    <HoverCard open={open} onOpenChange={setOpen}>
      <HoverCardTrigger asChild>
        <div className={styles.marker} onClick={() => setOpen(true)}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.25" cx="14" cy="14" r="14" fill="#FDFFB8" />
            <circle
              opacity="0.25"
              cx="14"
              cy="13.9998"
              r="9.75758"
              fill="#FDFFAE"
            />
            <circle cx="14" cy="14" r="5.51515" fill="#EEF500" />
          </svg>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="min-w-52 relative z-50 bg-white/75 shadow-lg rounded-none">
        <div className="flex justify-between space-x-4">test</div>
      </HoverCardContent>
    </HoverCard>
  );
}
