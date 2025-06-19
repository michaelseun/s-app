// Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen } from 'lucide-react';
import './Dashboard.css';

export default function Dashboard() {
  const cards = [
    {
      id: 'students',
      title: 'Manage Students',
      icon: <Users size={40} className="icon icon-blue" />,
      to: '#students',         // placeholder or your real student route
      clickable: false
    },
    {
      id: 'courses',
      title: 'Manage Courses',
      icon: <BookOpen size={40} className="icon icon-green" />,
      to: '/AdminDashboard',   // link target
      clickable: true
    },
  ];

  return (
    <div className="dashboard">
      <div className="welcome-card">
        <h1>Welcome to the Dashboard</h1>
        <p>Select a section from the cards below to manage records.</p>
      </div>
      <div className="card-grid">
        {cards.map((card) => {
          const CardContent = (
            <div className="dashboard-card">
              <div className="card-icon">{card.icon}</div>
              <h2>{card.title}</h2>
            </div>
          );

          return card.clickable ? (
            <Link key={card.id} to={card.to} className="card-link">
              {CardContent}
            </Link>
          ) : (
            <div key={card.id}>{CardContent}</div>
          );
        })}
      </div>
    </div>
  );
}
