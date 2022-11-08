import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/UserContext";

const MyReviews = () => {
  const { user, logout } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  console.log(user);
  const {} = useContext;
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logout();
        }
        return res.json();
      })
      .then((data) => setReviews(data));
  }, [user?.email]);
  console.log(reviews);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default MyReviews;
