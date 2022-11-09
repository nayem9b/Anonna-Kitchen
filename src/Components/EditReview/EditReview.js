import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const EditReview = () => {
  const router = useParams();
  const [review, setReview] = useState({});
  const { id } = router;
  useEffect(() => {
    fetch(`http://localhost:5000/myreviews/edit/${id}`)
      .then((res) => res.json())
      .then((data) => setReview(data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleEditSubmit = (event) => {
    event.preventDefault();

    const newInfo = {
      message: event.target.review.value,
    };
    // const form = event.target;
    // const newReview = form.review.value;
    // console.log(newReview);

    fetch(`http://localhost:5000/myreviews/edit/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <form
        onSubmit={handleEditSubmit}
        action='#'
        class='mt-8 grid grid-cols-6 gap-6'>
        <div class='col-span-6'>
          <label for='Email' class='block text-sm font-medium text-gray-700'>
            Email
          </label>

          <input
            type='text'
            id='Email'
            name='review'
            required
            class='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
          />
        </div>
      </form>
    </div>
  );
};

export default EditReview;
