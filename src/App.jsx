import Hero from "./Components/hero/Hero";
import Services from "./Components/services/Services";
import Portifolio from "./Components/portifolio/Portifolio";
import Contact from "./Components/contact/Contact";

const App = () => {
  return (
    <div className="container">
      <section id="#hero">
      <Hero/>
      </section>

      <section id = "#services"> 
        <Services/>
      </section>

      <section id = "#portifolio" >
          <Portifolio/>
       </section>
      
      <section id = "#contact">
         <Contact/>
      </section> 

    </div>
  )
}

export default App