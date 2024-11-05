"use client"

import { useState } from 'react';
import { HomeIcon } from '@heroicons/react/24/solid'; // Update the import path for Heroicons v2

const codeSnippets = [
  {
    id: 1,
    user: 'Aarav',
    code: `const twoSum = (nums, target) => {
      const map = new Map();
      for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
          return [map.get(complement), i];
        }
        map.set(nums[i], i);
      }
    }`,
    comments: [
      { user: 'Riya', text: 'Great implementation!' },
      { user: 'Ishaan', text: 'I love the use of Map here.' },
    ],
  },
  {
    id: 2,
    user: 'Vivaan',
    code: `const reverseString = str => {
      return str.split('').reverse().join('');
    }`,
    comments: [
      { user: 'Aarav', text: 'Simple and effective.' },
      { user: 'Meera', text: 'I would add some edge cases.' },
    ],
  },
  {
    id: 3,
    user: 'Anaya',
    code: `const factorial = n => {
      if (n <= 1) return 1;
      return n * factorial(n - 1);
    }`,
    comments: [
      { user: 'Vivaan', text: 'Recursive function, nice!' },
      { user: 'Riya', text: 'Make sure to handle negative numbers.' },
    ],
  },
  {
    id: 4,
    user: 'Kabir',
    code: `const isPalindrome = str => {
      return str === str.split('').reverse().join('');
    }`,
    comments: [
      { user: 'Anaya', text: 'Clever solution!' },
      { user: 'Ishaan', text: 'I’d suggest using regex for this.' },
    ],
  },
  {
    id: 5,
    user: 'Diya',
    code: `const fibonacci = n => {
      const fib = [0, 1];
      for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
      }
      return fib;
    }`,
    comments: [
      { user: 'Aarav', text: 'Good iteration method!' },
      { user: 'Kabir', text: 'Consider using memoization.' },
    ],
  },
];

export default function Home() {
  const [userComments, setUserComments] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [userSearch, setUserSearch] = useState('');
  const [codeSearch, setCodeSearch] = useState('');

  const handleCommentSubmit = (id) => {
    if (!userComments.trim()) return;

    const updatedSnippets = codeSnippets.map((snippet) => {
      if (snippet.id === id) {
        return {
          ...snippet,
          comments: [...snippet.comments, { user: 'You', text: userComments }],
        };
      }
      return snippet;
    });

    setUserComments('');
    alert('Comment added!'); // Temporary alert for adding a comment
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setShowSidebar(false); // Close sidebar when a user is clicked
  };

  const filteredSnippets = codeSnippets.filter(snippet =>
    snippet.code.toLowerCase().includes(codeSearch.toLowerCase())
  );

  const filteredUsers = codeSnippets.filter(snippet =>
    snippet.user.toLowerCase().includes(userSearch.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar */}
      {showSidebar && (
        <div className="fixed left-0 top-0 w-1/4 h-full bg-white shadow-lg z-50 transition-transform transform translate-x-0">
          <div className="flex justify-between items-center p-4 bg-red-900 text-white">
            <h2 className="text-xl font-bold">Users</h2>
            <button
              onClick={() => setShowSidebar(false)}
              className="text-white hover:text-gray-300"
            >
              &times;
            </button>
          </div>
          <div className="p-4">
            <input
              type="text"
              placeholder="Search Users..."
              value={userSearch}
              onChange={(e) => setUserSearch(e.target.value)}
              className="p-2 border rounded-lg w-full border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <ul className="max-h-60 overflow-y-auto">
              {filteredUsers.map((snippet, index) => (
                <li
                  key={snippet.id}
                  onClick={() => handleUserClick(snippet.user)}
                  className={`cursor-pointer py-2 rounded transition ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
                >
                  <span className="font-semibold">{snippet.user}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">Code Sharing Platform</h1>
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Search Code..."
            value={codeSearch}
            onChange={(e) => setCodeSearch(e.target.value)}
            className="p-2 border rounded-lg border-gray-300 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <div>
            
          </div>
          <button
            onClick={() => setShowSidebar(true)}
            className="bg-red-900 text-white px-4 py-2 rounded-md shadow hover:bg-red-800 transition"
          >
            View Users
          </button>
          
        </div>

        {/* Home Page Button with Icon */}
      

        {/* Display Selected User's Code or All Codes */}
        {selectedUser ? (
          filteredUsers
            .filter((snippet) => snippet.user === selectedUser)
            .map(({ id, code, comments }) => (
              <div key={id} className="bg-white rounded-xl shadow-lg p-6 mb-4">
                <h2 className="text-xl font-semibold text-blue-800">{selectedUser}'s Code</h2>
                <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{code}</code>
                </pre>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-700">Comments</h3>
                  {comments.map((comment, index) => (
                    <div key={index} className="chat chat-start mb-2">
                      <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                          <img
                            alt="User Avatar"
                            src="https://via.placeholder.com/50"
                          />
                        </div>
                      </div>
                      <div className="chat-bubble bg-blue-900 rounded-lg p-3">
                        <strong>{comment.user}: </strong>{comment.text}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex mt-4">
                  <input
                    type="text"
                    value={userComments}
                    onChange={(e) => setUserComments(e.target.value)}
                    placeholder="Add a comment..."
                    className="flex-1 p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <button
                    onClick={() => handleCommentSubmit(id)}
                    className="bg-blue-900 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-800 transition ml-2"
                  >
                    Post
                  </button>
                </div>
              </div>
            ))
        ) : (
          // Display all code snippets by default
          <div>
            {filteredSnippets.map(({ id, user, code, comments }, index) => (
              <div key={id} className={`bg-white rounded-xl shadow-lg p-6 mb-4 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                <h2 className="text-xl font-extrabold text-red-900">{user}</h2>
                <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                  <code>{code}</code>
                </pre>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-700">Comments</h3>
                  {comments.map((comment, index) => (
                    <div key={index} className="chat chat-start mb-2">
                      <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                          <img
                            alt="User Avatar"
                            src="https://via.placeholder.com/50"
                          />
                        </div>
                      </div>
                      <div className="chat-bubble bg-blue-900 rounded-lg p-3">
                        <strong className='text-red-400'>{comment.user}: </strong>{comment.text}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex mt-4">
                  <input
                    type="text"
                    value={userComments}
                    onChange={(e) => setUserComments(e.target.value)}
                    placeholder="Add a comment..."
                    className="flex-1 p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <button
                    onClick={() => handleCommentSubmit(id)}
                    className="bg-blue-900 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-800 transition ml-2"
                  >
                    Post
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
