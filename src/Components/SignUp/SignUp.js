import { getAuth, updateProfile } from "firebase/auth";
import React, { useContext } from "react";
import GoogleButton from "react-google-button";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const SignUp = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { googleSignIn, githubSignIn, userSignUp } = useContext(AuthContext);
  const signInWIthGoogle = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  // GitHub Login
  const githubLogin = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  // Email SignUp
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    const confirmPassword = form.passwordConfirmation.value;
    console.log(password, confirmPassword);

    if (password === confirmPassword) {
      userSignUp(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          updateProfile(auth.currentUser, {
            displayName: fullName,
            photoURL: photoURL,
          })
            .then((result) => {
              const user = result.user;
              console.log(user);
            })
            .catch((error) => console.log(error));
          navigate(from, { replace: true });
        })
        .catch((error) => console.log(error));
    } else {
      toast.error("Password didn't match");
    }
  };

  //  <GoogleButton onClick={signInWIthGoogle}></GoogleButton>
  //             <Link
  //               onClick={githubLogin}
  //               class='inline-flex ml-6 items-center rounded border-2 border-[#171515] bg-[#171515] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-[#171515] focus:outline-none focus:ring active:opacity-75'
  //               rel='noreferrer'>
  //               GitHub
  //               <svg
  //                 class='ml-2 h-5 w-5'
  //                 fill='currentColor'
  //                 viewBox='0 0 24 24'
  //                 aria-hidden='true'>
  //                 <path
  //                   fill-rule='evenodd'
  //                   d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
  //                   clip-rule='evenodd'></path>
  //               </svg>
  //             </Link>
  return (
    <div>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>Login now!</h1>
            <p className='py-6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <form onSubmit={handleSignUp}>
              <div className='card-body'>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>User Name</span>
                  </label>
                  <input
                    type='text'
                    placeholder='username'
                    name='fullName'
                    className='input input-bordered'
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Email</span>
                  </label>
                  <input
                    type='email'
                    placeholder='email'
                    name='email'
                    className='input input-bordered'
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>PhotoURL</span>
                  </label>
                  <input
                    type='text'
                    placeholder='photo'
                    name='photoURL'
                    className='input input-bordered'
                  />
                  <label className='label'>
                    <span className='label-text'>Password</span>
                  </label>
                  <input
                    type='password'
                    placeholder='password'
                    className='input input-bordered'
                  />
                  <label className='label'>
                    <span className='label-text'>Confirm Password</span>
                  </label>
                  <input
                    type='password'
                    placeholder='confirm password'
                    name='passwordConfirmation'
                    className='input input-bordered'
                  />
                  <label className='label'>
                    <a href='#' className='label-text-alt link link-hover'>
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className='form-control mt-6'>
                  <button className='btn btn-primary'>Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
