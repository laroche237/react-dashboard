import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Todo = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch("https://dummyjson.com/todos?limit=5");
      const data = await response.json();
    

      // Transformation des données
      setTasks(
        data.todos.map((task) => ({
          id: task.id,
          text: task.todo,
          completed: task.completed,
          deadline: "2025-01-31", // Exemple de date
        }))
      );
    } catch (error) {
      console.error("Erreur lors du chargement des tâches :", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);


  /* Ajouter une tâche
  const addTask = () => {
    if (newTask.trim() && deadline) {
      const newTaskObject = {
        id: Date.now(),
        text: newTask,
        completed: false,
        deadline,
      };
      setTasks([...tasks, newTaskObject]);
      setNewTask("");
      setDeadline("");
    }
  };
*/
  // Supprimer une tâche
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Modifier une tâche
  const editTask = (id) => {
    const updatedText = prompt("Modifier la tâche :", tasks.find((task) => task.id === id)?.text);
    if (updatedText) {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, text: updatedText } : task
        )
      );
    }
  };

  // Marquer comme terminé / en cours
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="row mx-4 p-2 bg-white rounded">

      {/* Formulaire d'ajout de tâche 
      <div className="mb-3">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Nouvelle tâche"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input
          type="date"
          className="form-control mb-2"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTask}>
          Ajouter
        </button>
      </div>*/}

      {/* Table des tâches */}
      <h2>Liste des tâches</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tâche</th>
            <th>Statut</th>
            <th>Deadline</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.text}</td>
              <td>{task.completed ? "Fait" : "En cours"}</td>
              <td>{task.deadline}</td>
              <td>
                <button className="btn  m-1" style={{color:"blueviolet"}}>Modifier</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;