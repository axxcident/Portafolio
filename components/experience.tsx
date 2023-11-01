"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
// import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  // const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <div className="flex flex-col space-y-4">
        {experiencesData.map((item, index) => (
          <div
            key={index}
            className={`group mb-3 sm:mb-8 last:mb-0 ${
              index % 2 === 0 ? "" : "sm:ml-[19rem]"
            }`}
          >
            <article className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
              <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <span className="text-gray-500">{item.date}</span>
                <p className="font-normal mt-2">{item.location}</p>
                <p className="mt-1 font-normal text-gray-700">
                  {item.description}
                </p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
// -----------------------------------------------------------------------------------------------------------
// export default function Experience() {
//   const { ref } = useSectionInView("Experience");
//   // const { theme } = useTheme();

//   return (
//     <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
//       <SectionHeading>My experience</SectionHeading>
//       <VerticalTimeline lineColor="">
//         {experiencesData.map((item, index) => (
//           <React.Fragment key={index}>
//             <VerticalTimelineElement
//               contentStyle={{
//                 // theme === "light"
//                 background: true ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
//                 boxShadow: "none",
//                 border: "1px solid rgba(0, 0, 0, 0.05)",
//                 textAlign: "left",
//                 padding: "1.3rem 2rem",
//               }}
//               contentArrowStyle={{
//                 borderRight: "7px solid  rgba(0, 0, 0, 0.05)",
//               }}
//               date={item.date}
//               icon={item.icon}
//               iconStyle={{
//                 // theme === "light"
//                 background: true ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
//                 fontSize: "1.5rem",
//               }}
//             >
//               <h3 className="font-semibold capitalize">{item.title}</h3>
//               <p className="font-normal !mt-0">{item.location}</p>
//               <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
//                 {item.description}
//               </p>
//             </VerticalTimelineElement>
//           </React.Fragment>
//         ))}
//       </VerticalTimeline>
//     </section>
//   );
// }
// -----------------------------------------------------------------------------------------------------------
// "use client";
// import React from "react";
// import SectionHeading from "./section-heading";
// import { useSectionInView } from "@/lib/hooks";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import { experiencesData } from "@/lib/data";

// export default function Experience() {
//   const { ref } = useSectionInView("Experience", 0.3);
//   return (
//     <section id="experience" ref={ref}>
//       <SectionHeading>my experience</SectionHeading>
//       <VerticalTimeline>
//         {experiencesData.map((item, index) => (
//           <React.Fragment key={index}>
//             <VerticalTimelineElement>
//               <h3 className="text-xl font-semibold">{item.title}</h3>
//               <p className="text-lg font-semibold">{item.location}</p>
//               <p className="text-gray-800">{item.description}</p>
//             </VerticalTimelineElement>
//           </React.Fragment>
//         ))}
//       </VerticalTimeline>
//     </section>
//   );
// }
