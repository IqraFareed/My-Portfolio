"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

const Experience = () => {
  const { theme } = useTheme();
  const { ref } = useSectionInView("Experience", 0.25);

  return (
    <section
      ref={ref}
      id="experience"
      className="scroll-mt-28 mb-32 sm:mb-40 relative"
    >
      <SectionHeading>My Experience</SectionHeading>

      <VerticalTimeline lineColor="rgba(168,85,247,0.4)">
        {experiencesData?.map((data, index) => (
          <VerticalTimelineElement
            key={index}
            visible={true}
            contentStyle={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 0 40px rgba(168,85,247,0.15)",
              borderRadius: "16px",
              padding: "1.8rem 2rem",
              textAlign: "left",
            }}
            contentArrowStyle={{
              borderRight: "0.4rem solid rgba(168,85,247,0.4)",
            }}
            date={data?.title}
            dateClassName="text-purple-300 font-medium"
            icon={data.icon}
            iconStyle={{
              background: "linear-gradient(135deg, #6d28d9, #db2777)",
              color: "white",
              boxShadow: "0 0 30px rgba(219,39,119,0.5)",
            }}
          >
            <h3 className="font-semibold text-white text-lg">
              {data?.company}
            </h3>

            <p className="mt-2 text-gray-300 leading-relaxed">
              {data?.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
