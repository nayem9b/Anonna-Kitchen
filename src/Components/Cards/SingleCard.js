import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const SingleCard = ({ srv }) => {
  const { name, photo, price, info, _id } = srv;

  return (
    <div>
      <button>
        <div class='flex w-full'>
          <div class='relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8'>
            <PhotoProvider>
              <PhotoView src='https://images.unsplash.com/photo-1621659911279-b08ce9ff421f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'>
                <img
                  src='https://images.unsplash.com/photo-1621659911279-b08ce9ff421f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
                  alt=''
                />
              </PhotoView>
            </PhotoProvider>

            {/* <img
              class='object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36'
              src='https://images.unsplash.com/photo-1621659911279-b08ce9ff421f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
              alt='blog'
            /> */}
            <div class='px-6 py-8'>
              <h4 class='mt-4 text-2xl font-semibold text-neutral-600'>
                <span class=''>{name}</span>
              </h4>
              <p class='mt-4 text-base font-normal text-gray-500 leading-relax'>
                Install Tailwind CSS without any Javascript Framewrok locally
                with purgeCSS, enable the dark mode option, prefferences or
                class is upt to you.
              </p>
              <button
                class='group relative inline-block focus:outline-none focus:ring'
                href='/download'>
                <span class='absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0'></span>
                <Link to={`/services/${_id}`}>
                  <span class='relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75'>
                    View Details
                  </span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default SingleCard;
