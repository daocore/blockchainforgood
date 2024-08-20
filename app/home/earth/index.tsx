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

const HEIGHT = 80 + 40 + 40;
const CONTENT_WIDTH = 1232;

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

    const camera = globe.camera();
    const controls = globe.controls();

    // 设置目标位置（地球中心）
    controls.target.set(0, 0, 0);
    // 设置相机位置
    // 新加坡的坐标
    const latitude = 1.18;
    const longitude = 103.51;
    const distance = 250; // 调整这个值以改变视角距离
    const phi = (90 - latitude) * (Math.PI / 180);
    const theta = (longitude + 180) * (Math.PI / 180);
    const x = distance * Math.sin(phi) * Math.cos(theta);
    const y = distance * Math.cos(phi);
    const z = distance * Math.sin(phi) * Math.sin(theta);
    camera.position.set(x, y, distance);

    // 设置地球旋转
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5; // 设置自动旋转速度

    // 更新控制器
    controls.update();

    setIsControled(true);
  };

  const isMobile = useIsMobile();

  const [globeWidth, setGlobeWidth] = useState<number>(CONTENT_WIDTH);
  const [globeHeight, setGlobeHeight] = useState<number>(750);

  useEffect(() => {
    const maxWidth = window.innerWidth * 0.8;
    setGlobeWidth(maxWidth > CONTENT_WIDTH ? CONTENT_WIDTH : maxWidth);
    setGlobeHeight(isMobile ? maxWidth : window.innerHeight - HEIGHT);
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

  const [isRotating, setIsRotating] = useState(true);
  // 设置自动旋转
  useEffect(() => {
    if (isControled) {
      const globe = globeEl.current;
      const controls = globe.controls();
      if (isRotating) {
        controls.autoRotate = true;
        controls.update();
      }
      return () => {
        controls.autoRotate = false;
        controls.update();
      };
    }
  }, [isRotating, isControled]);

  return (
    <div className={cn("w-full", styles.container)}>
      <div className="w-full md:w-content mx-auto flex justify-center relative">
        <div
          ref={lefthandRef}
          className={cn("w-2/5 absolute left-[30%] top-[20%] opacity-0")}
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
          className={cn("w-2/5 absolute right-[30%] top-[20%] opacity-0")}
        >
          <Image
            src="/right-hand.webp"
            alt="right-hand"
            width={4000}
            height={3000}
          />
        </div>
        <div style={{ width: "100%", minHeight: globeHeight }}>
          <div ref={earthRef}>
            <Globe
              globeRef={globeEl}
              width={globeWidth}
              height={globeHeight}
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
              // htmlAltitude={0}
              htmlElement={(d: any) => {
                const wrapper = document.createElement("div");

                const root = createRoot(wrapper);
                root.render(
                  <Marker
                    onEnter={() => setIsRotating(false)}
                    onLeave={() => setIsRotating(true)}
                  />
                );

                return wrapper;
              }}
              onGlobeReady={onGlobeReady}
              // enablePointerInteraction
            />
            {earthIsReady && children}
          </div>
        </div>
      </div>
      <Impact />
    </div>
  );
}

function Marker({
  onEnter,
  onLeave,
}: {
  onEnter?: () => void;
  onLeave?: () => void;
}) {
  const wrapRef = useRef<HTMLDivElement>();
  const [open, setOpen] = useState(false);

  const onChange = (val: boolean) => {
    setOpen(val);
    if (!val) {
      onLeave?.();
    }
  };
  return (
    <HoverCard open={open} onOpenChange={onChange}>
      <HoverCardTrigger>
        <div ref={wrapRef}>
          <div
            className={styles.marker}
            onClick={() => setOpen(true)}
            onMouseEnter={onEnter}
          >
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
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="min-w-52 relative z-50 bg-white/75 shadow-lg rounded-none">
        <div className="flex justify-between space-x-4">test</div>
      </HoverCardContent>
    </HoverCard>
  );
}
