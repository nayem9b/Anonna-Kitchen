import React from "react";

const Blogs = () => {
  return (
    <div>
      <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              Difference between SQL and NoSQL?
            </h1>
            <p className='mb-8 leading-relaxed text-justify'>
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources. CORS also relies on a mechanism by which
              browsers make a "preflight" request to the server hosting the
              cross-origin resource, in order to check that the server will
              permit the actual request. In that preflight, the browser sends
              headers that indicate the HTTP method and headers that will be
              used in the actual request.
            </p>
            <div className='flex justify-center'></div>
          </div>
          <div className='object-cover object-center rounded h-[168px] w-[300px]'>
            <img
              className='object-cover object-center rounded h-[168px] w-[300px]'
              alt='hero'
            />
          </div>
        </div>
      </section>
      <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              What is JWT, and how does it work?
            </h1>
            <p className='mb-8 leading-relaxed text-justify'>
              Firebase Authentication aims to make building secure
              authentication systems easy, while improving the sign-in and
              onboarding experience for end users. It provides an end-to-end
              identity solution, supporting email and password accounts, phone
              auth, and Google, Twitter, Facebook, and GitHub login, and more.{" "}
              <br />
              There are other options beside firebase authentication. These are
              :
              <ul>
                {" "}
                <li>MongoDB</li>
                <li>Oracle Database</li>
                <li>Amazon Redshift</li>
                <li>DataStax Enterprise</li>
                <li>Db2</li>
              </ul>
            </p>
            <div className='flex justify-center'></div>
          </div>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
            <img
              className='object-cover object-center rounded h-[168px] w-[300px]'
              alt='hero'
            />
          </div>
        </div>
      </section>
      <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              What is the difference between javascript and NodeJS?
            </h1>
            <p className='mb-8 leading-relaxed text-justify'>
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated (Logged in).
            </p>
            <div className='flex justify-center'></div>
          </div>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
            <img className='object-cover object-center rounded' alt='hero' />
          </div>
        </div>
      </section>
      <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              How does NodeJS handle multiple requests at the same time?
            </h1>
            <p className='mb-8 leading-relaxed text-justify'>
              Node.js is an open-source backend javascript runtime environment.
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node.js runs on chrome v8 engine which
              converts javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive. Working of Node.js: Node.js
              accepts the request from the clients and sends the response, while
              working with the request node.js handles them with a single
              thread. To operate I/O operations or requests node.js use the
              concept of threads. Thread is a sequence of instructions that the
              server needs to perform. It runs parallel on the server to provide
              the information to multiple clients. Node.js is an event loop
              single-threaded language. It can handle concurrent requests with a
              single thread without blocking it for one request.
            </p>
            <div className='flex justify-center'></div>
          </div>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
            <img
              className='object-cover object-center rounded h-[168px] w-[300px]'
              alt='hero'
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
