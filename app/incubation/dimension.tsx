"use client";
import { useScreen } from "@/hooks";
import ReactEcharts from "echarts-for-react";

const data = [
  {
    name: "Societal Impact",
    value: 0.3,
    itemStyle: {
      color: "#00D5BF",
      shadowBlur: 50,
      shadowColor: "#00D5BF",
    },
    label: {
      rotate: -60,
    },
  },
  {
    name: "Existing User & Community Engagement",
    value: 0.25,
    itemStyle: { color: "#F7A600", shadowBlur: 50, shadowColor: "#F7A600" },
    label: {
      rotate: 30,
    },
  },
  {
    name: "Founder & Core Team",
    value: 0.2,
    itemStyle: { color: "#F44527", shadowBlur: 50, shadowColor: "#F44527" },
    label: {
      rotate: -60,
    },
    labelLine: {
      length: 10,
    },
  },
  {
    name: "Feasibility & Sustainability",
    value: 0.1,
    itemStyle: { color: "#CA81FF", shadowBlur: 50, shadowColor: "#CA81FF" },
    label: {
      rotate: 80,
    },
  },
  {
    name: "Product Implementation",
    value: 0.15,
    itemStyle: { color: "#EEF500", shadowBlur: 50, shadowColor: "#EEF500" },
    label: {
      rotate: 40,
    },
  },
];

const ProjectJudgingChart = () => {
  const { isMobile, isTablet, isDesktop } = useScreen();

  const getLegend = () => {
    if (isDesktop) {
      return [
        {
          orient: "vertical",
          left: "left",
          top: "center",
          textStyle: {
            color: "#fff",
            fontSize: 14,
          },
          itemGap: 20,
          itemStyle: {
            borderWidht: 100,
          },
          data: [
            { name: "Societal Impact", icon: "rect" },
            { name: "Existing User & Community Engagement", icon: "rect" },
            { name: "Founder & Core Team", icon: "rect" },
          ],
        },
        {
          orient: "vertical",
          right: "right",
          top: "center",
          textStyle: {
            color: "#fff",
            fontSize: 14,
          },
          itemGap: 20,
          data: [
            { name: "Feasibility & Sustainability", icon: "rect" },
            { name: "Product Implementation", icon: "rect" },
          ],
        },
      ];
    }
    if (isTablet) {
      return {
        orient: "vertical",
        right: "10%",
        top: "center",
        textStyle: {
          color: "#fff",
          fontSize: 14,
        },
        itemGap: 20,
        data: [
          { name: "Societal Impact", icon: "rect" },
          { name: "Existing User & Community Engagement", icon: "rect" },
          { name: "Founder & Core Team", icon: "rect" },
          { name: "Feasibility & Sustainability", icon: "rect" },
          { name: "Product Implementation", icon: "rect" },
        ],
      };
    }
    return [
      {
        orient: "horizontal",
        bottom: "5%",
        left: "center",
        textStyle: {
          color: "#fff",
          fontSize: 14,
        },
        itemGap: 20,
        data: [
          { name: "Societal Impact", icon: "rect" },
          { name: "Existing User & Community Engagement", icon: "rect" },
          { name: "Founder & Core Team", icon: "rect" },
          { name: "Feasibility & Sustainability", icon: "rect" },
          { name: "Product Implementation", icon: "rect" },
        ],
      },
    ];
  };

  const getCenter = () => {
    if (isMobile) return ["50%", "38%"];
    if (isTablet) return ["30%", "50%"];
    return ["50%", "50%"];
  };

  const getOption = () => {
    return {
      title: {
        text: "Project Judging Dimension",
        left: "center",
        top: "auto",
        textStyle: {
          color: "#fff",
          fontSize: isMobile ? 28 : 32,
          fontWeight: "bold",
          FontFamily: "Inter",
        },
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend: getLegend(),
      series: [
        {
          name: "Project Judging Dimension",
          type: "pie",
          silent: true,
          radius: ["40%", "48%"],
          padAngle: 2,
          center: getCenter(),
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: "outside",
            formatter: "{d}%",
            color: "inherit",
            rotate: "true",
          },
          labelLine: {
            show: false,
            length: 5,
            length2: 5,
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "20",
              fontWeight: "bold",
            },
          },
          data,
        },
        // {
        //   name: "Project Judging Dimension",
        //   type: "pie",
        //   silent: true,
        //   radius: ["48%", "56%"],
        //   padAngle: 2,
        //   center: getCenter(),
        //   data: dataWrap,
        //   itemStyle: { shadowBlur: 20, shadowColor: "#00D5BF", opacity: 0.8 },
        // },
      ],
    };
  };

  return (
    <ReactEcharts
      option={getOption()}
      style={{
        height: "409px",
        width: "100%",
        maxWidth: "860px",
        margin: "0 auto",
      }}
    />
  );
};

export function Dimension() {
  return (
    <div className="w-full md:w-content mx-auto">
      <ProjectJudgingChart />
    </div>
  );
}
