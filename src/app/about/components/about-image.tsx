import { motion } from "framer-motion";
import Image from "next/image";
import aboutImg from "../../../../public/craudin.jpeg"

const AboutImage = () => {
  return ( 
   <motion.div initial={{ scale: 0 }} animate={{ scale: 1.2 }} className="border flex border-red-500 p-12">
    <div>
      <Image width={520} height={500} src={aboutImg} alt="foto de cláudio" />
    </div>
   </motion.div>
   );
}
 
export default AboutImage;