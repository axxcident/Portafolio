'use client'
import React, { useState, useContext } from 'react'
import { links } from '@/lib/data'

type sectionName = (typeof links)[number]['name']

type ActiveSectionContextProviderProps = {
  children: React.ReactNode
}

type ActiveSectionContextType = {
  activeState: sectionName
  setActiveState: React.Dispatch<React.SetStateAction<sectionName>>
}

const ActiveSectionContext =
  React.createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionContextProvider({
  children
}: ActiveSectionContextProviderProps) {
  const [activeState, setActiveState] = useState<sectionName>('Home')

  return (
    <ActiveSectionContext.Provider
      value={{
        activeState,
        setActiveState
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext)
  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider'
    )
  }
  return context
}
