import React, { useEffect, useState } from "react";
import "../styles/Tenders.css";


const Tenders = () => {
  const [tenders, setTenders] = useState([]);



  useEffect(() => {
    fetch("http://127.0.0.1:8000/tenders/api/tenders/")
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        if (data.tenders && Array.isArray(data.tenders)) {
          setTenders(data.tenders); // ✅ Set only the array
        } else {
          console.error("Unexpected API response format:", data);
          setTenders([]); // ✅ Prevents map() errors
        }
      })
      .catch((error) => console.error("Error fetching tenders:", error));
  }, []);
  

  return (
    <div className="tenders-page">
      <h2 className="page-title">Available Tenders</h2>
      <div className="tenders-grid">
        {tenders.length > 0 ? (
          tenders.map((tender) => (
            <div key={tender.id} className="tender-card">
              <h3>{tender.title}</h3>
              <p>{tender.description}</p>
              <a href={tender.link} target="_blank" rel="noopener noreferrer">
                🔗 View Details
              </a>
            </div>
          ))
        ) : (
          <p className="no-tenders">No tenders available at the moment.</p>
        )}
      </div>
    </div>
  );
};
    


export default Tenders;
