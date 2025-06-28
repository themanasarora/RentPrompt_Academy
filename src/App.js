import HeroSection from './components/HeroSection';
import ProblemTransformation from './components/beforeAfter.jsx';
import SolutionStatement from './components/SolutionStatement';
import ProgramsOverview from './components/courses.jsx';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import FeatureGrid from './components/FeatureGrid' 
import ChatbotWithNotification from './components/notification.jsx';








function App() {
  return (

    <div>

      <HeroSection />
      <ProblemTransformation />
      <SolutionStatement />
      <FeatureGrid />
      <ProgramsOverview />
      <Testimonials />
      <FAQs />
      <ChatbotWithNotification />
      
    </div>

  );
}

export default App;
