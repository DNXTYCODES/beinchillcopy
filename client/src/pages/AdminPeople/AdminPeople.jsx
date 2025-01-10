import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  getAllPeople,
  createPerson,
  updatePerson,
  deletePerson,
} from "../../utils/api";
import "./AdminPeople.css";

const AdminPeople = ({ token }) => {
  const [people, setPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [newPerson, setNewPerson] = useState({ name: "", role: "", description: "", image: "" });

  useEffect(() => {
    fetchPeople();
  }, []);

  const fetchPeople = async () => {
    try {
      const data = await getAllPeople();
      setPeople(data);
    } catch (error) {
      console.error("Error fetching people:", error);
    }
  };

  const handleCreatePerson = async () => {
    try {
      await createPerson(newPerson, token);
      toast.success("Person added successfully");
      fetchPeople();
      setNewPerson({ name: "", role: "", description: "", image: "" });
    } catch (error) {
      console.error("Error creating person:", error);
    }
  };

  const handleDeletePerson = async (id) => {
    if (window.confirm("Are you sure you want to delete this person?")) {
      try {
        await deletePerson(id, token);
        setPeople(people.filter((person) => person.id !== id));
      } catch (error) {
        console.error("Error deleting person:", error);
      }
    }
  };

  return (
    <div className="admin-people-panel">
      <h1>Manage People</h1>

      <div className="actions">
        <input
          type="text"
          placeholder="Name"
          value={newPerson.name}
          onChange={(e) => setNewPerson({ ...newPerson, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role"
          value={newPerson.role}
          onChange={(e) => setNewPerson({ ...newPerson, role: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newPerson.description}
          onChange={(e) =>
            setNewPerson({ ...newPerson, description: e.target.value })
          }
        />
        <button onClick={handleCreatePerson}>Add Person</button>
      </div>

      <section className="people-grid">
        {people.map((person) => (
          <div className="person-card" key={person.id}>
            <h3>{person.name}</h3>
            <p>{person.role}</p>
            <button onClick={() => handleDeletePerson(person.id)}>Delete</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AdminPeople;
