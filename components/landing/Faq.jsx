import { useState } from "react";

const questionsAndAnswers = [
  {
    question: "What is the class attendance system management?",
    answer:
      "The class attendance system management is a new system designed to help schools keep track of student attendance and ensure that all students are present and accounted for during class time. The system will allow teachers to quickly and easily record attendance, and administrators to view attendance records in real-time.",
  },
  {
    question: "How can the system help improve attendance?",
    answer:
      "The system can help improve attendance by identifying students who may need extra support and ensuring that all students are meeting the attendance requirements for their classes. By having real-time attendance records, teachers and administrators can intervene early when a student is absent too often and work with them to improve their attendance.",
  },
  {
    question: "Can the system be used for remote learning?",
    answer:
      "Yes, the system can be used for remote learning. With many schools shifting to online classes, the system has been designed to be flexible and adaptable to different learning environments. Teachers can use the system to take attendance for virtual classes, and students can use the system to check-in remotely.",
  },
  {
    question: "How secure is the system?",
    answer:
      "The system has been designed with security in mind. Student data is stored securely and access to the system is restricted to authorized personnel only. The system also has measures in place to prevent unauthorized access and ensure the privacy of student information.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2
        className="text-3xl font-bold text-green-600 mb-4"
        data-aos="fade-right"
      >
        Frequently Asked Questions
      </h2>
      <br />
      <p data-aos="fade-right">
        Our FAQ section aims to answer some of the most common questions that
        users have about our class attendance management system. We want to
        provide you with all the information you need to make the most of our
        system and ensure that you can easily keep track of student attendance.
        If you can't find the answer to your question here, please don't
        hesitate to contact us and we'll be happy to assist you.
      </p>
      <br />
      <ul className="divide-y divide-slate-500">
        {questionsAndAnswers.map((item, index) => (
          <li
            key={index}
            className="py-4 mb-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span
              className="w-full flex justify-between items-center text-left text-lg text-green-900 focus:outline-none cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.question}</span>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </span>
            <div
              className={`mt-4 ${activeIndex === index ? "block" : "hidden"}`}
            >
              <p className="">{item.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
