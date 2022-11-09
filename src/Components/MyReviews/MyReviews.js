import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/UserContext";
import MyReviewsTable from "./MyReviewsTable";

const MyReviews = () => {
  const { user, logout } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/myreviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          console.log("deleted seccessfully");
        }
      });
    console.log(id);
  };
  useEffect(() => {
    fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logout();
        }
        return res.json();
      })
      .then((data) => setReviews(data));
  }, [user?.email, logout]);
  console.log(reviews);
  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((myrvw) => (
              <MyReviewsTable
                myrvw={myrvw}
                kry={myrvw._id}
                handleDelete={handleDelete}></MyReviewsTable>
            ))}
          </tbody>
        </table>
      </div>
      ;
    </div>
  );
};

export default MyReviews;
