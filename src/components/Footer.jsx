import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 py-4">
      <div className="max-w-[1640px] m-auto px-4 py-4 w-full mx-auto p-4 md:flex md:items-center md:justify-between">
        <div className="flex flex-col justify-center items-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Ration
            </a>
            . All Rights Reserved.
          </span>
          <div className="mx-auto flex items-center justify-start gap-3">
            <p className="text-[0.65rem] text-gray-600">
              Images provided by{" "}
              <a
                href="https://www.unsplash.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-blue-900 font-bold">Unsplash</span>{" "}
              </a>
            </p>
          </div>
        </div>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="/" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
