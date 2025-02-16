import { useState } from "react";
import { FiMenu, FiHome, FiUser, FiSettings } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white h-screen p-5 pt-8 ${
          isOpen ? "w-60" : "w-16"
        } duration-300 relative`}
      >
        <button
          className="absolute top-6 right-4 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu size={24} />
        </button>

        <ul className="mt-10 space-y-4">
          <SidebarItem icon={<FiHome size={24} />} text="Início" isOpen={isOpen} />
          <SidebarItem icon={<FiUser size={24} />} text="Perfil" isOpen={isOpen} />
          <SidebarItem icon={<FiSettings size={24} />} text="Configurações" isOpen={isOpen} />
        </ul>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, isOpen }) => (
  <li className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded cursor-pointer">
    {icon}
    <span className={`overflow-hidden transition-all duration-300 ${isOpen ? "w-auto" : "w-0 opacity-0"}`}>
      {text}
    </span>
  </li>
);

export default Sidebar;
