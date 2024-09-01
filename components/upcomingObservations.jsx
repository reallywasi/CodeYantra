"use client"
// import { useState, useEffect } from 'react';
// import Link from 'next/link';

// const sampleData = [
//   {
//     name: 'DAA',
//     topics: 'Arrays, Sorting Algorithms',
//     date: '2024-09-15',
//     time: '10:00 AM',
//     link: '/observations/daa'
//   },
//   {
//     name: 'AIML',
//     topics: 'Machine Learning, Neural Networks',
//     date: '2024-09-16',
//     time: '2:00 PM',
//     link: '/observations/aiml'
//   },
//   {
//     name: 'b1 LinkedList',
//     topics: 'Linked Lists, Graphs',
//     date: '2024-09-18',
//     time: '11:00 AM',
//     link: '/observations/b1-linkedlist'
//   }
// ];

// const UpcomingObservations = () => {
//   const [currentDateTime, setCurrentDateTime] = useState(new Date());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentDateTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const isLinkActive = (observationDate, observationTime) => {
//     const observationDateTime = new Date(`${observationDate} ${observationTime}`);
//     return currentDateTime >= observationDateTime;
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
//       <h2 className="text-3xl font-bold text-gray-900 mb-6">Upcoming Observations</h2>
//       <ul className="space-y-4">
//         {sampleData.map((obs, index) => (
//           <li key={index} className="p-4 bg-gray-100 rounded-md shadow-sm">
//             <h3 className="text-xl font-semibold text-gray-800">{obs.name}</h3>
//             <p className="text-gray-600">Topics: {obs.topics}</p>
//             <p className="text-gray-600">Date: {obs.date}</p>
//             <p className="text-gray-600">Time: {obs.time}</p>
//             {isLinkActive(obs.date, obs.time) ? (
//               <Link href={obs.link}>
//                 <a className="text-blue-600 hover:underline">View Details</a>
//               </Link>
//             ) : (
//               <span className="text-gray-400">Link will be available at scheduled time</span>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UpcomingObservations;






























import { useState, useEffect } from 'react';
import Link from 'next/link';

const sampleData = [
  {
    name: 'DAA',
    topics: 'Arrays, Sorting Algorithms',
    date: '2024-09-15',
    time: '10:00 AM',
    link: '/observations/daa'
  },
  {
    name: 'AIML',
    topics: 'Machine Learning, Neural Networks',
    date: '2024-09-16',
    time: '2:00 PM',
    link: '/observations/aiml'
  },
  {
    name: 'b1 LinkedList',
    topics: 'Linked Lists, Graphs',
    date: '2024-09-18',
    time: '11:00 AM',
    link: '/observations/b1-linkedlist'
  }
];

const UpcomingObservations = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isLinkActive = (observationDate, observationTime) => {
    const observationDateTime = new Date(`${observationDate} ${observationTime}`);
    return currentDateTime >= observationDateTime;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      <h2 className="text-4xl font-bold text-blue-900 mb-6 text-center">Upcoming Observations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {sampleData.map((obs, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-semibold text-red-800 mb-2">{obs.name}</h3>
            <p className="text-gray-700 mb-1"><strong>Topics:</strong> {obs.topics}</p>
            <p className="text-gray-700 mb-1"><strong>Date:</strong> {obs.date}</p>
            <p className="text-gray-700 mb-4"><strong>Time:</strong> {obs.time}</p>
            {isLinkActive(obs.date, obs.time) ? (
              <Link href={obs.link}>
                <a className="text-blue-900 hover:underline font-semibold">View Details</a>
              </Link>
            ) : (
              <span className="text-gray-400">Link will be available at scheduled time</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingObservations;
