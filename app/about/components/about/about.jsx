// import Image from "next/image";
// import Card from "./spotify/card";
// import { motion } from "framer-motion";
// import Me1 from "@/public/image/me1.jpg";
// import Me2 from "@/public/image/me2.jpg";
// import Me3 from "@/public/image/me3.jpg";
// import Hr from "@/components/Hr";

// function Title() {
//   return (
//     <div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
//       <div className="flex justify-center items-center flex-col my-5 self-start ">
//         <Hr variant="long"></Hr>
//         <h1 className="text-3xl font-bold mt-3">Who Am I?</h1>
//       </div>
//     </div>
//   );
// }

// export default function About() {
//   return (
//     <>
//       <Title />
//       <div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
//         <div className="flex justify-center items-start flex-col mb-5 ">
//           <div className="images relative w-full  aspect-square">
//             <div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.5, x: 100 }}
//                 whileInView={{
//                   opacity: 1,
//                   scale: 1,
//                   x: 0,
//                 }}
//                 className="w-full h-full"
//               >
//                 <Image
//                   src={Me1}
//                   alt="Alvalens"
//                   layout="fill"
//                   objectFit="cover"
//                   placeholder="blur"
//                 />
//               </motion.div>
//             </div>
//             <div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   scale: 0.5,
//                   x: -100,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   scale: 1,
//                   x: 0,
//                 }}
//                 transition={{ delay: 0.3 }}
//                 className="w-full h-full"
//               >
//                 <Image
//                   src={Me2}
//                   alt="Alvalens"
//                   layout="fill"
//                   objectFit="cover"
//                   placeholder="blur"
//                 />
//               </motion.div>
//             </div>
//             <div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   scale: 0.5,
//                   x: -100,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   scale: 1,
//                   x: 0,
//                 }}
//                 transition={{
//                   delay: 0.5,
//                 }}
//                 className="w-full h-full"
//               >
//                 <Image
//                   src={Me3}
//                   alt="Alvalens"
//                   layout="fill"
//                   objectFit="cover"
//                   placeholder="blur"
//                 />
//               </motion.div>
//             </div>
//           </div>
//         </div>
//         <motion.div
//           className="flex justify-center items-start flex-col mb-5 md:px-10"
//           initial={{
//             opacity: 0,
//             x: 200,
//           }}
//           whileInView={{
//             opacity: 1,
//             x: 0,
//           }}
//           transition={{
//             delay: 0.5,

//             type: "spring",
//           }}
//         >
//           <h2 className="text-2xl font-bold tracking-wider mb-3">
//             Ly An CHHAY
//           </h2>
//           <p className="text-gray-600 text-justify title text-lg">
//             Hi there, I&rsquo;m Ly An, a Data Scientist with dual master’s
//             degrees in
//             <span className="text-black font-medium">
//               {" "}
//               Data Science
//             </span> and{" "}
//             <span className="text-black font-medium">
//               {" "}
//               Statistical Modeling
//             </span>{" "}
//             from{" "}
//             <a
//               href="https://www.ip-paris.fr/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="underline font-medium text-gray-600"
//             >
//               Institut Polytechnique de Paris
//             </a>{" "}
//             and{" "}
//             <a
//               href="https://www.telecom-sudparis.eu/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="underline font-medium text-gray-600"
//             >
//               Télécom SudParis
//             </a>{" "}
//             (France). I’m passionate about creating AI-driven solutions that
//             deliver real-world impact, with nearly
//             <span className="text-black font-medium"> two years</span> of
//             experience across technology, healthcare, and social protection
//             sectors. My interests lie in machine learning, large language
//             models, and computer vision — exploring how these technologies
//             enable smarter decisions and innovative solutions. Naturally curious
//             and analytical, I thrive on transforming complex challenges into
//             actionable insights. I believe the most impactful AI blends
//             technical mastery with human intuition to create meaningful,
//             real-world outcomes.
//           </p>
//           <Card />
//         </motion.div>
//       </div>
//     </>
//   );
// }

import Image from "next/image";
import Card from "./spotify/card";
import { motion } from "framer-motion";
import Me1 from "@/public/image/me1.jpeg";
import Me2 from "@/public/image/me2.jpeg";
import Me3 from "@/public/image/me3.jpeg";
import Hr from "@/components/Hr";

function Title() {
  return (
    <div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
      <div className="flex justify-center items-center flex-col my-5 self-start ">
        <Hr variant="long"></Hr>
        <h1 className="text-3xl font-bold mt-3 text-foreground">Who Am I?</h1>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <Title />
      <div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
        <div className="flex justify-center items-start flex-col mb-5 ">
          <div className="images relative w-full  aspect-square">
            <div className="absolute top-28 left-10 w-[50%]  aspect-square transition-all ease duration-300">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, x: 100 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                className="w-full h-full"
              >
                <Image
                  src={Me1}
                  alt="Alvalens"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                />
              </motion.div>
            </div>
            <div className="absolute top-16 right-28 w-[30%]  aspect-square transition-all ease duration-300">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  x: -100,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                transition={{ delay: 0.3 }}
                className="w-full h-full"
              >
                <Image
                  src={Me2}
                  alt="Alvalens"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                />
              </motion.div>
            </div>
            <div className="absolute bottom-16 right-20 w-[40%]  aspect-square transition-all ease duration-300">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  x: -100,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.5,
                }}
                className="w-full h-full"
              >
                <Image
                  src={Me3}
                  alt="Alvalens"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                />
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          className="flex justify-center items-start flex-col mb-5 md:px-10"
          initial={{
            opacity: 0,
            x: 200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.5,

            type: "spring",
          }}
        >
          <h2 className="text-2xl font-bold tracking-wider mb-3 text-foreground">
            Ly An CHHAY
          </h2>
          <p className="text-foreground/70 text-justify title text-lg">
            Hi there, I&rsquo;m Ly An, a Data Scientist with dual master&rsquo;s
            degrees in
            <span className="text-foreground font-medium">
              {" "}
              Data Science
            </span>{" "}
            and{" "}
            <span className="text-foreground font-medium">
              {" "}
              Statistical Modeling
            </span>{" "}
            from{" "}
            <a
              href="https://www.ip-paris.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Institut Polytechnique de Paris
            </a>{" "}
            and{" "}
            <a
              href="https://www.telecom-sudparis.eu/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Télécom SudParis
            </a>{" "}
            (France). I&rsquo;m passionate about creating AI-driven solutions
            that deliver real-world impact, with nearly
            <span className="text-foreground font-medium"> two years</span> of
            experience across technology, healthcare, and social protection
            sectors. My interests lie in machine learning, large language
            models, and computer vision — exploring how these technologies
            enable smarter decisions and innovative solutions. Naturally curious
            and analytical, I thrive on transforming complex challenges into
            actionable insights. I believe the most impactful AI blends
            technical mastery with human intuition to create meaningful,
            real-world outcomes.
          </p>
          <Card />
        </motion.div>
      </div>
    </>
  );
}
