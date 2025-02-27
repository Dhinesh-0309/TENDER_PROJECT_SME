import React, { useState } from "react";
import { db } from "../pages/firebaseConfig"; // Import Firestore
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const AdminDashboard = () => {
  const [tender, setTender] = useState({
    title: "",
    description: "",
    link: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setTender({ ...tender, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "tenders"), {
        ...tender,
        createdAt: serverTimestamp(),
      });
      alert("Tender Posted Successfully!");
      setTender({ title: "", description: "", link: "", deadline: "" });
    } catch (error) {
      console.error("Error adding tender: ", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Admin - Post a Tender</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="title" placeholder="Tender Title" value={tender.title} onChange={handleChange} className="border p-2 w-full"/>
        <textarea name="description" placeholder="Description" value={tender.description} onChange={handleChange} className="border p-2 w-full"/>
        <input type="url" name="link" placeholder="Tender Link" value={tender.link} onChange={handleChange} className="border p-2 w-full"/>
        <input type="date" name="deadline" value={tender.deadline} onChange={handleChange} className="border p-2 w-full"/>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">Post Tender</button>
      </form>
    </div>
  );
};

export default AdminDashboard;
