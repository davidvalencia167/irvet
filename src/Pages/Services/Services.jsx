import { ChevronRight, Phone, X } from "lucide-react";
import "./Services.css"
import { useState } from "react";

function Services () {
  const [selectedRadiology, setSelectedRadiology] = useState(null);


    // Categorias de servicios
    const categories = [
        {title: "Hematologia", emoji: "🩸", color: "teal"},
        {title: "Bioquimicas Sanguineas", emoji: "🧪", color: "purple"},
        {title: "Uroanalisis", emoji: "💧", color: "teal"},
        {title: "Coproparasitologicos", emoji: "🦠", color: "purple"},
        {title: "Dermatologicos", emoji: "🔬", color: "teal"},
        {title: "Microbiologia", emoji: "🧫", color: "purple"},
        {title: "Inmunologicos", emoji: "🛡️", color: "teal"},
        {title: "Examenes Especializados", emoji: "💉", color: "purple"},
        {title: "Radiologia", emoji: "📡", color: "teal"},
        {title: "Ecografia", emoji: "🔊", color: "purple"},
    ];

    // Lista de examenes por categoria
    const examsByCategory = [
        {
            category: "Hematologia",
            tests: [
                {name: "Cuadro hemático canino/felino (glóbulos rojos, leucocitos y plaquetas)"},
                {name: "Conteo de reticulocitos "},
                {name: "Frotis hemoparásitos en lamina"},   
            ]
        },

        {
            category: "Bioquimicas Sanguineas",
            tests: [
                {name: "Albumina"},
                {name: "Alanina aminotransferasa SGPT/ALT"},
                {name: "Amilasa pancreática"},
                {name: "Aspartato aminotransferasa SGOT/AST"},
                {name: "Bilirrubina directa / indirecta / total = Cada una"},
                {name: "Nitrógeno ureico BUN"},
                {name: "Calcio sérico"},
                {name: "Colesterol"},
                {name: "Creatinina"},
                {name: "Fosfatasa alcalina"},
                {name: "Fosforo sérico"},
                {name: "Gama glutamil transferasa GGT"},
                {name: "Glicemia"},
                {name: "Magnesio sérico"},
                {name: "Triglicéridos"},
            ]
        },

        {
            category: "Uroanalisis",
            tests: [
                {name: "Citoquímico de orina"},
                {name: "Espermograma"},
            ]
        },

        {
            category: "Coproparasitologicos",
            tests: [
                {name: "Coprológico"},
                {name: "Coprológico seriado (3 muestras)"}
            ]
        },

        {
            category: "Dermatologicos",
            tests: [
                {name: "Koh"},
                {name: "Cerumen"}
            ]
        },

        {
            category: "Microbiologia",
            tests: [
                {name: "Coprocultivo + Antibiograma (1 semana)"},
                {name: "Cultivo de Secreciones y Antibiograma (1 semana)"},
                {name: "Urocultivo y Antibiograma (1 semana)"}
            ]
        },

        {
            category: "Inmunologicos",
            tests: [
                {name: "Test de parvovirus"},
                {name: "Test de parvovirus, coronavirus y giardia canino"},
                {name: "Test de distemper"},
                {name: "Test de ehrlichia Canis"},
                {name: "Test de ehrlichia, anaplasma y babesia"},
                {name: "Test Embarazo canino"},
                {name: "Test de inmunodeficiencia felina (FIV) y leucemia felina (FeLV)"}
            ]    
        },

        {
            category: "Examenes Especializados",
            tests: [
                {name: "Tsh"},
                {name: "T4 total"},
                {name: "Lipasa especifica canina"},
                {name: "Lipasa especifica felina"},
                {name: "Histopatología (10 días hábiles)"}
            ]    
        },

        {
            category: "Radiologia",
            tests: [
                {name: "2 imágenes radiográficas (canino o felino)"},
                {name: "Imagen adicional"},
                {name: "3 imágenes más lectura"},
                {name: "Radiografía con medio de contraste sulfato de bario para mascotas de 2 a 10 kg"},
                {name: "Radiografía con medio de contraste sulfato de bario para mascotas de 11 a 20 kg"},
                {name: "Radiografía con medio de contraste sulfato de bario para mascotas de 20 a 30 kg"}
            ]
        },

        {
            category: "Ecografia",
            tests: [
                {name: "Ecografía abdominal canina"},
                {name: "Ecografía abdominal felina"},
            ]
        }
    ];

    // Combos de Examenes
    const combos = [
        {exams: "3 exámenes"},
        {exams: "4 exámenes"},
        {exams: "5 exámenes"},
        {exams: "6 exámenes"},
        {exams: "7 exámenes"},
        {exams: "8 exámenes"},
        {exams: "9 exámenes"},
        {exams: "13 exámenes o Prehospitalario"},
    ];

    // Equipos
    const equipment = [
        {
            name: "FC-360 VET",
            emoji: "🖥️",
            description: "Analizador hematológico veterinario de última generación con tecnología de fluorescencia láser. Procesa muestras de perros, gatos y otras especies con precisión excepcional.",
            specs: ["60 muestras/hora", "26 parámetros", "3 histogramas"]
        },

        {
            name: "BK-200 VET",
            emoji: "⚗️",
            description: "Analizador de química clínica automático para veterinaria. Sistema de medición fotométrica con capacidad para múltiples especies animales.",
            specs: ["200 pruebas/hora", "Reactivos líquidos", "Calibración automática"],
        },

        {
            name: "Mindray BC-2800",
            emoji: "🔬",
            description: "Contador hematológico automático con tecnología de impedancia eléctrica y citometría de flujo. Ideal para análisis rápidos y precisos.",
            specs: ["26 muestras/hora", "19 parámetros", "Alta precisión"],
        }
    ];

    // Estudios Radiologicos
    const radiologyStudies = [
        {
            id: 1,
            emoji: "🧠",
            title: "Estudio del Cráneo",
            projections: "Lateral Derecha, Izquierda, Ventrodorsal, Oblicua Derecha",
            description: "El estudio radiológico del cráneo permite evaluar estructuras óseas, cavidades nasales, senos paranasales, órbitas y articulación temporomandibular. Es fundamental para el diagnostico de traumatismos, neoplasias, procesos infecciosos y malformaciones congénitas. ",
            evaluates: [
                "Fracturas craneales y faciales",
                "Neoplasias óseas y de tejidos blandos",
                "Procesos infecciosos (sinusitis, otitis)",
                "Malformaciones congénitas",
                "Enfermedad periodontal avanzada",
                "Cuerpos extraños en cavidad nasal"
            ]
        },

        {
            id: 2,
            emoji: "🗣️",
            title: "Estudio de Cuello",
            projections: "Lateral Derecha/Izquierda, Ventrodorsal",
            description: "La radiografia cervical evalúa estructuras anatomicas como vértebras cervicales, tráquea, esófago, laringe y tejidos blandos adyacentes. Es esencial para detectar compresiones medulares, masas, cuerpos extraños y evaluacion de vía aérea superior.",
            evaluates: [
                "Fracturas y luxaciones cervicales",
                "Hernias discales cervicales",
                "Colapso traqueal",
                "Masas cervicales y esofágicas",
                "Cuerpos extraños en esofago",
                "Megaesófago",
                "Compresión medular"
            ]
        },

        {
            id: 3,
            emoji: "🫁",
            title: "Estudio de Tórax",
            projections: "Cuello, Tórax Lateral Derecho, Lateral Izquierdo, Ventrodorsal",
            description: "El estudio torácico completo permite evaluar pulmones, corazón, mediastino, caja torácica y diafragma. Es fundamental para el diagnostico de enfermedades cardiopulmonares, neoplasias, traumatismos y patologias pleurales.",
            evaluates: [
                "Patología pulmonar (neumonía, edema, neoplasias)",
                "Cardiomegalia y patología cardíaca",
                "Efusión pleural",
                "Neumotórax",
                "Fracturas costales y esternales",
                "Masas mediastínicas",
                "Hernias diafragmáticas", 
                "Metástasis pulmonares"
            ]
        },

        {
            id: 4,
            emoji: "🦵",
            title: "Miembros Posteriores",
            projections: "Craneocaudal, Mediolateral, Oblicuas",
            description: "El estudio radiológico de miembros posteriores evalúa fémur, tibia, peroné, tarso, metatarso y falanges. Permite diagnosticar fracturas, luxaciones, displasias, artropatías degenerativas y neoplasias óseas en las extremidades traseras.",
            evaluates: [
                "Fracturas de fémur, tibia y peroné",
                "Luxación de cadera y rótula",
                "Displasia de cadera",
                "Artritis y artrosis",
                "Neoplasias óseas (osteosarcoma)",
                "Enfermedad del ligamento cruzado",
                "Osteocondrosis",
                "Deformidades angulares"
            ]
        },

        {
            id: 5,
            emoji: "🦾",
            title: "Miembros Anteriores",
            projections: "Craneocaudal, Mediolateral, Oblicuas",
            description: "El estudio radiológico de miembros anteriores evalúa húmero, radio, cúbito, carpo, metacarpo y falanges. Es esencial para diagnóstico de fracturas, displasia de codo, fragmentación del proceso coronoides y otras patologías ortopédicas de extremidades delanteras.",
            evaluates: [
                "Fracturas de húmero, radio y cúbito",
                "Displasia de codo",
                "Fragmentación del proceso coronoides",
                "Incongruencia articular",
                "Luxaciones de hombro y codo",
                "Osteocondritis disecante (OCD)",
                "Artritis y degeneración articular",
                "Neoplasias óseas"
            ]
        },

        {
            id: 6,
            emoji: "🦴",
            title: "Columna Vertebral",
            projections: "Lateral Ventrodorsal",
            description: "El estudio radiológico de columna vertebral evalúa las vértebras cervicales, torácicas, lumbares y sacras. Fundamental para diagnóstico de hernias discales, fracturas vertebrales, espondilosis, espondilolistesis y neoplasias espinales que causan compresión medular.",
            evaluates: [
                "Hernias discales intervertebrales",
                "Fracturas y luxaciones vertebrales",
                "Espondilosis deformante",
                "Estenosis del canal medular",
                "Espondilolistesis",
                "Discoespondilitis",
                "Neoplasias vertebrales",
                "Malformaciones congénitas (hemivértebras)"
            ]
        },

        {
            id: 7,
            emoji: "🦿",
            title: "Estudio de Rodilla",
            projections: "Craneocaudal, Mediolateral, Skyline (tangencial rotuliana)",
            description: "El estudio radiológico de rodilla (articulación femorotibiorrotuliana) evalúa estructuras óseas de la articulación más compleja del miembro posterior. Esencial para diagnóstico de luxación de rótula, ruptura de ligamento cruzado, artropatías y osteocondrosis.",
            evaluates: [
                "Luxación medial o lateral de rótula",
                "Ruptura del ligamento cruzado craneal",
                "Enfermedad articular degenerativa",
                "Osteocondrosis disecante (OCD)",
                "Fracturas periarticulares",
                "Efusión articular",
                "Desalineamiento femorotibiorrotuliano",
                "Neoplasias articulares"
            ]
        }
    ];

    return(
        <>
            <section className="services-hero">
                <div className="container">
                    <h1>Nuestros Servicios</h1>
                    <p>
                        Portafolio completo de servicios diagnósticos veterinarios con tecnología de punta
                    </p>
                </div>
            </section>

            <section className="categories-section">
                <div className="container">
                    <h2>Categorías de Servicios</h2>
                    <div className="categories-grid">
                        {categories.map((cat, index) => (
                            <div key={index} className={`category-card ${cat.color}`}>
                                <div className="category-icon">
                                    <span className="emoji-icon">{cat.emoji}</span>
                                </div>
                                <h3>{cat.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pricing-section">
                <div className="container">
                    <h2>Lista de Examenes por Categoria</h2>
                    <div className="pricing-grid">
                        {examsByCategory.map((category, idx) => (
                            <div key={idx} className="price-table">
                                <h3 className="price-table-header">{category.category}</h3>
                                <div className="price-table-body">
                                    {category.tests.map((test, index) => (
                                        <div key={index} className="price-row">
                                            <span className="test-name">{test.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="combos-section">
                <div className="container">
                    <h2>Combos de Examenes</h2>
                    <p className="combos-description">
                        Ahorra combinando multiples exámenes en un solo paquete 
                    </p>
                    <div className="combos-table">
                        <div className="combos-header">
                            <span>Cantidad de Exámenes</span>
                        </div>
                        {
                            combos.map((combos, idx) => (
                                <div key={idx} className="combo-row">
                                    <span className="combo-exams">{combos.exams}</span>
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            <section className="equipment-section">
                <div className="container">
                    <h2>Nuestros Equipos</h2>
                    <div className="equipment-grid">
                            {equipment.map((item, idx) => (
                                <div key={idx} className="equipment-card">
                                    <div className="equipment-icon">
                                        <span className="emoji-icon">{item.emoji}</span>
                                    </div>
                                    <h3>{item.name}</h3>
                                    <p className= "equipment-description">{item.description}</p>
                                    <ul className="equipment-specs">
                                        {item.specs.map((spec, i)=> (
                                            <li key={i}>{spec}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            <section className="radiology-section">
                <div className="container">
                    <h2>Estudios Radiológicos</h2>
                    <p className="section-subtitle">
                        Selecciona un estudio para ver el detalle completo
                    </p>
                    <div className="radiology-grid">
                        {
                            radiologyStudies.map((study) => (
                                <div key={study.id} className="radiology-card" onClick={() => setSelectedRadiology(study.id)}>
                                    <div className="radiology-icon">
                                    <span className="emoji-icon-large">{study.emoji}</span>
                                </div>
                                <h3>{study.title}</h3>
                                <p className="radiology-projections">{study.projections}</p>
                                <button className="radiology-button">
                                    Ver Detalle <ChevronRight size={18}/>
                                </button>
                                </div>  
                            ))}
                    </div>
                </div>
            </section>

            {
                selectedRadiology && (
                    <div className="modal-overlay" onClick={() => setSelectedRadiology(null)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={() => setSelectedRadiology(null)}>
                                <X size={24}/>
                            </button>
                            {
                                radiologyStudies.filter((s) => s.id === selectedRadiology).map((study) => (
                                    <div key={study.id} className="modal-body">
                                        <h2 className="modal-title">{study.title}</h2>
                                        <p className="modal-projections">
                                            <strong>Proyecciones:</strong> {study.projections}
                                        </p>
                                        <p className="modal-description">{study.description}</p>
                                        <h3 className="modal-subtitle">¿Qué se evalúa?</h3>
                                        <ul className="modal-list">
                                            {
                                                study.evaluates.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                        </ul>
                                        <div className="modal-footer">
                                            <p>
                                                <strong>Nota:</strong> Las imágenes radiográficas se adjuntan con el informe diagnóstico completo.
                                            </p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                )}

                <section className="services-cta">
                    <div className="container">
                        <h2>¿Necesitas agendar un examen?</h2>
                        <p>Contáctanos para más información sobre nuestros servicios y precios</p>
                        <a href="tel:3041322283" className="services-cta-button">
                            <Phone size={20}/>
                            Contactar: 304 132 2283
                        </a>
                    </div>
                </section>  
        </>
    );
};

export default Services;