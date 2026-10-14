import { IoIosArrowDown } from "react-icons/io";
import cover from "../../assets/create-removebg-preview.png";
import axios from "axios";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import { toast } from 'react-toastify';
import { BASE_URL } from "../../api/baseUrl";
const CreateA = () => {
    const {user} = useContext(AuthContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const title = from.title.value;
    const email = user?.email;
    const name = user?.displayName;
    const photoURL = from.photoURL.value;
    const marks = from.marks.value;
    const difficultyLevel = from.difficultyLevel.value;
    const date = from.date.value;
    const descriptions = from.descriptions.value;
    const assignment = {
      title,
      email,
      name,
      photoURL,
      marks,
      difficultyLevel,
      date,
      descriptions,
    };
    // console.log(assignment);

    const url = `${BASE_URL}/assignments` ;
    axios.post(url, assignment)
    .then((response) => {
        if (response.data) {
            console.log(response);
            Swal.fire("Saved!", "", "success");
            toast.success("Successfully Created")
            from.reset()
        } else {
            // console.log(response);
            Swal.fire("Error", "Assignment Not Added", "error");
        }
    })
    .catch((error) => {
        // console.log(error);
        Swal.fire("Error", "Failed to save changes", "error");
    });


  }
  return (

    <div>
       <Helmet><title>Create Assignment</title></Helmet>
      <section className="  border border-gray-400 rounded-2xl mx-4 my-4 shadow-md dark:bg-gray-900">
        <div className="lg:flex lg:items-center lg:justify-center min-h-screen">
          <div className="lg:ml-28">
            <img src={cover} alt="" />
          </div>

          <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                <strong>Create Your New Assignment:</strong>
              </h1>

              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Fill in the details below and your assignment will be shared with your study group instantly.
              </p>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
              >
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    <strong>Title:</strong>
                  </label>
                  <input
                    id="title"
                    type="text"
                    name="title"
                    required
                    placeholder="Title"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    <strong>thumbnail Image URL:</strong>
                  </label>
                  <input
                    type="text"
                    id="photoURL"
                    name="photoURL"
                    required
                    placeholder="thumbnail Image URL"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    <strong>marks:</strong>
                  </label>
                  <input
                    type="text"
                    placeholder="marks"
                    id="marks"
                    name="marks"
                    required
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="relative">
                  <select
                    className="appearance-none border mt-6 border-slate-400bg-stone-50  w-full p-4 rounded-md px-3 pr-8 leading-tight focus:outline-none focus:shadow-outline"
                    id="difficultyLevel"
                    name="difficultyLevel"
                    required
                    type="text"
                  >
                    <option value=""> assignment difficulty level</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <IoIosArrowDown className="mt-4 text-gray-600" />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    <strong>Date:</strong>
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    required
                    placeholder="Enter your password"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    <strong>Descriptions:</strong>
                  </label>
                  <input
                    type="text"
                    placeholder="Descriptions........."
                    id="descriptions"
                    name="descriptions"
                    required
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400  border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <button className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  <span> Submit </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 rtl:-scale-x-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateA;
