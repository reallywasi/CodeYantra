// // import React from 'react';

// // const testimonials = [
// //   {
// //     name: 'Athang Kulkarni',
// //     role: 'Software Engineer 3 @ Walmart',
// //     testimony: "DP and Graphs? Used to terrify me! I'd skip problems related to them without a second thought. Then I discovered Striver's series. By the end, I was tackling Recursion, DP, and Graphs with confidence, even solving problems independently. Huge thanks ...",
// //     image: 'https://randomuser.me/api/portraits/men/5.jpg'
// //   },
// //   {
// //     name: 'Gaurav Poosarla',
// //     role: 'SDE-1 @ Samsung',
// //     testimony: "With no prior knowledge of programming or DSA, the takeUforward channel was instrumental in my journey from beginner to landing my dream job as a Software Development Engineer. Their clear explanations and well-structured content made grasping crucial concepts so much easier ...",
// //     image: 'https://randomuser.me/api/portraits/men/7.jpg'
// //   },
// //   {
// //     name: 'Prajwal Shah',
// //     role: 'SWE Intern @ Deutsche Bank',
// //     testimony: "I was entirely new to the world of DSA and CP when I discovered Striver's channel. Striver's clear explanations ignited my passion for computer science, introducing me to core concepts like trees, graphs, and dynamic programming. Today, I stand as an ...",
// //     image: 'https://randomuser.me/api/portraits/men/9.jpg'
// //   },
// //   {
// //     name: 'Ananya Verma',
// //     role: 'Software Developer @ Amazon',
// //     testimony: "Striver's roadmap was a game-changer. The organized approach to DSA helped me build a strong foundation. I was able to crack complex coding interviews at top tech companies thanks to his detailed explanations and problem-solving techniques ...",
// //     image: 'https://randomuser.me/api/portraits/women/6.jpg'
// //   },
// //   {
// //     name: 'Rohit Kumar',
// //     role: 'Software Engineer @ Google',
// //     testimony: "I was struggling with competitive programming until I found takeUforward. The channel's focus on understanding rather than rote learning gave me the confidence to tackle even the hardest problems ...",
// //     image: 'https://randomuser.me/api/portraits/men/10.jpg'
// //   },
// //   {
// //     name: 'Sneha Patil',
// //     role: 'Backend Engineer @ Zomato',
// //     testimony: "Coming from a non-CS background, I was daunted by DSA and coding. Striver's step-by-step approach made it all accessible, and now I'm thriving in my role as a backend engineer ...",
// //     image: 'https://randomuser.me/api/portraits/women/8.jpg'
// //   },
// // ];

// // const Testimonials = () => {
// //   return (
// //     <div className="py-16 bg-gray-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <h2 className="text-center text-lg font-semibold text-red-600">Testimonials</h2>
// //         <p className="mt-2 text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
// //           Discover the Success Stories of Our Students
// //         </p>
// //         <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
// //           {testimonials.map((testimonial, index) => (
// //             <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
// //               <p className="text-gray-700">{testimonial.testimony}</p>
// //               <div className="mt-6 flex items-center">
// //                 <img
// //                   src={testimonial.image}
// //                   alt={`${testimonial.name}'s avatar`}
// //                   className="w-12 h-12 rounded-full mr-4"
// //                 />
// //                 <div>
// //                   <p className="text-lg font-medium text-gray-900">{testimonial.name}</p>
// //                   <p className="text-sm text-gray-500">{testimonial.role}</p>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Testimonials;



























// import React from 'react';

// const testimonials = [
//   {
//     name: 'Athang Kulkarni',
//     role: 'Software Engineer 3 @ Walmart',
//     testimony: "DP and Graphs? Used to terrify me! I'd skip problems related to them without a second thought. Then I discovered Striver's series. By the end, I was tackling Recursion, DP, and Graphs with confidence, even solving problems independently. Huge thanks ...",
//     image: 'https://randomuser.me/api/portraits/men/5.jpg'
//   },
//   {
//     name: 'Gaurav Poosarla',
//     role: 'SDE-1 @ Samsung',
//     testimony: "With no prior knowledge of programming or DSA, the takeUforward channel was instrumental in my journey from beginner to landing my dream job as a Software Development Engineer. Their clear explanations and well-structured content made grasping crucial concepts so much easier ...",
//     image: 'https://randomuser.me/api/portraits/men/7.jpg'
//   },
//   {
//     name: 'Prajwal Shah',
//     role: 'SWE Intern @ Deutsche Bank',
//     testimony: "I was entirely new to the world of DSA and CP when I discovered Striver's channel. Striver's clear explanations ignited my passion for computer science, introducing me to core concepts like trees, graphs, and dynamic programming. Today, I stand as an ...",
//     image: 'https://randomuser.me/api/portraits/men/9.jpg'
//   },
//   {
//     name: 'Ananya Verma',
//     role: 'Software Developer @ Amazon',
//     testimony: "Striver's roadmap was a game-changer. The organized approach to DSA helped me build a strong foundation. I was able to crack complex coding interviews at top tech companies thanks to his detailed explanations and problem-solving techniques ...",
//     image: 'https://randomuser.me/api/portraits/women/6.jpg'
//   },
//   {
//     name: 'Rohit Kumar',
//     role: 'Software Engineer @ Google',
//     testimony: "I was struggling with competitive programming until I found takeUforward. The channel's focus on understanding rather than rote learning gave me the confidence to tackle even the hardest problems ...",
//     image: 'https://randomuser.me/api/portraits/men/10.jpg'
//   },
//   {
//     name: 'Sneha Patil',
//     role: 'Backend Engineer @ Zomato',
//     testimony: "Coming from a non-CS background, I was daunted by DSA and coding. Striver's step-by-step approach made it all accessible, and now I'm thriving in my role as a backend engineer ...",
//     image: 'https://randomuser.me/api/portraits/women/8.jpg'
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section className="relative overflow-hidden bg-gray-50 py-16">
//       {/* Slanting Background */}
//       <div className="absolute inset-0">
//         <svg
//           className="w-full h-full"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 1200 300"
//           preserveAspectRatio="none"
//           fill="currentColor"
//         >
//           <path
//             d="M0,0 L1200,0 L1200,300 L0,300 Z"
//             className="text-gray-200"
//             transform="translate(0, 20) skewY(-6)"
//           />
//         </svg>
//       </div>
      
//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-center text-lg font-semibold text-red-600">Testimonials</h2>
//         <p className="mt-2 text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
//           Discover the Success Stories of Our Students
//         </p>
//         <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
//               <p className="text-gray-700">{testimonial.testimony}</p>
//               <div className="mt-6 flex items-center">
//                 <img
//                   src={testimonial.image}
//                   alt={`${testimonial.name}'s avatar`}
//                   className="w-12 h-12 rounded-full mr-4"
//                 />
//                 <div>
//                   <p className="text-lg font-medium text-gray-900">{testimonial.name}</p>
//                   <p className="text-sm text-gray-500">{testimonial.role}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Testimonials;










import React from 'react';

const testimonials = [
  {
    name: 'Athang Kulkarni',
    role: 'Software Engineer 3 @ Walmart',
    testimony: "DP and Graphs? Used to terrify me! I'd skip problems related to them without a second thought. Then I discovered Striver's series. By the end, I was tackling Recursion, DP, and Graphs with confidence, even solving problems independently. Huge thanks ...",
    image: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    name: 'Gaurav Poosarla',
    role: 'SDE-1 @ Samsung',
    testimony: "With no prior knowledge of programming or DSA, the takeUforward channel was instrumental in my journey from beginner to landing my dream job as a Software Development Engineer. Their clear explanations and well-structured content made grasping crucial concepts so much easier ...",
    image: 'https://randomuser.me/api/portraits/men/7.jpg'
  },
  {
    name: 'Prajwal Shah',
    role: 'SWE Intern @ Deutsche Bank',
    testimony: "I was entirely new to the world of DSA and CP when I discovered Striver's channel. Striver's clear explanations ignited my passion for computer science, introducing me to core concepts like trees, graphs, and dynamic programming. Today, I stand as an ...",
    image: 'https://randomuser.me/api/portraits/men/9.jpg'
  },
  {
    name: 'Ananya Verma',
    role: 'Software Developer @ Amazon',
    testimony: "Striver's roadmap was a game-changer. The organized approach to DSA helped me build a strong foundation. I was able to crack complex coding interviews at top tech companies thanks to his detailed explanations and problem-solving techniques ...",
    image: 'https://randomuser.me/api/portraits/women/6.jpg'
  },
  {
    name: 'Rohit Kumar',
    role: 'Software Engineer @ Google',
    testimony: "I was struggling with competitive programming until I found takeUforward. The channel's focus on understanding rather than rote learning gave me the confidence to tackle even the hardest problems ...",
    image: 'https://randomuser.me/api/portraits/men/10.jpg'
  },
  {
    name: 'Sneha Patil',
    role: 'Backend Engineer @ Zomato',
    testimony: "Coming from a non-CS background, I was daunted by DSA and coding. Striver's step-by-step approach made it all accessible, and now I'm thriving in my role as a backend engineer ...",
    image: 'https://randomuser.me/api/portraits/women/8.jpg'
  },
];

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-16">
      {/* Slanting Background */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 300"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path
            d="M0,0 L1200,0 L1200,200 L0,300 Z"
            className="text-gray-200"
            transform="skewY(-6)"
          />
        </svg>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold text-red-600">Testimonials</h2>
        <p className="mt-2 text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Discover the Success Stories of Our Students
        </p>
        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
              <p className="text-gray-700">{testimonial.testimony}</p>
              <div className="mt-6 flex items-center">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s avatar`}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="text-lg font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
