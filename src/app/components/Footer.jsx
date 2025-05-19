import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaSkype, FaBehance } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-sky-500 text-white px-[8vw] py-12">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 border-b border-gray-600 pb-10">
        {/* Newsletter + Social */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <h3 className="text-lg uppercase tracking-wider">News Letter</h3>
          <div className="flex max-w-md">
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 p-3 rounded-l-md bg-white placeholder-gray-300 text-sm"
            />
            <button className="bg-[#40ffaa] px-4 rounded-r-md hover:bg-green-400 border-white from-[#40ffaa] to-[#4079ff] bg-gradient-to-r border ">
              <HiOutlineMail className="text-xl hover:scale-105 transition duration-300 hover:shadow-lg shadow-md" />
            </button>
          </div>
          <h3 className="text-lg uppercase mt-6 tracking-wider">Follow Us</h3>
          <div className="flex gap-3">
            {[FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaSkype, FaBehance].map((Icon, i) => (
              <Icon key={i} className="text-lg bg-gray-400 p-2 rounded-full hover:bg-[#40ffaa] transition size-10" />
            ))}
          </div>
        </div>

        {/* Company Info */}
        <div className="flex flex-col gap-4 max-w-sm">
          <div className="text-2xl font-bold tracking-wider">INFINITY</div>
          <p className="text-sm text-gray-300">
            Aoluptas sit aspernatur aut odit aut fugit, sed elits quias consequuntur magni dolores eos.
          </p>
          <div className="flex items-start gap-2 text-sm">
            <HiOutlineLocationMarker className="mt-1" />
            10th Floor, Washington Square Park, NY, United States
          </div>
          <div className="flex items-center gap-2 text-sm">
            <HiOutlineMail />
            Support@domain.com
          </div>
          <div className="flex items-center gap-2 text-sm">
            <HiOutlinePhone />
            (004)+ 124 45 78 678
          </div>
        </div>

        {/* Service Links */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">SERVICE PROVIDED</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>SEO Services</li>
              <li>Social Media</li>
              <li>Web Development</li>
              <li>Blog Management</li>
              <li>Email Marketing</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 invisible">.</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>Pay per click</li>
              <li>Web Analytics</li>
              <li>Content Management</li>
              <li>Virtual Marketing</li>
              <li>Keyword Analytics</li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full max-w-sm">
          <h4 className="font-semibold mb-4">GET FREE QUOTE</h4>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Name"
              className="p-2 text-sm bg-white border  border-gray-400 rounded text-black"
            />
            <input
              type="text"
              placeholder="Phone No"
              className="p-2 text-sm bg-white border  border-gray-400 rounded text-black"
            />
            <textarea
              placeholder="Messages"
              className="p-2 text-sm bg-white border  border-gray-400 rounded text-black h-24"
            />
            <button
              type="submit"
              className="from-[#40ffaa] to-[#4079ff] bg-gradient-to-r hover:bg-green-400  py-2 px-4 rounded text-sm font-semibold  text-white  border border-white hover:scale-105 transition duration-300 hover:shadow-lg shadow-md"
            >
              
              SEND NOW
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-gray-400 mt-6">
        Copyright © 2025 Infinity SEO Solution. All Rights Reserved.
      </div>
    </footer>
  );
}
