import { FaBookOpen, FaUsers, FaClipboardCheck, FaChartLine, FaComments, FaHeadset } from "react-icons/fa";

const features = [
    {
        icon: <FaBookOpen className="w-7 h-7" />,
        title: "Create Assignments",
        description: "Build assignments with thumbnails, marks, difficulty levels and due dates in seconds.",
    },
    {
        icon: <FaUsers className="w-7 h-7" />,
        title: "Study Groups",
        description: "Unite with friends, share resources and keep everyone on the same page.",
    },
    {
        icon: <FaClipboardCheck className="w-7 h-7" />,
        title: "Peer Review",
        description: "Take assignments and grade each other's submissions with fair, built-in marking.",
    },
    {
        icon: <FaChartLine className="w-7 h-7" />,
        title: "Track Progress",
        description: "See pending, submitted and attempted assignments from your personal dashboard.",
    },
    {
        icon: <FaComments className="w-7 h-7" />,
        title: "Feedback & Appreciation",
        description: "Examiners leave feedback and appreciation notes on every graded submission.",
    },
    {
        icon: <FaHeadset className="w-7 h-7" />,
        title: "24/7 Access",
        description: "Your study group never sleeps — access everything anytime, anywhere.",
    },
];

const Futures = () => {
    return (
        <section className="bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
                <h1 className="text-3xl lg:text-4xl font-bold text-center text-slate-800">
                    Everything your study group needs
                </h1>

                <p className="max-w-2xl mx-auto mt-4 text-center text-slate-500">
                    From creating assignments to grading your friends' work — StudySync keeps your group organized and motivated.
                </p>

                <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 xl:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-100 transition-all duration-300"
                        >
                            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                {feature.icon}
                            </div>
                            <h2 className="mt-5 text-xl font-semibold text-slate-800">{feature.title}</h2>
                            <p className="mt-2 text-slate-500 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Futures;
