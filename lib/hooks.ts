// "use client";
import { useActiveSectionContext } from "@/context/active-section-context"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import type { sectionName } from "./types"


export function useSectionInView(
  sectionName: sectionName,
  threshold = 0.5
) {
  const { ref, inView } = useInView({ threshold: threshold })
  const { setActiveState, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveState(sectionName)
    }
  }, [inView, setActiveState, timeOfLastClick, sectionName])

  return {
    ref
  }
}
