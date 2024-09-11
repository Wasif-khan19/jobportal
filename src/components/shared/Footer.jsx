import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col border-t-2">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <Link to="/">
          <span className="ml-3 text-xl">JobPortal</span>
        </Link>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2024 JobPortal —
        <a
          href="https://github.com/Wasif-khan19"
          className="text-gray-600 ml-1"
          rel="noopener noreferrer"
          target="_blank"
        >
          @github
        </a>
      </p>
      <a className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-2">
        <Facebook className="text-blue-500" />
        <Github />
        <Instagram className="text-red-500" />
        <Linkedin className="text-blue-700" />
      </a>
    </div>
  );
}

export default Footer;
