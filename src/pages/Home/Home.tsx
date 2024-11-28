import Feedback from "./sections/Feedback";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import WorkProcess from "./sections/WorkProcess";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <WorkProcess />
      <Feedback />
    </div>
  );
};

export default Home;
