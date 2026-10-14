import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const isLengthValid = password.length >= 6;

    if (!isLengthValid) {
      setErrorMessage("Password must have at least 6 characters.");
      return;
    }

    if (!hasUpperCase) {
      setErrorMessage("Password must have at least one uppercase letter.");
      return;
    }
    if (!hasLowerCase) {
      setErrorMessage("Password must have at least one lowercase letter.");
      return;
    }
    

    const user = { name, email, photoURL, password };
    // console.log(user);

    createUser(email, password)
      .then((result) => {
        return updateProfile(result.user, {
          displayName: name,
          photoURL: photoURL,
        });
      })
      .then(() => {
        toast.success("Successfully Registered");
        setErrorMessage("");
        form.reset();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-50 py-10">
      <Helmet><title>Register</title></Helmet>
      <div className="max-w-5xl mx-auto px-4 hero-content flex-col lg:flex-row-reverse gap-10">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-slate-800">Register Now</h1>
          <p className="py-6 text-slate-500">
          Online group study fosters collaboration and enhances learning. By connecting with peers virtually, <br />
           students can share resources, discuss topics, and support each other, <br />
            making study sessions more engaging and productive.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm bg-white shadow-xl shadow-indigo-100 border border-slate-200 rounded-2xl">
            <h1 className="text-center text-2xl mt-5 font-semibold">
              Register
            </h1>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURl</span>
                </label>
                <input
                  id="photoURL"
                  type="text"
                  placeholder="PhotoURL"
                  name="photoURL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn border-none bg-indigo-600 hover:bg-indigo-500 text-white">Submit</button>
              </div>
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              <p className="text-xs text-center  sm:px-6  dark:text-gray-600">
                Do you have an account?
                <NavLink to={"/login"}>
                  {" "}
                  <strong className="underline">Login</strong>
                </NavLink>
              </p>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
