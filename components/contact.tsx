"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";

export default function Contact() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="contact" ref={ref}>
      <SectionHeading>contact me</SectionHeading>
    </section>
  );
}
