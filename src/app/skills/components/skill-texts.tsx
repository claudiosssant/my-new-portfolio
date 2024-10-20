import { motion } from "framer-motion";


const SkillText = () => {
  return ( 
    <motion.div className="flex flex-col items-center w-full"
      initial={{ opacity : 0, x: -100}}
      whileInView={{ opacity : 1, x: 0}}
      exit={{ opacity : 0, x: 100}}
      transition={{ duration : 1.5}}
    >
      <div className="font-extrabold text-4xl">
        <h1>Minhas tecnologias</h1>
      </div>
      <div className="font-bold text-lg text-orange-600">
        <p>Tecnologias mais utilizadas no meu processo de desenvolvimento!</p>
      </div>
    </motion.div>
   );
}
 
export default SkillText;