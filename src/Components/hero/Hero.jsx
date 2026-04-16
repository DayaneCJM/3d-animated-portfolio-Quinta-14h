import "./hero.css";
import Speech from "./Speech.jsx";

const Hero = () => {
    return (
    <div className="hero">
        {/*Titulo, apresentação*/}
        <div className="hSection left">
            <h1 className="htitle">
                Olá a Todos, <br/>
                <span> Eu sou Dayane</span>
            </h1>  
            {/*Prêmios ou projetos relevantes, certificações*/ }
            <div className="awards">
                <h2> 
                    Desenvolvedor bem avaliado
                </h2>
                <p>Lorem ipsum dolor sit amet,</p>
            </div>
            <div className="awardList">
                <img src="/award1.png" alt = ""/>
                <img src="/award2.png" alt = ""/>
                <img src="/award3.png" alt = ""/>
            </div>
            <a href="#services"> 
                <svg 
                width= "50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://wwww.w3.org/2000/sgv"
                >
                <path
                    d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 
                    9V15C19 18.8666 15.866 22 12 22C8.134401 22 5 18.866 5 15V9Z"
                    stroke="white"
                    strokeWidth="1"
                
                />    
                <path
                    d="M12 58V"
                    stroke = "white"
                    strokeWidth="1"
                    strokeLinecap="round"
                />
                </svg>
            </a>
        </div>


        <div className="hSection right">
            <div className="follow">
                <a href="/"> 
                    <img src="/instagram.png" alt=""/>
                </a>
                 <a href="/"> 
                    <img src="/facebook.png" alt=""/>
                </a>   
                 <a href="/"> 
                    <img src="/youtube.png" alt=""/>
                </a>       
            </div>

            {/*Balão*/}
            <Speech/>

            <div className="certificate">
                <img src="/certificate.png" alt=""/>
                Certificado Teste <br/>
                Desenvolvedor Web <br/>
                PROFISSIONAL 
            </div>

            <a href="#contact" className="contactLink">
                <div className="contactButton">
                    <svg viewBox="0 0 200 200" width="150" height="150">
                        <circle cx="100" cy= "100"r="90" fill="pink"/>
                        
                        <path
                        id="innerCirclePath"
                        fill="none"
                        d="M 100, 100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                        />
                        <text className="circleText">
                            <textPath href="#innerCirclePath"> Contrate Agora </textPath>
                        </text>
                        <text className="circleText">
                            <textPath href="#innerCirclePath" startOffset="45%"> Entrar em contato  </textPath>
                        </text>
                    </svg>
                    

                </div>

            </a>
        </div>

    </div>
    )
};

export default Hero;