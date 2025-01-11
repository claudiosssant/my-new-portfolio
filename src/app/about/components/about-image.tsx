import { motion } from "framer-motion";
import Image from "next/image";
import aboutImg from "../../../../public/IMG_4109.jpg"

const AboutImage = () => {
  return ( 
   <motion.div initial={{ scale: 0 }} animate={{ scale: 1.2 }} className="p-12">
    <div>
      <Image width={320} height={300} src={aboutImg} alt="foto de cláudio" />
    </div>
   </motion.div>
   );
}
 
export default AboutImage;