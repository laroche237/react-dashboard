import React, { useState, useEffect } from "react";
import "./Calendar.css"; // Ajoutez des styles pour le calendrier.

const getNext30Days = () => {
  const days = [];
  const today = new Date();
// Liste des événements
const calendarDays = [
  {
    id: 1,
    date: "2025-01-25",
    name: "Réunion annuelle",
    description: "Réunion pour discuter des performances annuelles.",
  },
  {
    id: 2,
    date: "2025-02-10",
    name: "Lancement produit",
    description: "Présentation officielle de notre nouveau produit.",
  },
  {
    id: 3,
    date: "2025-03-15",
    name: "Atelier de formation",
    description: "Formation avancée pour les membres de l'équipe.",
  },
];

  for (let i = 0; i < 45; i++) {
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + i); // Ajouter i jours à la date actuelle
    days.push({
      day: nextDay.getDate(),
      month: nextDay.toLocaleString("default", { month: "long" }),
      year: nextDay.getFullYear(),
      event: i % 5 === 0 ? "Événement spécial" : null, // Exemple d'événement
    });
  }

  return days;
};

const Calendar = () => {
 
  const calendarDays = getNext30Days();

  const [projects, setProjects] = useState([]);

  // Charger les données de l'API
  useEffect(() => {
    fetch("http://localhost:3001/projects")
      .then((response) => response.json())
      .then((data) => {
      
        setProjects(data);
      })
      .catch((error) => console.error("Erreur lors du chargement des projets:", error));
  }, []);
  // État pour stocker l'événement sélectionné
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
 <div class="row m-2">
  <div class="col-lg-7 m-1 my-2">
  <div className="calendar-container bg-white rounded">
      <h3>Events to Come</h3>
      <div className="calendar">
      {calendarDays.map((day, index) => (
        <div
          key={index}
          className={`calendar-day ${day.event ? "highlight" : ""}`}
          onClick={() => {
            if (day.event) setSelectedEvent(day); // Mettre à jour l'état
            if (!day.event) <p>Aucun événement sélectionné</p>; 
          }}
          title={day.event || "Pas d'événement"}
          
        >
          {/* Affichage du jour et du mois */}
          <span className="day-number">{day.day}</span>
          <span className="month-name">{day.month}</span>
        </div>
      ))}
    </div>
    </div>
  </div>
  <div class="col-lg-4 bg-white my-2 mx-2 rounded">
  <div className="col-md-6 bg-white rounded">
          <h3>Détails </h3>
          {selectedEvent ? (
            <div className="card p-3">
              <h5>Date : {selectedEvent.day} {selectedEvent.month}</h5>
              <h4>{selectedEvent.event}</h4>
              <p>{selectedEvent.description}</p>
            </div>
          ) : (
            <p class="bg-white">Aucun événement sélectionné</p>
          )}
        </div>
  </div>
<div class="col-lg-11 m-1 bg-white rounded mx-3">
  <h3 class="p-2">Projects</h3>
<table className="table">
        <thead>
          <tr>
            <th>Clients</th>
            <th>Project</th>
            <th>Team Members</th>
            <th>Budget</th>
            <th>Completions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.client}</td>
              <td>{project.project}</td>
              <td>{project.members}</td>
              <td>{project.budget}</td>
              <td>{project.completed ? "Fait" : "En cours"}</td>
              <td>{project.deadline}
              
                <button className="btn  m-1" style={{color:"blueviolet"}}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
</div>

 </div>
  );
};


export default Calendar;