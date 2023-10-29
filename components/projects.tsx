import React from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];

export default function Projects() {
  return (
    <section>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <article className="Bg-gray-100 max-w-[42rem] border-black/5 overflow-hidden sm:pr-8">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <Image src={imageUrl} alt="project I worked on" quality={95} />
    </article>
  );
}
