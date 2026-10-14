import { useState } from "react";

const faqs = [
    {
        question: "How do I create an assignment?",
        answer:
            "Register or log in, then click 'Create Assignment' in the navbar. Fill in the title, thumbnail URL, marks, difficulty level, due date and description — your assignment appears instantly for your study group.",
    },
    {
        question: "Who can give marks on my submission?",
        answer:
            "Any friend from your study group can examine your submission and give marks — but no one can mark their own assignment, so grading always stays fair.",
    },
    {
        question: "Can I edit or delete an assignment I created?",
        answer:
            "Yes. Open the assignment from the Assignments page and use the update button to edit it, or delete it entirely if it's no longer needed.",
    },
    {
        question: "How do I submit an attempt for an assignment?",
        answer:
            "Open an assignment's details page, hit 'Take Assignment' and fill in the submission form. Your attempt shows up under Pending Assignments until a friend grades it.",
    },
    {
        question: "Is StudySync free to use?",
        answer:
            "Absolutely. StudySync is completely free — create an account with your email, Google or GitHub and start collaborating right away.",
    },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
                <h1 className="text-3xl lg:text-4xl font-bold text-center text-slate-800">
                    Frequently Asked Questions
                </h1>
                <p className="mt-4 text-center text-slate-500">
                    Everything you need to know about studying with StudySync.
                </p>

                <div className="mt-10 space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={faq.question}
                                className={`border rounded-2xl transition-colors ${
                                    isOpen
                                        ? "border-indigo-200 bg-indigo-50/50"
                                        : "border-slate-200 bg-white hover:border-indigo-100"
                                }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 focus:outline-none"
                                    aria-expanded={isOpen}
                                >
                                    <span className="font-semibold text-slate-800">{faq.question}</span>
                                    <svg
                                        className={`w-5 h-5 shrink-0 text-indigo-600 transition-transform duration-300 ${
                                            isOpen ? "rotate-180" : ""
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${
                                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-6 pb-5 text-slate-500 leading-relaxed">{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Faq;
