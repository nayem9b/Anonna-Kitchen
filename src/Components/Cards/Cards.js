import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

const Cards = () => {
  const [services, setServices] = useState([]);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(3);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setCount(data.count);
      });
  }, [page, size]);

  const pages = Math.ceil(count / size);
  return (
    <div>
      <section class='grid grid-cols-4'>
        <div class='flex flex-wrap mx-auto md:flex-nowrap p-12'>
          {services.map((srv) => (
            <SingleCard key={srv._id} srv={srv}></SingleCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Cards;
