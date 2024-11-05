

"use client";

import { FaCalendarAlt, FaClock, FaStar, FaMapMarkerAlt } from "react-icons/fa";

const tests = [
  {
    id: 1,
    name: "Weekly Assessment 3",
    date: "2024-08-30",
    topic: "Arrays and Strings",
    time: "2:00 PM",
    marks: 50,
    location: "Room 201",
    description:
      "This test covers fundamental concepts of arrays and strings, including operations like traversal, insertion, deletion, and manipulation. Prepare to solve problems related to array rotations, substring searches, and string formatting.",
  },
  {
    id: 2,
    name: "Weekly Assessment 4",
    date: "2024-09-02",
    topic: "Linked Lists",
    time: "11:00 AM",
    marks: 40,
    location: "Room 302",
    description:
      "Assessment on linked lists, including singly linked lists, doubly linked lists, and circular linked lists. You'll need to demonstrate your understanding of list traversal, insertion, deletion, and reversal operations. Be ready to solve problems involving merge and intersection of lists.",
  },
  {
    id: 3,
    name: "Monthly Assessment 1",
    date: "2024-09-05",
    topic: "Stacks and Queues",
    time: "1:00 PM",
    marks: 60,
    location: "Room 404",
    description:
      "Test focusing on stacks and queues, covering operations such as push, pop, enqueue, and dequeue. You'll be expected to solve problems related to balanced parentheses, infix to postfix conversion, and queue implementations using stacks.",
  },
  {
    id: 4,
    name: "Monthly Assessment 2",
    date: "2024-09-10",
    topic: "Trees and Graphs",
    time: "10:00 AM",
    marks: 45,
    location: "Room 105",
    description:
      "Examination on tree and graph data structures, including binary trees, binary search trees, AVL trees, and graph traversal techniques like BFS and DFS. Problems may involve tree traversals, shortest path algorithms, and graph coloring.",
  },
  {
    id: 5,
    name: "Bi-weekly Assessment 1",
    date: "2024-09-12",
    topic: "Dynamic Programming",
    time: "3:00 PM",
    marks: 55,
    location: "Room 207",
    description:
      "Test on dynamic programming concepts such as memoization and tabulation. Prepare to tackle problems that require optimization of recursive solutions, including those involving the knapsack problem, longest common subsequence, and matrix chain multiplication.",
  },
];

export default function TestPage() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Upcoming Observations & Assessments</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tests.map((test) => (
          <div
            key={test.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <div className="p-6">
              <div className="text-xl font-bold mb-4 text-blue-700">{test.name}</div>
              <div className="flex items-center mb-4">
                <FaCalendarAlt className="text-blue-500 mr-3" size={24} />
                <span className="text-lg font-semibold">{test.date}</span>
              </div>
              <div className="flex items-center mb-4">
                <FaClock className="text-yellow-500 mr-3" size={24} />
                <span className="text-lg font-semibold">{test.time}</span>
              </div>
              <div className="flex items-center mb-4">
                <FaStar className="text-green-500 mr-3" size={24} />
                <span className="text-lg font-semibold">{test.marks} Marks</span>
              </div>
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-red-500 mr-3" size={24} />
                <span className="text-lg font-semibold">{test.location}</span>
              </div>
              <div className="text-lg font-semibold mb-2">{test.topic}</div>
              <p className="text-gray-700">{test.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
