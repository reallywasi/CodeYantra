// // "use client";

// // import Link from "next/link";
// // import { signIn, signOut, useSession } from "next-auth/react";

// // export default function Navbar() {
// //   const { status } = useSession();
// //   return (
// //     <div className="p-4 flex justify-between items-center shadow-md">
// //       <Link className="font-bold text-lg text-blue-700" href={"/"}>
// //         GitBit
// //       </Link>
// //       {status === "authenticated" ? (
// //         <button
// //           onClick={() => signOut()}
// //           className="bg-slate-900 text-white px-6 py-2 rounded-md"
// //         >
// //           Sign Out
// //         </button>
// //       ) : (
// //         <button
// //           onClick={() => signIn("google")}
// //           className="bg-slate-900 text-white px-6 py-2 rounded-md"
// //         >
// //           Sign In
// //         </button>
// //       )}
// //     </div>
// //   );
// // }






































































// // "use client";

// // import Link from "next/link";
// // import { signIn, signOut, useSession } from "next-auth/react";
// // import { useState } from "react";
// // import { AiOutlineMenu } from "react-icons/ai";

// // export default function Navbar() {
// //   const { status } = useSession();
// //   const [isOpen, setIsOpen] = useState(false);

// //   const toggleMenu = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   return (
// //     <div className="p-4 flex justify-between items-center shadow-md bg-white">
// //       <Link className="font-bold text-lg text-blue-700" href={"/"}>
// //         GitBit
// //       </Link>

// //       {/* Desktop Navigation */}
// //       <div className="hidden md:flex space-x-6 items-center">
// //         {status === "authenticated" && (
// //           <>
// //             <Link href="/profile" className="text-gray-700 hover:text-blue-700">
// //               Profile
// //             </Link>
// //             <Link href="/tests" className="text-gray-700 hover:text-blue-700">
// //               Tests
// //             </Link>
// //             <Link href="/results" className="text-gray-700 hover:text-blue-700">
// //               Results
// //             </Link>
// //             <Link href="/upcoming-tests" className="text-gray-700 hover:text-blue-700">
// //               Upcoming Tests
// //             </Link>
// //             <Link href="/rankings" className="text-gray-700 hover:text-blue-700">
// //               Rankings
// //             </Link>
// //             <button
// //               onClick={() => signOut()}
// //               className="bg-slate-900 text-white px-4 py-2 rounded-md"
// //             >
// //               Sign Out
// //             </button>
// //           </>
// //         )}

// //         {status !== "authenticated" && (
// //           <button
// //             onClick={() => signIn("google")}
// //             className="bg-slate-900 text-white px-4 py-2 rounded-md"
// //           >
// //             Sign In
// //           </button>
// //         )}
// //       </div>

// //       {/* Mobile Menu Icon */}
// //       <div className="md:hidden flex items-center">
// //         <button onClick={toggleMenu} className="text-slate-900">
// //           <AiOutlineMenu size={24} />
// //         </button>
// //       </div>

// //       {/* Mobile Navigation Menu */}
// //       {isOpen && (
// //         <div className="md:hidden fixed inset-0 bg-white flex flex-col justify-center items-center z-10">
// //           <ul className="flex flex-col p-4 space-y-6">
// //             {status === "authenticated" && (
// //               <>
// //                 <li>
// //                   <Link
// //                     href="/profile"
// //                     className="text-gray-700 text-xl hover:text-blue-700"
// //                     onClick={toggleMenu}
// //                   >
// //                     Profile
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link
// //                     href="/tests"
// //                     className="text-gray-700 text-xl hover:text-blue-700"
// //                     onClick={toggleMenu}
// //                   >
// //                     Tests
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link
// //                     href="/results"
// //                     className="text-gray-700 text-xl hover:text-blue-700"
// //                     onClick={toggleMenu}
// //                   >
// //                     Results
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link
// //                     href="/upcoming-tests"
// //                     className="text-gray-700 text-xl hover:text-blue-700"
// //                     onClick={toggleMenu}
// //                   >
// //                     Upcoming Tests
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link
// //                     href="/rankings"
// //                     className="text-gray-700 text-xl hover:text-blue-700"
// //                     onClick={toggleMenu}
// //                   >
// //                     Rankings
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <button
// //                     onClick={() => {
// //                       signOut();
// //                       toggleMenu();
// //                     }}
// //                     className="bg-slate-900 text-white text-xl px-4 py-2 rounded-md w-full"
// //                   >
// //                     Sign Out
// //                   </button>
// //                 </li>
// //               </>
// //             )}

// //             {status !== "authenticated" && (
// //               <li>
// //                 <button
// //                   onClick={() => {
// //                     signIn("google");
// //                     toggleMenu();
// //                   }}
// //                   className="bg-slate-900 text-white text-xl px-4 py-2 rounded-md w-full"
// //                 >
// //                   Sign In
// //                 </button>
// //               </li>
// //             )}
// //           </ul>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }


















































// "use client";

// import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";
// import { useState } from "react";
// import { AiOutlineMenu } from "react-icons/ai";

// export default function Navbar() {
//   const { status } = useSession();
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="relative p-4 flex justify-between items-center shadow-md bg-white z-30">
//       <Link className="font-bold text-lg text-red-600" href={"/"}>
//         CodeYantra
//       </Link>

//       {/* Desktop Navigation */}
//       <div className="hidden md:flex space-x-6 items-center">
//         {status === "authenticated" && (
//           <>
//             <Link href="/studentDashboard" className="text-gray-700 hover:text-blue-700">
//               Profile
//             </Link>
//             <Link href="/studentDashboard/upcoming" className="text-gray-700 hover:text-blue-700">
//               Upcoming Observations
//             </Link>
//             <Link href="/leaderboard" className="text-gray-700 hover:text-blue-700">
//               Results
//             </Link>
     
//             <Link href="/leaderboard" className="text-gray-700 hover:text-blue-700">
//               Rankings
//             </Link>
//             <button
//               onClick={() => signOut()}
//               className="bg-red-600 text-white px-4 py-2 rounded-md"
//             >
//               Sign Out
//             </button>
//           </>
//         )}

//         {status !== "authenticated" && (
//           <button
//             onClick={() => signIn("google")}
//             className="bg-slate-900 text-white px-4 py-2 rounded-md"
//           >
//             Sign In
//           </button>
//         )}
//       </div>

//       {/* Mobile Menu Icon */}
//       <div className="md:hidden flex items-center z-40">
//         <button onClick={toggleMenu} className="text-slate-900">
//           <AiOutlineMenu size={24} />
//         </button>
//       </div>

//       {/* Overlay for Mobile Menu */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={toggleMenu}></div>
//       )}

//       {/* Mobile Navigation Menu */}
//       {isOpen && (
//         <div className="fixed top-0 right-0 h-full bg-white w-1/2 shadow-lg z-30 flex flex-col p-4">
//           <div className="flex justify-end mb-4">
//             <button onClick={toggleMenu} className="text-slate-900">
//               <AiOutlineMenu size={24} />
//             </button>
//           </div>
//           <ul className="flex flex-col space-y-6">
//             {status === "authenticated" && (
//               <>
//                 <li>
//                   <Link
//                     href="/profile"
//                     className="text-gray-700 text-xl hover:text-blue-700 block px-4 py-2 rounded-md"
//                     onClick={toggleMenu}
//                   >
//                     Profile
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/tests"
//                     className="text-gray-700 text-xl hover:text-blue-700 block px-4 py-2 rounded-md"
//                     onClick={toggleMenu}
//                   >
//                     Tests
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/results"
//                     className="text-gray-700 text-xl hover:text-blue-700 block px-4 py-2 rounded-md"
//                     onClick={toggleMenu}
//                   >
//                     Results
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/upcomingtests"
//                     className="text-gray-700 text-xl hover:text-blue-700 block px-4 py-2 rounded-md"
//                     onClick={toggleMenu}
//                   >
//                     Upcoming Tests
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="/rankings"
//                     className="text-gray-700 text-xl hover:text-blue-700 block px-4 py-2 rounded-md"
//                     onClick={toggleMenu}
//                   >
//                     Rankings
//                   </Link>
//                 </li>
//                 <li>
//                   <button
//                     onClick={() => {
//                       signOut();
//                       toggleMenu();
//                     }}
//                     className="bg-slate-900 text-white text-xl px-4 py-2 rounded-md w-full"
//                   >
//                     Sign Out
//                   </button>
//                 </li>
//               </>
//             )}

//             {status !== "authenticated" && (
//               <li>
//                 <button
//                   onClick={() => {
//                     signIn("google");
//                     toggleMenu();
//                   }}
//                   className="bg-slate-900 text-white text-xl px-4 py-2 rounded-md w-full"
//                 >
//                   Sign In
//                 </button>
//               </li>
//             )}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }










































"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineUser, AiOutlineTeam } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";

export default function Navbar() {
  const { status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative p-4 flex justify-between items-center shadow-md bg-white z-30">
      <Link className="font-bold text-lg text-red-900" href={"/"}>
        CodeYantra
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6 items-center">
        {status === "authenticated" && (
          <>
            <Link href="/studentDashboard" className="text-gray-700 hover:text-red-800">
              Profile
            </Link>
            <Link href="/studentDashboard/upcoming" className="text-gray-700 hover:text-red-800">
              Upcoming Observations
            </Link>
            <Link href="/leaderboard" className="text-gray-700 hover:text-red-800">
              Results
            </Link>
            <Link href="/leaderboard" className="text-gray-700 hover:text-red-800">
              Rankings
            </Link>
            <button
              onClick={() => signOut()}
              className="bg-red-800 text-white px-4 py-2 rounded-md hover:bg-red-900 transition-colors duration-200"
            >
              Sign Out
            </button>
          </>
        )}

        {status !== "authenticated" && (
          <>
            <button
              onClick={toggleModal}
              className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-red-900 transition-colors duration-200"
            >
              Sign In
            </button>

            {/* Sign In Modal */}
            {isModalOpen && (
              <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg p-8 w-96 transform transition-all duration-300 ease-out scale-95">
                  <h2 className="text-3xl font-semibold text-red-900 text-center mb-4">
                    Welcome to CodeYantra
                  </h2>
                  <p className="text-center mb-6 text-gray-600">
                    <FaQuoteLeft className="inline-block text-red-800 mr-2" />
                    “Code is like humor. When you have to explain it, it’s bad.”
                  </p>
                  <div className="flex flex-col space-y-4 items-center">
                    <button
                      onClick={() => {
                        signIn("google");
                        toggleModal();
                      }}
                      className="relative flex items-center justify-center bg-red-800 text-white py-2 px-4 rounded-full w-24 h-24 hover:bg-red-900 transition-all duration-200 shadow-md"
                    >
                      <div className="absolute inset-0 m-auto w-16 h-16 bg-white rounded-lg flex items-center justify-center border-2 border-red-900">
                        <AiOutlineUser className="text-red-900" size={32} />
                      </div>
                    </button>
                    <span className="text-sm text-red-900 font-semibold mt-2">
                      Continue as Faculty
                    </span>
                    
                    <button
                      onClick={() => {
                        signIn("google");
                        toggleModal();
                      }}
                      className="relative flex items-center justify-center bg-gray-800 text-white py-2 px-4 rounded-full w-24 h-24 hover:bg-red-900 transition-all duration-200 shadow-md"
                    >
                      <div className="absolute inset-0 m-auto w-16 h-16 bg-white rounded-lg flex items-center justify-center border-2 border-gray-900">
                        <AiOutlineTeam className="text-gray-900" size={32} />
                      </div>
                    </button>
                    <span className="text-sm text-gray-900 font-semibold mt-2">
                      Continue as Member
                    </span>
                  </div>
                  <button
                    onClick={toggleModal}
                    className="mt-6 w-full text-gray-500 hover:text-gray-700 text-center"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center z-40">
        <button onClick={toggleMenu} className="text-slate-900">
          <AiOutlineMenu size={24} />
        </button>
      </div>

      {/* Overlay for Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={toggleMenu}></div>
      )}

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed top-0 right-0 h-full bg-white w-1/2 shadow-lg z-30 flex flex-col p-4 transition-transform transform duration-300 ease-out">
          <div className="flex justify-end mb-4">
            <button onClick={toggleMenu} className="text-slate-900">
              <AiOutlineMenu size={24} />
            </button>
          </div>
          <ul className="flex flex-col space-y-6">
            {status === "authenticated" && (
              <>
                <li>
                  <Link
                    href="/profile"
                    className="text-gray-700 text-xl hover:text-red-800 block px-4 py-2 rounded-md"
                    onClick={toggleMenu}
                  >
                    Profile
                  </Link>
                </li>
                {/* Other authenticated links */}
                <li>
                  <button
                    onClick={() => {
                      signOut({ callbackUrl: window.location.origin });
                      toggleMenu();
                    }}
                    className="bg-gray-800 text-white text-xl px-4 py-2 rounded-md w-full hover:bg-red-900 transition-colors duration-200"
                  >
                    Sign Out
                  </button>
                </li>
              </>
            )}

            {status !== "authenticated" && (
              <li>
                <button
                  onClick={() => {
                    signIn("google");
                    toggleMenu();
                  }}
                  className="bg-gray-800 text-white text-xl px-4 py-2 rounded-md w-full hover:bg-red-900 transition-colors duration-200"
                >
                  Sign In
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
