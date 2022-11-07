import React, { useContext } from "react";
import GoogleButton from "react-google-button";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const LogIn = () => {
  const { googleSignIn, githubSignIn, userSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Google Login
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        // toast
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
            <div className='flex-1 w-0 p-4'>
              <div className='flex items-start'>
                <div className='flex-shrink-0 pt-0.5'>
                  {user.photoURL ? (
                    <img
                      className='h-10 w-10 rounded-full'
                      src={user.photoURL}
                      alt=''
                    />
                  ) : (
                    <img
                      className='h-10 w-10 rounded-full'
                      src=' https://media.istockphoto.com/photos/positive-millennial-black-man-student-with-books-on-yellow-picture-id1369136607?b=1&k=20&m=1369136607&s=170667a&w=0&h=ENhIBRRkb8bDG6eqAFWEWg_UPljzF6t-Z9h3Ju7088k='></img>
                  )}
                </div>
                <div className='ml-3 flex-1'>
                  <p className='text-sm font-medium text-gray-900'>
                    {user.displayName}
                  </p>
                  <p className='mt-1 text-sm text-gray-500'>
                    Sucessfully Logged in
                  </p>
                </div>
              </div>
            </div>
            <div className='flex border-l border-gray-200'>
              <button
                onClick={() => toast.dismiss(t.id)}
                className='w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500'>
                Close
              </button>
            </div>
          </div>
        ));
        const user = result.user;

        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  // Github Login
  const handleGithubLogin = () => {
    githubSignIn()
      .then((result) => {
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
            <div className='flex-1 w-0 p-4'>
              <div className='flex items-start'>
                <div className='flex-shrink-0 pt-0.5'>
                  {user.photoURL ? (
                    <img
                      className='h-10 w-10 rounded-full'
                      src={user.photoURL}
                      alt=''
                    />
                  ) : (
                    <img
                      className='h-10 w-10 rounded-full'
                      src=' https://media.istockphoto.com/photos/positive-millennial-black-man-student-with-books-on-yellow-picture-id1369136607?b=1&k=20&m=1369136607&s=170667a&w=0&h=ENhIBRRkb8bDG6eqAFWEWg_UPljzF6t-Z9h3Ju7088k='></img>
                  )}
                </div>
                <div className='ml-3 flex-1'>
                  <p className='text-sm font-medium text-gray-900'>
                    {user.displayName}
                  </p>
                  <p className='mt-1 text-sm text-gray-500'>
                    Sucessfully Logged in
                  </p>
                </div>
              </div>
            </div>
            <div className='flex border-l border-gray-200'>
              <button
                onClick={() => toast.dismiss(t.id)}
                className='w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500'>
                Close
              </button>
            </div>
          </div>
        ));
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .then((error) => console.log(error));
  };

  //Email Login
  const handleEmailLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    userSignIn(email, password)
      .then((result) => {
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
            <div className='flex-1 w-0 p-4'>
              <div className='flex items-start'>
                <div className='flex-shrink-0 pt-0.5'>
                  {user.photoURL ? (
                    <img
                      className='h-10 w-10 rounded-full'
                      src={user.photoURL}
                      alt=''
                    />
                  ) : (
                    <img
                      className='h-10 w-10 rounded-full'
                      src=' https://media.istockphoto.com/photos/positive-millennial-black-man-student-with-books-on-yellow-picture-id1369136607?b=1&k=20&m=1369136607&s=170667a&w=0&h=ENhIBRRkb8bDG6eqAFWEWg_UPljzF6t-Z9h3Ju7088k='></img>
                  )}
                </div>
                <div className='ml-3 flex-1'>
                  <p className='text-sm font-medium text-gray-900'>
                    {user.displayName}
                  </p>
                  <p className='mt-1 text-sm text-gray-500'>
                    Sucessfully Logged in
                  </p>
                </div>
              </div>
            </div>
            <div className='flex border-l border-gray-200'>
              <button
                onClick={() => toast.dismiss(t.id)}
                className='w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500'>
                Close
              </button>
            </div>
          </div>
        ));
        navigate(from, { replace: true });
        const user = result.user;
        console.log(user);
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div>
      <section class='relative flex flex-wrap lg:h-screen lg:items-center'>
        <div class='w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24'>
          <div class='mx-auto max-w-lg text-center'>
            <h1 class='text-2xl font-bold sm:text-3xl'>Get started today!</h1>

            <p class='mt-4 text-gray-500'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              nulla eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
          </div>

          <form
            onSubmit={handleEmailLogin}
            action=''
            class='mx-auto mt-8 mb-0 max-w-md space-y-4'>
            <div>
              <label for='email' class='sr-only'>
                Email
              </label>

              <div class='relative'>
                <input
                  type='email'
                  class='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
                  placeholder='Enter email'
                  name='email'
                />

                <span class='absolute inset-y-0 right-4 inline-flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='h-5 w-5 text-gray-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label for='password' class='sr-only'>
                Password
              </label>
              <div class='relative'>
                <input
                  type='password'
                  class='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
                  placeholder='Enter password'
                  name='password'
                />

                <span class='absolute inset-y-0 right-4 inline-flex items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    class='h-5 w-5 text-gray-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div class='flex items-center justify-between'>
              <p class='text-sm text-gray-500'>
                No account?
                <a href='#' class='underline'>
                  Sign up
                </a>
              </p>

              <button
                type='submit'
                class='ml-3 inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white'>
                Sign in
              </button>
            </div>
            <div className='flex justify-between'>
              <GoogleButton onClick={handleGoogleLogin}></GoogleButton>
              <Link
                onClick={handleGithubLogin}
                class='inline-flex   rounded border-2 border-[#171515] bg-[#171515] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75'
                rel='noreferrer'>
                GitHub
                <svg
                  class='ml-2 h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'>
                  <path
                    fill-rule='evenodd'
                    d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                    clip-rule='evenodd'></path>
                </svg>
              </Link>
            </div>
          </form>
        </div>

        <div class='relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2'>
          <img
            alt='Welcome'
            src='https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
            class='absolute inset-0 h-full w-full object-cover'
          />
        </div>
      </section>

      <Toaster />
    </div>
  );
};

export default LogIn;
