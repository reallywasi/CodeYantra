// components/RankingList.js
import React from 'react';

const RankingList = () => {
  // Hardcoded array of Indian users
  const users = [
    { name: 'Aarav Patel', batch: 'Batch A', ranking: 1 },
    { name: 'Vihaan Sharma', batch: 'Batch B', ranking: 2 },
    { name: 'Aadhya Gupta', batch: 'Batch A', ranking: 3 },
    { name: 'Vivaan Kumar', batch: 'Batch C', ranking: 4 },
    { name: 'Ishita Verma', batch: 'Batch B', ranking: 5 },
    { name: 'Reyansh Reddy', batch: 'Batch A', ranking: 6 },
    { name: 'Ananya Rao', batch: 'Batch C', ranking: 7 },
    { name: 'Arjun Mehta', batch: 'Batch B', ranking: 8 },
    { name: 'Saanvi Joshi', batch: 'Batch A', ranking: 9 },
    { name: 'Rohan Naidu', batch: 'Batch C', ranking: 10 },
    { name: 'Mira Singh', batch: 'Batch B', ranking: 11 },
    { name: 'Karan Agarwal', batch: 'Batch A', ranking: 12 },
    { name: 'Aisha Khan', batch: 'Batch C', ranking: 13 },
    { name: 'Aditya Nair', batch: 'Batch B', ranking: 14 },
    { name: 'Sneha Patel', batch: 'Batch A', ranking: 15 },
    { name: 'Kabir Saxena', batch: 'Batch C', ranking: 16 },
    { name: 'Ishaan Choudhury', batch: 'Batch B', ranking: 17 },
    { name: 'Meera Kapoor', batch: 'Batch A', ranking: 18 },
    { name: 'Ravi Prasad', batch: 'Batch C', ranking: 19 },
    { name: 'Naina Sharma', batch: 'Batch B', ranking: 20 },
  ];

  // Determine the row color based on ranking
  const getRowColor = (ranking) => {
    if (ranking <= 5) return 'bg-green-100';
    if (ranking === users.length) return 'bg-red-100';
    return 'bg-blue-100';
  };

  return (
    <div className="container mx-auto p-6">
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Batch
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ranking
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-200 ${getRowColor(user.ranking)}`}
              >
                <td className="py-4 px-6 text-sm font-medium text-gray-900">{user.name}</td>
                <td className="py-4 px-6 text-sm text-gray-500">{user.batch}</td>
                <td className="py-4 px-6 text-sm text-gray-500">{user.ranking}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RankingList;
