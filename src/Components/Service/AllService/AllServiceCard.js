import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
const AllServiceCard = ({ srv }) => {
  const { name, info, photo, price } = srv;
  return (
    <div>
      <article class='group my-10'>
        <PhotoProvider>
          <PhotoView src={photo}>
            <img
              alt='Lava'
              src={photo}
              class='h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]'
            />
          </PhotoView>
        </PhotoProvider>

        <div class='p-4'>
          <button>
            <h3 class='text-lg font-medium text-gray-900'>{name}</h3>
          </button>

          <p class='mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3'>
            {info}
          </p>
        </div>
      </article>
    </div>
  );
};

export default AllServiceCard;
