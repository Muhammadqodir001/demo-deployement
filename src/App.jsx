import Hero from './components/Hero.jsx'
import NavBar from './components/NavBar.jsx'
import Offers from './components/offers.jsx'
import Plan from './components/Plan.jsx'
import Rooms from './components/Rooms.jsx'
import Image from './components/Image.jsx'
import Footer from './components/Footer.jsx'


function App() {
  return (
       <div>
           <NavBar/>
           <Hero  /> 
           <Offers/>
           <Plan  />
           <Rooms />
           <Image />
           <Footer />
      </div>
    
  );
}

export default App
