// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
// import {
//   CodepenIcon,
//   WebhookIcon,
//   ActivityIcon,
//   MobileIcon,
//   TechIcon,
// } from "./icons";

// const skillCategories = {
//   web: {
//     title: "Programming Language",
//     icon: CodepenIcon,
//     description: "Building modern, responsive web applications",
//     languages: ["python", "R", "SQL"],
//     tools: [
//       "Visual Studio Code",
//       "Git",
//       "Github",

//       "Docker",
//       "Kubernetes",
//       "Google Cloud",
//     ],
//   },
//   api: {
//     title: "REST API",
//     icon: WebhookIcon,
//     description: "Creating robust and scalable backend services",
//     languages: [
//       "NodeJS",
//       "ExpressJS",
//       "PHP",
//       "Laravel",
//       "Python",
//       "FastAPI",
//       "Flask",
//       "Django",
//       "MySQL",
//       "PostgreSQL",
//       "MongoDB",
//       "Firebase",
//     ],
//     tools: [
//       "Postman",
//       "Docker",
//       "Kubernetes",
//       "Swagger",
//       "Git",
//       "Github",
//       "Google Cloud",
//       "IBM Cloud",
//     ],
//   },
//   ai: {
//     title: "AI & Machine Learning",
//     icon: ActivityIcon,
//     description: "Developing intelligent solutions with ML/AI",
//     languages: [
//       "Python",
//       "TensorFlow",
//       "PyTorch",
//       "Scikit-learn",
//       "Pandas",
//       "NumPy",
//       "Jupyter",
//       "OpenAI API",
//       "Gemini API",
//       "LangChain",
//     ],
//     tools: [
//       "Jupyter Notebook",
//       "Google Colab",
//       "Google Cloud AI",
//       "AWS SageMaker",
//       "IBM Watson",
//     ],
//   },
// };

// function SkillCard({ skill, isSelected, onClick }) {
//   const Icon = skill.icon;

//   return (
//     <motion.div
//       onClick={onClick}
//       className={`relative cursor-pointer group p-6 rounded-2xl backdrop-blur-lg border transition-all duration-300 ${
//         isSelected
//           ? "bg-white/20 border-black border-2 shadow-lg"
//           : "bg-white/10 border-gray-300/20 hover:bg-white/20 hover:border-gray-300/30"
//       }`}
//       whileHover={{
//         scale: 1.05,
//         rotateY: 5,
//       }}
//       whileTap={{ scale: 0.95 }}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{
//         type: "spring",
//         stiffness: 300,
//         damping: 20,
//       }}
//     >
//       {!isSelected && (
//         <div className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-50 bg-gradient-to-r from-gray-400/20 to-gray-600/20 blur-xl" />
//       )}

//       <div className="relative z-10 flex flex-col items-center text-center space-y-4">
//         <div
//           className={`p-4 rounded-xl transition-all duration-300 ${
//             isSelected ? "bg-white/30" : "bg-white/10 group-hover:bg-white/20"
//           }`}
//         >
//           <Icon className="w-8 h-8 text-foreground" />
//         </div>
//         <div>
//           <h3 className="font-semibold text-foreground text-lg mb-2">
//             {skill.title}
//           </h3>
//           <p className="text-muted-foreground text-sm leading-relaxed">
//             {skill.description}
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// function SkillDetails({ selectedSkill }) {
//   if (!selectedSkill) return null;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.5 }}
//       className="mt-12 space-y-8"
//     >
//       {/* Languages & Frameworks */}
//       <motion.div
//         className="backdrop-blur-lg bg-white/20 border border-gray-300/30 rounded-2xl p-8"
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 0.2 }}
//       >
//         <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
//           Languages & Frameworks
//         </h3>
//         <div className="flex flex-wrap justify-center gap-4">
//           {selectedSkill.languages.map((lang, index) => (
//             <motion.div
//               key={lang}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.3 + index * 0.1 }}
//               className="flex flex-col items-center justify-center p-4 bg-white/30 border border-gray-400/40 rounded-xl hover:scale-110 transition-transform cursor-default"
//               whileHover={{ y: -5 }}
//             >
//               <TechIcon tech={lang} className="text-4xl" />
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       {/* Tools */}
//       <motion.div
//         className="backdrop-blur-lg bg-white/20 border border-gray-300/30 rounded-2xl p-8"
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 0.4 }}
//       >
//         <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
//           Tools & Technologies
//         </h3>
//         <div className="flex flex-wrap justify-center gap-4">
//           {selectedSkill.tools.map((tool, index) => (
//             <motion.div
//               key={tool}
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.5 + index * 0.1 }}
//               className="flex flex-col items-center justify-center p-4 bg-white/30 border border-gray-400/40 rounded-xl hover:scale-110 transition-transform cursor-default"
//               whileHover={{ y: -5 }}
//             >
//               <TechIcon tech={tool} className="text-4xl" />
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default function Skills() {
//   const [selectedCategory, setSelectedCategory] = useState("web");
//   return (
//     <div className="relative">
//       <div className="mx-auto container px-6 py-20">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center space-y-4 mb-16"
//         >
//           <h2 className="text-5xl font-bold title-text">Skills & Expertise</h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
//             Explore my technical skills across different domains. Click on any
//             category to see the specific technologies and tools I work with.
//           </p>
//         </motion.div>

//         {/* Skill Categories Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           {Object.entries(skillCategories).map(([key, skill], index) => (
//             <motion.div
//               key={key}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//             >
//               <SkillCard
//                 skill={skill}
//                 isSelected={selectedCategory === key}
//                 onClick={() => setSelectedCategory(key)}
//               />
//             </motion.div>
//           ))}
//         </div>

//         {/* Skill Details */}
//         <AnimatePresence mode="wait">
//           <SkillDetails selectedSkill={skillCategories[selectedCategory]} />
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { CodepenIcon, WebhookIcon, ActivityIcon, MobileIcon } from "./icons";

const skillCategories = {
  programming: {
    title: "Core Development",
    icon: CodepenIcon,
    description: "Programming languages and development fundamentals",
    languages: [
      "Python",
      "SQL",
      "R",
      "Git",
      "Docker",
      "Linux/Unix",
      "Bash/Shell",
      "VS Code",
      "Jupyter Lab",
      "Google Colab",
    ],
  },
  ml: {
    title: "AI & Machine Learning",
    icon: ActivityIcon,
    description: "ML frameworks and AI technologies",
    languages: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "XGBoost",
      "LightGBM",
      "Hugging Face",
      "OpenAI API",
      "Computer Vision",
      "Natural Language Processing",
      "Model Training",
      "Model Evaluation",
    ],
  },
  data: {
    title: "Data Engineering & Analytics",
    icon: WebhookIcon,
    description: "Data processing and analysis",
    languages: [
      "Pandas",
      "NumPy",
      "Apache Spark",
      "Data Visualization",
      "Data Analysis",
      "Data Cleaning",
      "MySQL",
      "MongoDB",
      "Statistical Analysis",
      "Exploratory Data Analysis",
    ],
  },
  deployment: {
    title: "Application Development",
    icon: MobileIcon,
    description: "Web applications and model deployment",
    languages: [
      "FastAPI",
      "Streamlit",
      "Gradio",
      "REST APIs",
      "Web Applications",
      "Model Deployment",
      "Containerization",
      "API Development",
      "Interactive Dashboards",
    ],
  },
};

function SkillCard({ skill, isSelected, onClick }) {
  const Icon = skill.icon;

  return (
    <motion.div
      onClick={onClick}
      className={`relative cursor-pointer group p-6 rounded-2xl backdrop-blur-lg border transition-all duration-300 ${
        isSelected
          ? "bg-white/20 border-black border-2 shadow-lg"
          : "bg-white/10 border-gray-300/20 hover:bg-white/20 hover:border-gray-300/30"
      }`}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {!isSelected && (
        <div className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-50 bg-gradient-to-r from-gray-400/20 to-gray-600/20 blur-xl" />
      )}

      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        <div
          className={`p-4 rounded-xl transition-all duration-300 ${
            isSelected ? "bg-white/30" : "bg-white/10 group-hover:bg-white/20"
          }`}
        >
          <Icon className="w-8 h-8 text-foreground" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground text-lg mb-2">
            {skill.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {skill.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function SkillDetails({ selectedSkill }) {
  if (!selectedSkill) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="mt-12"
    >
      {/* Technologies & Frameworks */}
      <motion.div
        className="backdrop-blur-lg bg-white/20 border border-gray-300/30 rounded-2xl p-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
          Technologies & Expertise
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {selectedSkill.languages.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              className="flex items-center justify-center px-4 py-3 bg-white/30 border border-gray-400/40 rounded-xl hover:scale-105 transition-transform cursor-default shadow-sm"
              whileHover={{ y: -2, shadow: "lg" }}
            >
              <span className="text-sm font-medium text-foreground text-center">
                {tech}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("programming");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render animations during SSR
  if (!isMounted) {
    return (
      <div className="relative">
        <div className="mx-auto container px-6 py-20">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-5xl font-bold title-text">
              Technical Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Comprehensive skills across data science, machine learning, and
              software engineering
            </p>
          </div>

          {/* Static grid for SSR */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {Object.entries(skillCategories).map(([key, skill]) => {
              const Icon = skill.icon;
              const isSelected = key === "programming";
              return (
                <div
                  key={key}
                  className={`relative cursor-pointer group p-6 rounded-2xl backdrop-blur-lg border transition-all duration-300 ${
                    isSelected
                      ? "bg-white/20 border-black border-2 shadow-lg"
                      : "bg-white/10 border-gray-300/20"
                  }`}
                >
                  <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                    <div
                      className={`p-4 rounded-xl ${
                        isSelected ? "bg-white/30" : "bg-white/10"
                      }`}
                    >
                      <Icon className="w-8 h-8 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-lg mb-2">
                        {skill.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Static details for SSR */}
          <div className="mt-12">
            <div className="backdrop-blur-lg bg-white/20 border border-gray-300/30 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                Technologies & Expertise
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skillCategories.programming.languages.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center justify-center px-4 py-3 bg-white/30 border border-gray-400/40 rounded-xl shadow-sm"
                  >
                    <span className="text-sm font-medium text-foreground text-center">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Client-side rendering with animations
  return (
    <div className="relative">
      <div className="mx-auto container px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-5xl font-bold title-text">Technical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Comprehensive skills across data science, machine learning, and
            software engineering
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {Object.entries(skillCategories).map(([key, skill], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <SkillCard
                skill={skill}
                isSelected={selectedCategory === key}
                onClick={() => setSelectedCategory(key)}
              />
            </motion.div>
          ))}
        </div>

        {/* Skill Details */}
        <AnimatePresence mode="wait">
          <SkillDetails selectedSkill={skillCategories[selectedCategory]} />
        </AnimatePresence>
      </div>
    </div>
  );
}
