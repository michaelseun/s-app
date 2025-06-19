"use client"

import { LogOut, Users, BookOpen, FileText, FileSpreadsheet } from "lucide-react"
import "./SideBar.css"
import { Link, Outlet } from 'react-router-dom';

export default function SideBar({ activeSection, setActiveSection }) {
  const menuItems = [
    { id: "students", label: "Manage Students", icon: <Users size={20} /> },
    { id: "courses", label: "Manage Courses",  icon: <BookOpen size={20}   /> },


  ]

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>Admin Panel</h1>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id} className={activeSection === item.id ? "active" : ""}>
              <button onClick={() => setActiveSection(item.id)}>
                {item.icon}
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-footer">
        <button className="logout-button">
          <LogOut size={20} />
          <Link to='/AdminLogin' className="logoutt"><span >Logout</span></Link>
        </button>
      </div>
    </aside>
  )
}
