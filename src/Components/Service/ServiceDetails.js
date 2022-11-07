import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import Form from "../Form/Form";
import Reviews from "../Reviews/Reviews";

const ServiceDetails = () => {
  const { _id, name, price } = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(user.email);
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
            <h2 class='text-3xl font-bold sm:text-4xl'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
              alias doloribus impedit.
            </h2>
          </div>

          <div class='mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
            <div class='relative h-64 overflow-hidden sm:h-80 lg:h-full'>
              <img
                alt='Party'
                src='https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80'
                class='absolute inset-0 h-full w-full object-cover'
              />
            </div>

            <div class='lg:py-16'>
              <article class='space-y-4 text-gray-600'>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                  qui hic atque tenetur quis eius quos ea neque sunt,
                  accusantium soluta minus veniam tempora deserunt? Molestiae
                  eius quidem quam repellat.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorum explicabo quidem voluptatum voluptas illo accusantium
                  ipsam quis, vel mollitia? Vel provident culpa dignissimos
                  possimus, perferendis consectetur odit accusantium dolorem
                  amet voluptates aliquid, ducimus tempore incidunt quas.
                  Veritatis molestias tempora distinctio voluptates sint! Itaque
                  quasi corrupti, sequi quo odit illum impedit!
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='divider'></div>
        <div className='flex flex-row-reverse'>
          <Link
            class='group flex items-center justify-between rounded-lg border border-indigo-600 bg-indigo-600 px-5 py-3 transition-colors hover:bg-transparent focus:outline-none focus:ring'
            to='/signin'>
            <span class='font-medium text-white transition-colors group-hover:text-indigo-600 group-active:text-indigo-500'>
              Signin to write a review
            </span>

            <span class='ml-4 flex-shrink-0 rounded-full border border-current bg-white p-2 text-indigo-600 group-active:text-indigo-500'>
              <svg
                class='h-5 w-5'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M17 8l4 4m0 0l-4 4m4-4H3'
                />
              </svg>
            </span>
          </Link>
        </div>
        <div class='mx-auto max-w-screen-xl px-4  sm:px-6 lg:px-8'>
          <h2 class='text-xl font-bold sm:text-2xl'>Customer Reviews</h2>

          <div class='mt-4 flex items-center'>
            <p class='text-3xl font-medium'>
              3.8
              <span class='sr-only'> Average review score </span>
            </p>

            <div class='ml-4'>
              <div class='-ml-1 flex'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-5 w-5 text-yellow-400'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-5 w-5 text-yellow-400'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-5 w-5 text-yellow-400'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-5 w-5 text-yellow-400'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-5 w-5 text-gray-200'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
              </div>

              <p class='mt-0.5 text-xs text-gray-500'>Based on 48 reviews</p>
            </div>
          </div>

          <div class='mt-8 grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2'>
            {reviews.map((rvw) => (
              <Reviews key={rvw._id} rvw={rvw}></Reviews>
            ))}
          </div>
        </div>
      </section>
      <Form></Form>
    </div>
  );
};

export default ServiceDetails;
