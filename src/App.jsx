import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

function App() {
  // Replace these URLs with your actual files / videos
  const reports = [
    { id: "A1 - Coming soon", pdf: "files/reportA1.pdf", slides: "files/slidesA1.pdf", video: "VIDEO_ID_A1" },
    { id: "A2 - Coming soon", pdf: "files/reportA2.pdf", slides: "files/slidesA2.pdf", video: "VIDEO_ID_A2" },
    { id: "A3 - Coming soon", pdf: "files/reportA3.pdf", slides: "files/slidesA3.pdf", video: "VIDEO_ID_A3" },
  ];

  const teamMembers = [
    { name: "Callum McIntyre", role: "Group Leader", img: "/cisc-322-group-website/files/callum.JPG" },
    { name: "Isaac Ouellette", role: "Group Presenter", img: "/cisc-322-group-website/files/isaac.jpg" },
    { name: "Nicholas Saloufakos", role: "Group Presenter", img: "/cisc-322-group-website/files/nick.jpg" },
    { name: "Andreea Cobzaru", role: "Group Member", img: "/cisc-322-group-website/files/andreea.jpg" },
    { name: "Jordan Bouckley", role: "Group Member", img: "/cisc-322-group-website/files/jb.jpg" },
    { name: "Zachary Gazaille", role: "Group Member", img: "/cisc-322-group-website/files/zach.jpg" },
  ];

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{
        fontSize: "5.5rem",
        fontWeight: 1200,
        letterSpacing: "2.5px",
        textAlign: "center",
        marginBottom: "2.5rem",
        textTransform: "uppercase",
        textShadow: "0 4px 16px rgba(0,0,0,0.18), 0 2px 0 #fff",
        maxWidth: "none",
        whiteSpace: "normal",
        wordBreak: "break-word"
      }}>
        CISC 322 - Group 1 - Group Name
      </h1>

      {reports.map(item => (
        <div key={item.id} style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "4rem", marginBottom: "1rem", fontWeight: 900, letterSpacing: "2px", textAlign: "center" }}>Assignment {item.id}</h2>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
            <a
              href={item.pdf}
              target="_blank"
              style={{ display: "inline-block", width: "400px", textAlign: "center", padding: "0.75rem 0", background: "#f0f0f0", borderRadius: "8px", textDecoration: "none", fontWeight: 600, fontSize: "1.1rem", color: "#222" }}
            >
              Report {item.id}
            </a>
            <a
              href={item.slides}
              target="_blank"
              style={{ display: "inline-block", width: "400px", textAlign: "center", padding: "0.75rem 0", background: "#f0f0f0", borderRadius: "8px", textDecoration: "none", fontWeight: 600, fontSize: "1.1rem", color: "#222" }}
            >
              Slideshow {item.id}
            </a>
            <iframe
              width="400"
              height="225"
              src={`https://www.youtube.com/embed/${item.video}`}
              title={`Video ${item.id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ marginTop: "0.5rem" }}
            />
          </div>
        </div>
      ))}

      <h2>Team Members</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2rem",
        justifyItems: "center",
        margin: "0 auto",
        maxWidth: "800px"
      }}>
        {teamMembers.map(member => (
          <div key={member.name} style={{ width: "180px", textAlign: "center" }}>
            <img
              src={member.img}
              alt={member.name}
              style={{ width: "160px", height: "160px", objectFit: "cover", borderRadius: "8px" }}
            />
            <h4 style={{ margin: "0.5rem 0 0 0" }}>{member.name}</h4>
            <p style={{ margin: 0 }}>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
