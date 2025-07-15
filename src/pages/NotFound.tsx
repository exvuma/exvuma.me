import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Head from 'next/head';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>404 Not Found | Victoria Fawcett</title>
        <meta name="robots" content="noindex" />
        <meta name="description" content="Page not found – Victoria Fawcett, Engineer-turned-PM and AI Product Leader." />
      </Head>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Victoria Fawcett Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
