import { Link } from "react-router-dom";
import image from "../../../assets/online-study.png"

const Banner = () => {
    return (
        <section className="bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <span className="inline-block px-4 py-1.5 mb-5 rounded-full bg-white/15 text-white text-sm font-medium backdrop-blur">
                        Learn together, succeed together
                    </span>

                    <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                        StudySync: Unite. Collaborate. <span className="text-amber-300">Succeed.</span>
                    </h1>

                    <p className="mt-5 text-lg text-indigo-100 max-w-xl mx-auto lg:mx-0">
                        Create assignments, share them with your study group, and grade each other's work — all in one friendly place.
                    </p>

                    <div className="mt-8 space-y-3 text-left max-w-md mx-auto lg:mx-0">
                        {[
                            "Intuitive and clutter-free.",
                            "Seamless sharing and interaction.",
                            "Peer-review system with fair marking.",
                        ].map((point) => (
                            <p key={point} className="flex items-center text-indigo-50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3 text-amber-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {point}
                            </p>
                        ))}
                    </div>

                    <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link
                            to="/register"
                            className="px-7 py-3 rounded-xl bg-white text-indigo-700 font-semibold shadow-lg shadow-indigo-900/20 hover:bg-indigo-50 transition-colors text-center"
                        >
                            Get Started Free
                        </Link>
                        <Link
                            to="/AllAssignment"
                            className="px-7 py-3 rounded-xl border-2 border-white/60 text-white font-semibold hover:bg-white/10 transition-colors text-center"
                        >
                            Browse Assignments
                        </Link>
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <img
                        className="animate__animated animate__zoomIn w-full max-w-lg mx-auto drop-shadow-2xl rounded-2xl"
                        src={image}
                        alt="Students collaborating online"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
