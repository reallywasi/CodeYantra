

// "use client";
// import { useState } from 'react';

// const FeedbackForm = () => {
//   const [formData, setFormData] = useState({
//     responseQuality: '',
//     userExperience: '',
//     overallSatisfaction: '',
//     comments: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/feedback', { // Correct URL
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert("Feedback submitted successfully!");

//         setFormData({
//           responseQuality: '',
//           userExperience: '',
//           overallSatisfaction: '',
//           comments: ''
//         });
//       } else {
//         alert("Error submitting feedback");
//       }
//     } catch (error) {
//       console.error('Error submitting feedback:', error);
//     }
//   };

//   return (
//     <div className="w-full max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-xl border border-gray-200">
//       <h2 className="text-4xl font-extrabold text-red-800 mb-8 text-center">Website Feedback Form</h2>
//       <form onSubmit={handleSubmit} className="space-y-8">
//         <div>
//           <label htmlFor="responseQuality" className="block text-gray-800 text-lg font-medium mb-2">Response Quality</label>
//           <select
//             id="responseQuality"
//             name="responseQuality"
//             value={formData.responseQuality}
//             onChange={handleChange}
//             className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-300"
//             required
//           >
//             <option value="" disabled>Select an option</option>
//             <option value="Excellent">Excellent</option>
//             <option value="Good">Good</option>
//             <option value="Average">Average</option>
//             <option value="Poor">Poor</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="userExperience" className="block text-gray-800 text-lg font-medium mb-2">User Experience</label>
//           <select
//             id="userExperience"
//             name="userExperience"
//             value={formData.userExperience}
//             onChange={handleChange}
//             className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-300"
//             required
//           >
//             <option value="" disabled>Select an option</option>
//             <option value="Excellent">Excellent</option>
//             <option value="Good">Good</option>
//             <option value="Average">Average</option>
//             <option value="Poor">Poor</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="overallSatisfaction" className="block text-gray-800 text-lg font-medium mb-2">Overall Satisfaction</label>
//           <select
//             id="overallSatisfaction"
//             name="overallSatisfaction"
//             value={formData.overallSatisfaction}
//             onChange={handleChange}
//             className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-300"
//             required
//           >
//             <option value="" disabled>Select an option</option>
//             <option value="Very Satisfied">Very Satisfied</option>
//             <option value="Satisfied">Satisfied</option>
//             <option value="Neutral">Neutral</option>
//             <option value="Dissatisfied">Dissatisfied</option>
//             <option value="Very Dissatisfied">Very Dissatisfied</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="comments" className="block text-gray-800 text-lg font-medium mb-2">Additional Comments</label>
//           <textarea
//             id="comments"
//             name="comments"
//             value={formData.comments}
//             onChange={handleChange}
//             rows="4"
//             className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-300"
//             placeholder="Share your thoughts..."
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full py-3 bg-red-800 text-white text-lg font-semibold rounded-md shadow-md hover:bg-red-700 transition duration-300"
//         >
//           Submit Feedback
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FeedbackForm;










































































// "use client";
// import { useState } from 'react';
// import { FiThumbsUp, FiThumbsDown, FiMessageCircle, FiStar } from 'react-icons/fi';

// const FeedbackForm = () => {
//   const [formData, setFormData] = useState({
//     responseQuality: '',
//     userExperience: '',
//     overallSatisfaction: '',
//     comments: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/feedback', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert("Feedback submitted successfully!");

//         setFormData({
//           responseQuality: '',
//           userExperience: '',
//           overallSatisfaction: '',
//           comments: ''
//         });
//       } else {
//         alert("Error submitting feedback");
//       }
//     } catch (error) {
//       console.error('Error submitting feedback:', error);
//     }
//   };

//   return (
//     <div className="w-full max-w-2xl mx-auto p-10 bg-gradient-to-b from-gray-100 to-gray-50 rounded-2xl shadow-2xl border border-gray-300">
//       <h2 className="text-4xl font-extrabold text-red-700 mb-10 text-center">
//         <FiMessageCircle className="inline mr-2 text-yellow-500" />
//         We Value Your Feedback
//       </h2>
//       <form onSubmit={handleSubmit} className="space-y-8">
//         <div>
//           <label htmlFor="responseQuality" className="block text-gray-900 text-xl font-semibold mb-3">
//             <FiThumbsUp className="inline mr-2 text-green-500" />
//             Response Quality
//           </label>
//           <select
//             id="responseQuality"
//             name="responseQuality"
//             value={formData.responseQuality}
//             onChange={handleChange}
//             className="w-full p-4 border-2 border-gray-300 rounded-xl shadow-lg focus:ring-4 focus:ring-blue-400 transition duration-300"
//             required
//           >
//             <option value="" disabled>Select an option</option>
//             <option value="Excellent">🌟 Excellent</option>
//             <option value="Good">👍 Good</option>
//             <option value="Average">😐 Average</option>
//             <option value="Poor">👎 Poor</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="userExperience" className="block text-gray-900 text-xl font-semibold mb-3">
//             <FiStar className="inline mr-2 text-yellow-500" />
//             User Experience
//           </label>
//           <select
//             id="userExperience"
//             name="userExperience"
//             value={formData.userExperience}
//             onChange={handleChange}
//             className="w-full p-4 border-2 border-gray-300 rounded-xl shadow-lg focus:ring-4 focus:ring-blue-400 transition duration-300"
//             required
//           >
//             <option value="" disabled>Select an option</option>
//             <option value="Excellent">🌟 Excellent</option>
//             <option value="Good">👍 Good</option>
//             <option value="Average">😐 Average</option>
//             <option value="Poor">👎 Poor</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="overallSatisfaction" className="block text-gray-900 text-xl font-semibold mb-3">
//             <FiThumbsDown className="inline mr-2 text-red-500" />
//             Overall Satisfaction
//           </label>
//           <select
//             id="overallSatisfaction"
//             name="overallSatisfaction"
//             value={formData.overallSatisfaction}
//             onChange={handleChange}
//             className="w-full p-4 border-2 border-gray-300 rounded-xl shadow-lg focus:ring-4 focus:ring-blue-400 transition duration-300"
//             required
//           >
//             <option value="" disabled>Select an option</option>
//             <option value="Very Satisfied">🎉 Very Satisfied</option>
//             <option value="Satisfied">😊 Satisfied</option>
//             <option value="Neutral">😐 Neutral</option>
//             <option value="Dissatisfied">😕 Dissatisfied</option>
//             <option value="Very Dissatisfied">😢 Very Dissatisfied</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="comments" className="block text-gray-900 text-xl font-semibold mb-3">
//             <FiMessageCircle className="inline mr-2 text-blue-500" />
//             Additional Comments
//           </label>
//           <textarea
//             id="comments"
//             name="comments"
//             value={formData.comments}
//             onChange={handleChange}
//             rows="4"
//             className="w-full p-4 border-2 border-gray-300 rounded-xl shadow-lg focus:ring-4 focus:ring-blue-400 transition duration-300"
//             placeholder="Share your thoughts..."
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full py-4 bg-gradient-to-r from-red-700 to-red-500 text-white text-xl font-bold rounded-full shadow-xl hover:scale-105 hover:bg-red-600 transition-transform duration-300"
//         >
//           Submit Feedback 🚀
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FeedbackForm;










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
