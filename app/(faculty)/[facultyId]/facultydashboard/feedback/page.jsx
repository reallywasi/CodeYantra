"use client";
import { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    responseQuality: '',
    userExperience: '',
    designSatisfaction: '',
    overallSatisfaction: '',
    comments: ''
  });

  const handleEmojiClick = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

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
          designSatisfaction: '',
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
    <div className="flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-6 relative overflow-hidden">
      
      {/* Enhanced Background SVG */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-20 -z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <circle cx="15" cy="15" r="10" fill="#ff6b6b" />
        <circle cx="40" cy="40" r="15" fill="#ff6b6b" />
        <circle cx="80" cy="80" r="20" fill="#ff6b6b" />
      </svg>
      
      <div className="flex flex-col w-full max-w-6xl bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200">
        
        {/* Call to Action */}
        <div className="w-full bg-red-500 p-4 text-center text-white rounded-t-lg shadow-lg">
          <p className="text-lg font-semibold italic">"We value your feedback! Help us improve by sharing your experience."</p>
        </div>
        
        {/* Title */}
        <div className="text-center mt-4 mb-6">
          <h2 className="text-4xl font-bold">
            <span className="text-red-600">Code</span><span className="text-black">Yantra</span> Feedback
          </h2>
          <p className="text-gray-600 text-md mt-2">Please fill out the form below to let us know your thoughts.</p>
        </div>
        
        {/* Main Content */}
        <div className="flex">
          
          {/* Left Section with Full-Width Image */}
          <div className="w-1/3 flex items-center justify-center p-2 bg-gtray-200">
            <img
              src="https://t3.ftcdn.net/jpg/06/60/44/92/360_F_660449277_KTdoBU1B1gWjwjKPlsCwWgnxzOoorB5b.jpg"
              alt="Programmer Cartoon"
              className="rounded-lg  w-full h-auto"
            />
          </div>
          
          {/* Right Section with Scrollable Form */}
          <div className="w-2/3 p-6">
            <div className="max-h-[50vh] overflow-y-auto"> {/* Adjusted height */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Response Quality with Emojis */}
                <div>
                  <label className="block text-gray-800 font-semibold text-lg mb-2 text-center">How would you rate our Response Quality?</label>
                  <div className="flex justify-around space-x-4 border-b-2 border-red-100 ">
                    {['😊', '🙂', '😐', '😞'].map((emoji, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleEmojiClick('responseQuality', emoji)}
                        className={`w-16 h-16 text-3xl flex items-center justify-center rounded-full shadow-lg transition-transform duration-200 transform hover:scale-110 ${formData.responseQuality === emoji ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>

                {/* User Experience with Emojis */}
                <div>
                  <label className="block text-gray-800 font-semibold text-lg mb-2 text-center">How was your User Experience?</label>
                  <div className="flex justify-around space-x-4  border-b-2 border-red-100 ">
                    {['👍', '🙂', '😐', '👎'].map((emoji, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleEmojiClick('userExperience', emoji)}
                        className={`w-16 h-16 text-3xl flex items-center justify-center rounded-full shadow-lg transition-transform duration-200 transform hover:scale-110 ${formData.userExperience === emoji ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Design Satisfaction with Emojis */}
                <div>
                  <label className="block text-gray-800 font-semibold text-lg mb-2 text-center">Are you satisfied with the Design?</label>
                  <div className="flex justify-around space-x-4  border-b-2 border-red-100 ">
                    {['😍', '🙂', '😐', '😖'].map((emoji, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleEmojiClick('designSatisfaction', emoji)}
                        className={`w-16 h-16 text-3xl flex items-center justify-center rounded-full shadow-lg transition-transform duration-200 transform hover:scale-110 ${formData.designSatisfaction === emoji ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Overall Satisfaction with Emojis */}
                <div>
                  <label className="block text-gray-800 font-semibold text-lg mb-2 text-center">Overall Satisfaction</label>
                  <div className="flex justify-around space-x-4  border-b-2 border-red-100 ">
                    {['😊', '🙂', '😐', '😞'].map((emoji, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => handleEmojiClick('overallSatisfaction', emoji)}
                        className={`w-16 h-16 text-3xl flex items-center justify-center rounded-full shadow-lg transition-transform duration-200 transform hover:scale-110 ${formData.overallSatisfaction === emoji ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Additional Comments */}
                <div>
                  <label htmlFor="comments" className="block text-gray-800 font-semibold text-lg mb-2 text-center">Additional Comments</label>
                  <textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    rows="4"
                    className="w-full p-3 my-2  border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 shadow-md transition-all duration-300"
                    placeholder="Share your thoughts..."
                  />
                </div>
              </form>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 shadow-md hover:shadow-lg transition-all duration-300"
              onClick={handleSubmit}
            >
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
