import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [travellers, setTravellers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/travellers")
      .then((r) => r.json())
      .then(travellers => setTravellers(travellers));
      
  }, []);
  console.log(setTravellers);
  

function handleDelete(id) {
    fetch(`http://127.0.0.1:5000/travellers/${id} `, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setTravellers((travellers) =>
          travellers.filter((traveller) => traveller.id !== id)
        );
      }
    });
  }

  return (
    <section className="container">
      {travellers.map((traveller) => ( 
        <div key={traveller.id} className="card">
          <h2>
            <Link to={`/travellers/${traveller.id}`}>{traveller.name}</Link>
          </h2>
          <p>id: {traveller.id}</p>
          <p>gender: {traveller.gender}</p>
          <p>date:{traveller.date}</p>
          <button onClick={() => handleDelete(traveller.id)}>Delete</button>
        </div>
      ))}
    </section>
  );
}

export default Menu;


