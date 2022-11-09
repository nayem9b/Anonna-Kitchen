import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import Form from "../Form/Form";
import useTitle from "../Hooks/UseTitle";
import AverageReview from "../Reviews/AverageReview";
import Reviews from "../Reviews/Reviews";
import SignInToWriteAReview from "../Reviews/SignInToWriteAReview";

const ServiceDetails = () => {
  const { _id, name, price, photo, info } = useLoaderData();
  console.log(useLoaderData());
  const sname = name;
  useTitle(`${sname}`);
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className='grid grid-rows-2 gap-4'>
      <section>
        <div class='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
          <div class='max-w-3xl'>
            <h2 class='text-3xl font-bold sm:text-4xl'>{name}</h2>
          </div>

          <div class='mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
            <div class='relative h-64 overflow-hidden sm:h-80 lg:h-full'>
              <img
                alt='Party'
                src={photo}
                class='absolute inset-0 h-full w-full object-cover'
              />
            </div>

            <div class='lg:py-16'>
              <article class='space-y-4 text-gray-600'>
                <p>{price}</p>

                <p>{info}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='divider'></div>
        {user ? (
          <>
            {" "}
            <div class='mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8'>
              <AverageReview></AverageReview>

              <div class='mt-8 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2'>
                {reviews.map((rvw) => (
                  <Reviews key={rvw._id} rvw={rvw}></Reviews>
                ))}
              </div>
            </div>
            <Form sname={sname}></Form>
          </>
        ) : (
          <>
            <SignInToWriteAReview></SignInToWriteAReview>
            <div class='mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8'>
              <AverageReview></AverageReview>

              <div class='mt-8 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2'>
                {reviews.map((rvw) => (
                  <Reviews key={rvw._id} rvw={rvw}></Reviews>
                ))}
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default ServiceDetails;
