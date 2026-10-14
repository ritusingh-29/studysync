import { useContext, useState } from 'react';
import logo from "../../assets/cap-removebg-preview.png"
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import avater from "../../assets/avater-removebg-preview.png"
import { Tooltip } from 'react-tooltip';

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
    isActive
      ? "text-indigo-600 bg-indigo-50"
      : "text-slate-600 hover:text-indigo-600 hover:bg-slate-100"
  }`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logOut, user } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const links = (
    <>
      <NavLink to="/" end className={navLinkClass}>Home</NavLink>
      <NavLink to="/AllAssignment" className={navLinkClass}>Assignments</NavLink>
      {user && (
        <>
          <NavLink to="/createA" className={navLinkClass}>Create Assignment</NavLink>
          <NavLink to="/PendingAssignment" className={navLinkClass}>Pending</NavLink>
        </>
      )}
      {!user && <NavLink to="/register" className={navLinkClass}>Register</NavLink>}
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img className="w-10 h-10" src={logo} alt="StudySync logo" />
            <span className="text-xl font-bold text-slate-800">
              Study<span className="text-indigo-600">Sync</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">{links}</div>

          <div className="flex items-center gap-3">
            {user ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full ring-2 ring-indigo-200">
                    <img
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={user?.displayName || user?.email}
                      alt="Profile"
                      src={user?.photoURL || avater}
                    />
                  </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow-lg menu menu-sm dropdown-content bg-white rounded-box w-52 border border-slate-100">
                  <li className="px-3 py-2 text-sm text-slate-500 pointer-events-none">
                    {user?.displayName || user?.email}
                  </li>
                  <li><NavLink to="/MyAssignment">My Attempted</NavLink></li>
                  <li><button onClick={handleSignOut} className="text-red-500 hover:bg-red-50">Logout</button></li>
                </ul>
                <Tooltip id="my-tooltip" />
              </div>
            ) : (
              <Link
                to="/logIn"
                className="hidden md:inline-flex px-4 py-2 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
              >
                Login
              </Link>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 py-3 space-y-1">
          {links}
          {user ? (
            <button
              onClick={handleSignOut}
              className="block w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/logIn"
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
