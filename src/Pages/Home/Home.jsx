
import "./Home.css";
import { Link } from "react-router";
import { ArrowRight, Award, Clock, Heart, Microscope } from "lucide-react";
import logo from "../../assets/images/logo_irvet.jpeg";
import irvet from "../../assets/images/Irvet.jpg";

import promoImage from "../../assets/images/promo-semana.jpg";

function Home () {
    return(
        <div>
            <section className="hero">
            <div className="container">
                <div className="hero-grid">
                    <div className="hero-content">
                        <h1>Instituto de Resultados Veterinarios</h1>
                        <p>
                            Laboratorio clínico especializado en diagnóstico veterinario con
                            tecnología de punta y resultados confiables para el cuidado de tus
                            mascotas.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/servicios" className="hero-button-primary">
                                Ver Servicios
                                <ArrowRight size={16} />
                            </Link>
                            <Link to="/contacto" className="hero-button-secondary">
                                Contáctanos
                            </Link>
                        </div>
                    </div>

                    <img className="hero-logo-image" src={irvet} alt="Logo de IRVET" />
                </div>
            </div>
        </section>

        <section className="features">
            <div className="container">
                <h2>¿Por qué elegir IRVET?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon turquoise">
                            <Microscope size={32}/>
                        </div>
                        <h3>Tecnologia Avanzada</h3>
                        <p>Equipos de última generación para diagnósticos precisos</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon purple">
                            <Award size={32}/>
                        </div>
                        <h3>Personal Calificado</h3>
                        <p>Profesionales expertos en laboratorio veterinario</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon turquoise">
                            <Clock size={32}/>
                        </div>
                        <h3>Resultados Rápidos</h3>
                        <p>Entrega ágil de resultados para diagnósticos oportunos</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon purple">
                            <Heart size={32}/>
                        </div>
                        <h3>Cuidado Integral</h3>
                        <p>Atención personalizada para cada mascota</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="promo-section">
            <div className="container">
                <h2>Promocion Actual</h2>
                <div className="promo-image-container">
                    <img src={promoImage} alt="Promocion Actual" />
                    <div className="promo-cta">
                        <Link to="/promociones" className="promo-button">
                            Ver todas las promociones
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="cta-section">
            <div className="container">
                <h2>¿Necesitas agendar un examen?</h2>
                <p>Contactanos hoy mismo y obtén atención profesional para tu mascota</p>
                <a href="tel:304132228" className="cta-button">
                    Llamar: 304 132 2283
                </a>
            </div>
        </section>
        </div>
    );
}

export default Home;