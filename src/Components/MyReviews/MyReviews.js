import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import useTitle from "../Hooks/UseTitle";
import MyReviewsTable from "./MyReviewsTable";

const MyReviews = () => {
  useTitle("My Review");
  const { user, logout } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myreviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
      },
      // orders page er authorization keu jate na pay tai.eikhane authorization header
      // tarpor bearer & local storage theke she token ta nicche
    })
      // amra dicchilam array kintu pacchilam object.tai nicher process ta dilam
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logout();
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
      });
  }, [user?.email, logout]);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/myreviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Review Deleted");
        }
      });
    console.log(id);
  };
  const navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(`/myreviews/edit/${id}`);
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
                handleDelete={handleDelete}
                handleEdit={handleEdit}></MyReviewsTable>
            ))}
          </tbody>
        </table>
      </div>
      <Toaster />
    </div>
  );
};

export default MyReviews;
