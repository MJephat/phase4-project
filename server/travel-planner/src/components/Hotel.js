// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import  TravellerForm from "./TravellerForm";

// function HOTEL() {
//   const [{ data: hotel, error, status }, setHotel] = useState({
//     data: null,
//     error: null,
//     status: "pending",
//   });
//   const { id } = useParams();

//   useEffect(() => {
//     fetch(`/hotels/${id}`).then((r) => {
//       if (r.ok) {
//         r.json().then((hotel) =>
//           setHotel({ data: hotel, error: null, status: "resolved" })
//         );
//       } else {
//         r.json().then((err) =>
//           setHotel({ data: null, error: err.error, status: "rejected" })
//         );
//       }
//     });
//   }, [id]);

//   function handleAddTraveller(newTraveller) {
//     setHotel({
//       data: {
//         ...hotel,
//         hotels: [...hotel.travellers, newTraveller],
//       },
//       error: null,
//       status: "resolved",
//     });
//   }

//   if (status === "pending") return <h1>Loading...</h1>;
//   if (status === "rejected") return <h1>Error: {error.error}</h1>;

//   return (
//     <section className="container">
//       <div className="card">
//         <h1>{hotel.name}</h1>
//         <p>{hotel.address}</p>
//       </div>
//       <div className="card">
//         <h2>traveller Page</h2>
//         {hotel.travellers.map((traveller) => (
//           <div key={traveller.id}>
//             <h3>{traveller.name}</h3>
//             <p>
//               <em>{traveller.gender}</em>
//             </p>
//           </div>
//         ))}
//       </div>
//       <div className="card">
//         <h3>Add New traveller</h3>
//         <TravellerForm hotelId={hotel.id} onAddTraveller={handleAddTraveller} />
//       </div>
//     </section>
//   );
// }

// export default HOTEL;


import React, { useEffect, useState } from 'react';
function Body() {
  const [hotels, setHotels] = useState([]);  useEffect(() => {
      fetchHotels();
  }, []);  const fetchHotels = async () => {
      try {
      const response = await fetch('http://localhost:5000/hotels');
      const data = await response.json();
      setHotels(data);
      } catch (error) {
      console.log('Error fetching hotels:', error);
      }
  };  return ( 
      <div className="services-container">
      {/* <div>
          <h1>Services</h1>
      </div> */}
      
      <br></br>
      <br></br>
      <br></br>
      {hotels.map((hotel) => (
          <div className="service-card" key={hotel.id}>
          <img className="service-image" src={hotel.image_url} alt={hotel.name} />
          <h3>{hotel.name}</h3>
          <p>{hotel.address}</p>
          {/* <p>Price: ${service.price}</p> */}
          <button>BOOK APPOINTMENT </button>
          </div>
      ))}
      </div>
  );
}export default Body;