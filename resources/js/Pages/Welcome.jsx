import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';
export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [navbar, setNavbar] = useState(false);
    return (
        <>
            <Head title="Welcome" />
            {auth.user ? (
                <Link
                    href={route('dashboard')}
                    className="  px-4 py-2 rounded-md w-full bg-blue-400 shadow font-semibold text-gray-600 hover:text-gray-900 dark:text-black dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    Dashboard
                </Link>
            ) : (
                <nav className="w-full bg-blue-400 shadow">
                    <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                        <div>
                            <div className="flex items-center justify-between py-3 md:py-5 md:block">
                                <Link to={''}

                                >
                                    <h2 className="text-2xl font-bold text-white">LOGO</h2>
                                </Link>
                                <div className="md:hidden">
                                    <button
                                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                        onClick={() => setNavbar(!navbar)}
                                    >
                                        {navbar ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-white"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-6 h-6 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4 6h16M4 12h16M4 18h16"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                    }`}
                            >
                                <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                    <li>
                                        <Link
                                            to="/"
                                            className="text-white hover:text-indigo-200"
                                            aria-current="page"
                                        >Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/about"
                                            className="text-white hover:text-indigo-200"
                                            aria-current="page"
                                        >About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/contact"
                                            className="text-white hover:text-indigo-200"
                                            aria-current="page"
                                        >Contact us
                                        </Link>
                                    </li>

                                </ul>

                                <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                                    <Link
                                        href={route('login')}
                                        className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                        aria-current="page"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                                        aria-current="page"
                                    >
                                        Register
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="hidden space-x-2 md:inline-block">
                            <Link
                                href={route('login')}
                                className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                aria-current="page"
                            >
                                Login
                            </Link>
                            <Link
                                href={route('register')}
                                className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                                aria-current="page"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </nav>
            )}

            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}
