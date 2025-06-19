"use client"
import { useState } from "react"
import Sidebar from "./SideBar"
import Dashboard from "./Dashboard"
import "./AdminScreen.css"

export default function AdminScreen() {
  const [activeSection, setActiveSection] = useState("dashboard")

  return (
    <div className="admin-container">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        <Dashboard />
      </main>
    </div>
  )
}
