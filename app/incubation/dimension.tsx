"use client";
import { useScreen } from "@/hooks";
import ReactEcharts from "echarts-for-react";

const data = [
  {
    name: "Assistance to society",
    value: 0.2,
    itemStyle: { color: "#00D5BF" },
  },
  { name: "Existing User Count", value: 0.2, itemStyle: { color: "#F7A600" } },
  {
    name: "Founder and Core Team",
    value: 0.2,
    itemStyle: { color: "#F44527" },
  },
  {
    name: "Feasibility $ Sustainability",
    value: 0.2,
    itemStyle: { color: "#314198" },
  },
  { name: "Community Engagement", value: 0.1, itemStyle: { color: "#CA81FF" } },
  {
    name: "Product Implementation",
    value: 0.1,
    itemStyle: { color: "#EEF500" },
  },
];

const ProjectJudgingChart = () => {
  const { isMobile, isTablet, isLaptop, isDesktop } = useScreen();

  const getLegend = () => {
    if (isDesktop || isLaptop) {
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
            { name: "Assistance to society", icon: "roundRect" },
            { name: "Existing User Count", icon: "roundRect" },
            { name: "Founder and Core Team", icon: "roundRect" },
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
            { name: "Feasibility $ Sustainability", icon: "roundRect" },
            { name: "Community Engagement", icon: "roundRect" },
            { name: "Product Implementation", icon: "roundRect" },
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
          { name: "Assistance to society", icon: "roundRect" },
          { name: "Existing User Count", icon: "roundRect" },
          { name: "Founder and Core Team", icon: "roundRect" },
          { name: "Feasibility $ Sustainability", icon: "roundRect" },
          { name: "Community Engagement", icon: "roundRect" },
          { name: "Product Implementation", icon: "roundRect" },
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
          { name: "Assistance to society", icon: "roundRect" },
          { name: "Existing User Count", icon: "roundRect" },
          { name: "Founder and Core Team", icon: "roundRect" },
          { name: "Feasibility $ Sustainability", icon: "roundRect" },
          { name: "Community Engagement", icon: "roundRect" },
          { name: "Product Implementation", icon: "roundRect" },
        ],
      },
    ];
  };

  const getCenter = () => {
    if (isMobile) return ["50%", "40%"];
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
          fontSize: 32,
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
          radius: ["40%", "50%"],
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
      ],
    };
  };

  return (
    <ReactEcharts
      option={getOption()}
      style={{
        height: "409px",
        width: "100%",
        maxWidth: "800px",
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
