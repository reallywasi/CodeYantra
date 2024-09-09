"use client";
import { useState } from 'react';
import { FiMessageCircle } from 'react-icons/fi';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    responseQuality: '',
    userExperience: '',
    overallSatisfaction: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Feedback submitted successfully!");

        setFormData({
          responseQuality: '',
          userExperience: '',
          overallSatisfaction: '',
          comments: ''
        });
      } else {
        alert("Error submitting feedback");
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-10 bg-white border border-gray-300 shadow-md">
      <h2 className="text-3xl font-bold text-red-800 mb-8 text-center uppercase tracking-wide">
        <FiMessageCircle className="inline-block mr-2 text-gray-500" />
        CodeYantra's Feedback
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="responseQuality" className="block text-gray-700 font-semibold text-sm uppercase mb-2">Response Quality</label>
          <select
            id="responseQuality"
            name="responseQuality"
            value={formData.responseQuality}
            onChange={handleChange}
            className="w-full p-3 border border-gray-400 bg-gray-100 text-gray-700 focus:outline-none focus:border-blue-500 transition-colors"
            required
          >
            <option value="" disabled>Select an option</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="Poor">Poor</option>
          </select>
        </div>
        <div>
          <label htmlFor="userExperience" className="block text-gray-700 font-semibold text-sm uppercase mb-2">User Experience</label>
          <select
            id="userExperience"
            name="userExperience"
            value={formData.userExperience}
            onChange={handleChange}
            className="w-full p-3 border border-gray-400 bg-gray-100 text-gray-700 focus:outline-none focus:border-blue-500 transition-colors"
            required
          >
            <option value="" disabled>Select an option</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="Poor">Poor</option>
          </select>
        </div>
        <div>
          <label htmlFor="overallSatisfaction" className="block text-gray-700 font-semibold text-sm uppercase mb-2">Overall Satisfaction</label>
          <select
            id="overallSatisfaction"
            name="overallSatisfaction"
            value={formData.overallSatisfaction}
            onChange={handleChange}
            className="w-full p-3 border border-gray-400 bg-gray-100 text-gray-700 focus:outline-none focus:border-blue-500 transition-colors"
            required
          >
            <option value="" disabled>Select an option</option>
            <option value="Very Satisfied">Very Satisfied</option>
            <option value="Satisfied">Satisfied</option>
            <option value="Neutral">Neutral</option>
            <option value="Dissatisfied">Dissatisfied</option>
            <option value="Very Dissatisfied">Very Dissatisfied</option>
          </select>
        </div>
        <div>
          <label htmlFor="comments" className="block text-gray-700 font-semibold text-sm uppercase mb-2">Additional Comments</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 border border-gray-400 bg-gray-100 text-gray-700 focus:outline-none focus:border-blue-500 transition-colors"
            placeholder="Share your thoughts..."
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-red-800 text-white text-sm font-semibold uppercase tracking-wide border-none shadow-none focus:outline-none hover:bg-red-700 transition-all duration-300"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
