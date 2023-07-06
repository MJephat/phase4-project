import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/hotels")
      .then((r) => r.json())
      .then(hotels => setHotels(hotels));
      
  }, []);
  console.log(setHotels);
  

function handleDelete(id){
  fetch(`http://127.0.0.1:5555/hotels/${id}`,{
    method:'DELETE',
  })
  .then((r) => {
    if(r.ok){
      setHotels((hotels) => hotels.filter((hotel) => hotel.id !== id));
    }
  })
  .catch((error) => {
    console.log("Error deleteing hotel:", error);
  });
}

  return (
    <section className="container">
      {hotels.map((hotel) => (
        <div key={hotel.id} className="card">
          <h2>
            <Link to={`/hotels/${hotel.id}`}>{hotel.name}</Link>
          </h2>
          <p>Address: {hotel.address}</p>
          <button onClick={() => handleDelete(hotel.id)}>Delete</button>
        </div>
      ))}
    </section>
  );
}

export default Menu;


