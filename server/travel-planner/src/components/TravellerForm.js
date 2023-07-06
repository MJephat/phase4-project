import { useEffect, useState } from "react";

function TravellerForm({ onAddTraveller }) {
  const [travellers, setTravellers] = useState([]);
  const [travellerId, setTravellerId] = useState("");
  const [gender, setGender] = useState("");
  const [formErrors, setFormErrors] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5555/travellers")
      .then((r) => r.json())
      .then(setTravellers);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      traveller_id: travellerId,
      gender: gender,
    };

    fetch("http://127.0.0.1:5555/hotel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((newTraveller) => {
          onAddTraveller(newTraveller);
          setFormErrors([]);
        });
      } else {
        r.json().then((err) => setFormErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="traveller_id">Traveller:</label>
      <select
        id="traveller_id"
        name="traveller_id"
        value={travellerId}
        onChange={(e) => setTravellerId(e.target.value)}
      >
        <option value="">Select a traveller</option>
        
        {travellers.map((traveller) => (
          <option key={traveller.id} value={traveller.id}>
            {traveller.name}
          </option>
        ))}
      </select>
      <label htmlFor="gender">Gender:</label>
      <input
        type="string"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      {formErrors.length > 0
        ? formErrors.map((err) => (
            <p key={err} style={{ color: "red" }}>
              {err}
            </p>
          ))
        : null}
      <button type="submit">Add To Hotel</button>
    </form>
  );
}

export default TravellerForm;
