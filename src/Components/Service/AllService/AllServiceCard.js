import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
const AllServiceCard = () => {
  return (
    <div>
      <article class='group'>
        <PhotoProvider>
          <PhotoView src='https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'>
            <img
              alt='Lava'
              src='https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
              class='h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]'
            />
          </PhotoView>
        </PhotoProvider>

        <div class='p-4'>
          <button>
            <h3 class='text-lg font-medium text-gray-900'>
              Finding the Journey to Mordor
            </h3>
          </button>

          <p class='mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>
        </div>
      </article>
    </div>
  );
};

export default AllServiceCard;
