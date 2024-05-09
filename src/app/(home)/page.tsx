import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import HomeText from "./components/home-text";
import Skills from "../skills/page";


const Home = () => {
  return ( 
    <div className="">
      <Header />
      <div className="h-screen justify center">
        <HomeText />
      </div>
      <Skills />
      <Footer />
    </div>
   );
}
 
export default Home;