import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import HomeText from "./components/home-text";


const Home = () => {
  return ( 
    <div className="">
      <Header />
      <div className="h-screen justify center">
        <HomeText />
      </div>
      <Footer />
    </div>
   );
}
 
export default Home;