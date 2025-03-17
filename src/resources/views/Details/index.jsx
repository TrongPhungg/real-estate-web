import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const [tests, setTest] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/estate")
    .then((response) => response.json())
      .then((data) => setTest(data))
      .catch((error) => console.error("Error fetching properties:", error));
  },[]);
  return (
    <div>
      {tests.length > 0 ? (
        tests.map((test) =>(
          <div>
            <h2>{test.title}</h2>
          </div>
        ))
    ): (
        <div>Khong tim thay du lieu nha</div>
      )}
    </div>
  );
}

export default Details;
