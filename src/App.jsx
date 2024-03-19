import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Contacts from "./Components/Testimonials/Contacts/Contacts";
import Testimonials from "./Components/Testimonials/Testimonials";
import Title from "./Components/Title/Title";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="What We Offer" subtitle="OUR PROGRAM" />
        <Programs />
        <About />
        <Title title="Campus Photos" subtitle="Gallery" />
        <Campus />
        <Title title="What Student Says" subtitle="TESTIMONIALS" />
        <Testimonials />
        <Title title="Get in Touch" subtitle="CONTACT US" />
        <Contacts />
      </div>
    </div>
  );
};

export default App;
