
import { Activity, Beaker, FileText, Heart, Microscope, Stethoscope } from "lucide-react";

import "./Services.css"

function Services () {

    const services = [
        {
            title: "Parcial de Orina",
            description: "Análisis completo de orina para detectar infecciones y problemas renales",
            icon: Beaker
        },

        {
            title: "Cuadro Hematico",
            description: "Hemograma completo para evaluar glóbulos rojos, blancos y plaquetas",
            icon: Activity
        },

        {
            title: "Tricograma",
            description: "Estudio de parásitos y condiciones dermatológicas",
            icon: Microscope
        },

        {
            title: "Coprologico",
            description: "Análisis de heces para detectar parásitos y problemas digestivos",
            icon: FileText
        },

        {
            title: "Quimica Sanguinea",
            description: "Perfil bioquímico completo para evaluar función de órganos",
            icon: Heart
        },

        {
            title: "Cultivos",
            description: "Cultivos bacteriológicos para identificar agentes infecciosos",
            icon: Stethoscope
        },
    ];

    return(
        <div>
            <section className="services-hero">
                <div className="container">
                    <h1>Nuestros Servicios</h1>
                    <p>
                        Ofrecemos una amplia gama de exámenes de laboratorio veterinario con
                        tecnología de punta y resultados confiables 
                    </p>
                </div>
            </section>

            <section className="services-grid-section">
                <div className="container">
                    <div className="services-grid">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return(
                                <div key={index} className="service-card">
                                    <div className="service-icon">
                                        <Icon size={24}/>
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="services-images-section">
                <div className="container">
                    <h2>Categorias de Servicios</h2>
                    <div className="services-images-grid">
                        <div className="services-image-card">
                            
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Services;