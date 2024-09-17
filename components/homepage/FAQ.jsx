"use client";
import React, { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQ data
  const faqs = [
    {
      question: "What is CodeYantra?",
      answer: "CodeYantra is a personalized coding platform designed for classroom environments. It allows educators to conduct coding tests, provide real-time feedback, and monitor students' performance effectively."
    },
    {
      question: "How does CodeYantra conduct personalized coding activities?",
      answer: "CodeYantra enables personalized coding activities by allowing instructors to set up customized coding tests and track individual student progress. The platform provides detailed insights and feedback to both students and teachers."
    },
    {
      question: "How does CodeYantra provide real-time feedback?",
      answer: "CodeYantra uses advanced algorithms to analyze code submissions instantly. Teachers receive real-time updates on student performance, which helps them provide timely and actionable feedback."
    },
    {
      question: "Can students compare their code with others?",
      answer: "Yes, CodeYantra allows students to compare their code with peers. This feature helps students learn from each other's coding styles and improve their own coding practices."
    },
    {
      question: "Can faculty compare code submissions between two users?",
      answer: "Absolutely. Faculty members can select two student submissions and compare them side by side to evaluate differences, understand varying approaches, and provide targeted feedback."
    },
    {
      question: "What role does AI play in CodeYantra?",
      answer: "AI in CodeYantra assists with automated code review, error detection, and suggestions for improvement. It enhances the learning experience by offering intelligent insights and recommendations."
    },
    {
      question: "How does AI help with coding error detection?",
      answer: "The AI analyzes code for common errors and patterns, providing real-time suggestions and corrections. It helps in identifying syntax issues, logic errors, and optimization opportunities."
    },
    {
      question: "How does CodeYantra maintain a competitive environment?",
      answer: "CodeYantra displays ranks and performance metrics to foster a competitive environment. Students can track their progress, compare their results with peers, and strive for continuous improvement."
    }
  ];

  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="w-full max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-300 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 text-left text-gray-900 bg-white border-b border-gray-300 hover:bg-red-50 focus:outline-none flex items-center justify-between"
              >
                <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                <span className={`text-xl ${openIndex === index ? 'text-red-600 rotate-180' : 'text-gray-600 rotate-0'} transition-transform duration-300`}>
                  ▼
                </span>
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}
                style={{ maxHeight: openIndex === index ? '1000px' : '0px' }} // Adjust maxHeight value as needed
              >
                <div className="px-6 py-4 bg-gray-100">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
