"use client"
import { signOut, useSession } from "next-auth/react";
// import Link from 'next/link'
// import React from 'react'
// import { useSession, signOut } from 'next-auth/react'
// import { UserTypeModel } from '@/utils/typescriptModel'

// const Navbar = () => {
//     // const { data } = useSession()
//     const { data } = useSession()

//     return (
//         <div className='my-5'>
//             <div className="max-w-5xl mx-auto">

//                 <nav className="border-gray-200 px-2 mb-10">
//                     <div className="container mx-auto flex flex-wrap items-center justify-between">
//                         <a href="#" className="flex">
//                             <svg className="h-10 mr-3" width="51" height="70" viewBox="0 0 51 70" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0)"><path d="M1 53H27.9022C40.6587 53 51 42.7025 51 30H24.0978C11.3412 30 1 40.2975 1 53Z" fill="#76A9FA"></path><path d="M-0.876544 32.1644L-0.876544 66.411C11.9849 66.411 22.4111 55.9847 22.4111 43.1233L22.4111 8.87674C10.1196 8.98051 0.518714 19.5571 -0.876544 32.1644Z" fill="#A4CAFE"></path><path d="M50 5H23.0978C10.3413 5 0 15.2975 0 28H26.9022C39.6588 28 50 17.7025 50 5Z" fill="#1C64F2"></path></g><defs><clipPath id="clip0"><rect width="51" height="70" fill="white"></rect></clipPath></defs></svg>
//                             <span className="self-center text-lg font-semibold whitespace-nowrap">Oslim</span>
//                         </a>
//                         <div className="flex md:order-2">
//                             <div className="relative mr-3 md:mr-0 hidden md:block">
//                                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                     <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
//                                 </div>
//                                 <input type="text" id="email-adress-icon" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2" placeholder="Search..." />
//                             </div>
//                             <button data-collapse-toggle="mobile-menu-3" type="button" className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-3" aria-expanded="false">
//                                 <span className="sr-only">Open main menu</span>
//                                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
//                                 <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
//                             </button>
//                         </div>
//                         <div className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
//                             <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
//                                 <li>
//                                     <a href="#" className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded" aria-current="page">Home</a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">About</a>
//                                 </li>
//                                 <li>
//                                     <a href="#" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Services</a>
//                                 </li>
//                                 <AuthNav />

//                             </ul>
//                         </div>
//                     </div>
//                 </nav>

//             </div>

//         </div>
//     )
// }

// export default Navbar

// const AuthNav = () => {
//     const session = useSession();
//     console.log(session)
//     const { data, status } = useSession();
//     const latestUser = data?.newUser as UserTypeModel;


//     // Placeholder signOut function
//     const signOutClick = () => {
//         // Add your sign-out logic here
//         signOut()
//     };

//     return (
//         <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
//             {status === 'unauthenticated' ? (
//                 <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
//                     <li>
//                         <Link href={'/login'} className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">
//                             Login
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href={'/register'} className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">
//                             Signup
//                         </Link>
//                     </li>
//                 </ul>
//             ) : (
//                 <li>
//                     <span onClick={signOutClick} className="text-gray-700 cursor-pointer hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">
//                         Logout
//                     </span>
//                 </li>
//             )}
//             <li>
//                 <span className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">
//                     Hi {latestUser?.firstName || 'Guest'}
//                 </span>
//             </li>
//         </ul>
//     );
// };
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <Link href="/">
                    <span className="text-white font-semibold text-xl mb-2 md:mb-0 md:mr-4">
                        EventManager
                    </span>
                </Link>
                <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                    <li>
                        <Link href="/">
                            <span className="text-white hover:text-blue-300">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/events">
                            <span className="text-white hover:text-blue-300">Events</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <span className="text-white hover:text-blue-300">About</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <span className="text-white hover:text-blue-300">Contact</span>
                        </Link>
                    </li>
                    <li>
                        <Option />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;



const Option = () => {
    const session = useSession();
    console.log(session)
    const { data, status } = useSession();
    const latestUser = data?.newUser as UserTypeModel;
    const [popUp, setpopUp] = useState(false);

    function handleClick() {
        setpopUp(() => !popUp)
    }
    // logoit

    const signOutClick = () => {
        signOut()
    };
    return (
        <div className="relative inline-block text-left">
            <div onClick={handleClick}>
                <div className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">

                    {
                        status === 'authenticated' ?
                            <p>Hello {latestUser?.firstName}</p>
                            :
                            <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                Login
                                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                </svg>
                            </button>
                    }
                </div>
            </div>

            {/* <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
            From: "transform opacity-0 scale-95"
            To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
            From: "transform opacity-100 scale-100"
            To: "transform opacity-0 scale-95"
  --> */}
            {popUp &&
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                    <div className="py-1" role="none">
                        {/* {status === 'unauthenticated' ? () */}
                        {
                            status === 'authenticated' ?
                                <button onClick={signOutClick} className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" >Sign out</button>

                                :
                                <ul>
                                    <li>
                                        <Link href={'/login'} className="text-gray-700 block px-4 py-2 text-sm">
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={'/register'} className="text-gray-700 block px-4 py-2 text-sm">
                                            Signup
                                        </Link>
                                    </li>
                                </ul>
                        }


                    </div>
                </div>
            }
        </div>

    )
}
