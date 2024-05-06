import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-gray-800 p-2 bottom-0 fixed w-full">
            <div className="container mx-auto flex justify-between items-center text-white text-sm">
                <div className="flex flex-col">
                    <p className="mb-2">Buenos Aires 1400, Neuquén, Argentina</p>
                </div>
                <div className="flex">
                  <a href="https://github.com/Julian-Alcaraz/PWA-2024-TP2" target="_blank" rel="noopener noreferrer" className="mr-4 hover:text-slate-500">
                    <FaGithub size={20} />
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="mr-4 hover:text-slate-500">
                    <FaTwitter size={20} />
                  </a>
                  <a href="https://ar.linkedin.com/" target="_blank" rel="noopener noreferrer" className="mr-4 hover:text-slate-500">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-500">
                    <FaInstagram size={20} />
                  </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;