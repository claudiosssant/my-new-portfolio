import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import HomeText from "./components/home-text";
import { Chakra_Petch } from 'next/font/google'
import Skills from "../skills/page";
import Projects from "../projects/page";

const chakra = Chakra_Petch({
  subsets: ['latin'],
  weight: '500'
})


const Home = () => {
  return ( 
    <div className={chakra.className}>
      <Header />
      <div className="h-screen justify center">
        <HomeText />
      </div>
      <Skills />
      <Projects/> 
      <Footer />
    </div>
   );
}
 
export default Home;