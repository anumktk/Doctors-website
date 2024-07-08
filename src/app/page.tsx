import Image from "next/image";
import Hero from "./Components/Hero";
import HomePage from "./Components/Home";
import Testimonials from "./Components/Testimonials";
import Whatsapp from "./Components/Whatsapp";

export default function Home() {
  return (
    <div>
       <Hero/>
         <HomePage/>
         <Testimonials/>
         <Whatsapp/>
    </div>
  );
}
