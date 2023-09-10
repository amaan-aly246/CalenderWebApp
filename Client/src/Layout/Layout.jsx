import React from "react"
import EventPart from "../components/EventPart/EventPart"
import CalenderPart from "../components/CalenderPart/CalenderPart"

export default function Layout() {
  return (
    <main>
      <CalenderPart />
      <EventPart />
    </main>
  )
}
