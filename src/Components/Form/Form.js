import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/UserContext";

const Form = ({ sname }) => {
  const { user } = useContext(AuthContext);
  const [refresh, setRefresh] = useState([]);
  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form.message.value;
    const photo = user.photoURL;

    const review = {
      name: user.displayName,
      email: user.email,
      message,
      photo,
      sname,
    };

    //  name,
    //    photo,
    //    info,
    //    price,

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {}, []);

  return (
    <div>
      <section class='bg-gray-100'>
        <div class='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
          <div class='grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5'>
            <div class='rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12'>
              <form onSubmit={handleReview} action='' class='space-y-4'>
                <div>
                  <label class='sr-only' for='name'>
                    Name
                  </label>
                  <input
                    class='w-full rounded-lg border-gray-200 p-3 text-sm'
                    placeholder='Name'
                    type='text'
                    id='name'
                  />
                </div>
                <div>
                  <label class='sr-only' for='name'>
                    Email
                  </label>
                  <input
                    class='w-full rounded-lg border-gray-200 p-3 text-sm'
                    placeholder={user.email}
                    type='text'
                    id='name'
                  />
                </div>

                <div>
                  <label class='sr-only' for='message'>
                    Message
                  </label>
                  <textarea
                    class='w-full rounded-lg border-gray-200 p-3 text-sm'
                    placeholder='Message'
                    rows='8'
                    name='message'
                    id='message'></textarea>
                </div>

                <div class='mt-4'>
                  <button
                    type='submit'
                    class='inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto'>
                    <span class='font-medium'> Send Review </span>

                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='ml-3 h-5 w-5'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
