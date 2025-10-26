// "use client";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome,
//   faUser,
//   faFolderOpen,
//   faEnvelope,
// } from "@fortawesome/free-solid-svg-icons";

// const Sidebar = () => {
//   const handleMoveToSection = (index) => {
//     fullpage_api.moveTo(index);
//     fullpage_api.getActiveSection();
//   };

//   const containIsActive = (index) => {
//     if (fullpage_api.getActiveSection().index === index) {
//       return "bg-gray-500";
//     }
//     return "";
//   };
//   return (
//     <div className="hidden md:flex fixed z-40 bg-gray-700 h-[50vh] w-14  flex-col justify-between items-center p-4 left-0 top-1/4 rounded-e-3xl">
//       <ul
//         id="sidebar"
//         className="flex flex-col justify-evenly items-center h-full  text-gray-50"
//       >
//         <li data-menuanchor="home" className="active">
//           <button onClick={() => handleMoveToSection(1)}>
//             <FontAwesomeIcon icon={faHome} className="text-xl" />
//           </button>
//         </li>
//         <li data-menuanchor="about">
//           <button onClick={() => handleMoveToSection(2)}>
//             <FontAwesomeIcon icon={faUser} className="text-xl" />
//           </button>
//         </li>
//         <li data-menuanchor="projects">
//           <button onClick={() => handleMoveToSection(3)}>
//             <FontAwesomeIcon icon={faFolderOpen} className="text-xl" />
//           </button>
//         </li>
//         <li data-menuanchor="contact">
//           <button onClick={() => handleMoveToSection(4)}>
//             <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
//           </button>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faFolderOpen,
  faEnvelope,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  // ===== NAVIGATION CONFIGURATION =====
  const navItems = [
    { anchor: "home", icon: faHome, label: "Home" },
    { anchor: "about", icon: faUser, label: "About" },
    { anchor: "projects", icon: faFolderOpen, label: "Projects" },
    { anchor: "blog", icon: faBlog, label: "Blog" },
    { anchor: "contact", icon: faEnvelope, label: "Contact" },
  ];

  return (
    // ===== SIDEBAR CONTAINER =====
    <div className="hidden md:flex fixed z-40 bg-black/40 backdrop-blur-lg h-auto py-6 w-24 flex-col justify-center items-center left-2 top-1/2 -translate-y-1/2 rounded-3xl shadow-2xl border border-white/10">
      {/* ===== NAVIGATION LIST ===== */}
      <ul
        id="sidebar"
        className="flex flex-col justify-center items-center space-y-6 w-full"
      >
        {/* ===== DYNAMIC NAV ITEMS ===== */}
        {navItems.map((item) => (
          <li
            key={item.anchor}
            data-menuanchor={item.anchor}
            className="group relative w-full flex justify-center"
          >
            {/* ===== NAVIGATION LINK ===== */}
            <a
              href={`#${item.anchor}`}
              className="flex flex-col items-center space-y-1 p-3 rounded-2xl transition-all duration-300 w-16 text-gray-300 hover:text-white hover:bg-white/10 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              {/* ===== ICON ===== */}
              <FontAwesomeIcon icon={item.icon} className="text-xl mb-1" />

              {/* ===== LABEL TEXT ===== */}
              <span className="text-xs font-medium">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
